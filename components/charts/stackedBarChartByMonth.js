import { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { uuid } from '../../utils';

const StackedBarChart = ({ data, labels, colors }) => {
  const d3Container = useRef(null);
  const width = 700;
  const height = 250;
  const [svgWidth, setSvgWidth] = useState(0);
  const keys = Object.keys(labels);
  const legendCellSize = 20;
  let tooltip = null;
  const chartUuid = uuid();

  const stack = d3
    .stack()
    .keys(keys)
    .order(d3.stackOrderReverse)
    .offset(d3.stackOffsetNone);

  const series = stack(data);

  const getTooltip = d => {
    const total = keys.reduce((sum, key) => sum + d[key], 0);
    return `
      <div>
        <b>${d.label}</b> - ${total} API</br>
        <br/>
        ${keys.map(key => `${d[key]} API : ${labels[key]}`).join('<br/>')}
      </div>
      `;
  };

  const addLegend = svg => {
    let legend = svg.append('g').attr('transform', 'translate(5, 15)'); // Représente le point précis en haut à gauche du premier carré de couleur

    // Pour chaque couleur, on ajoute un carré toujours positionné au même endroit sur l'axe X et décalé en fonction de la
    // taille du carré et de l'indice de la couleur traitée sur l'axe Y
    legend
      .selectAll()
      .data(Object.values(labels))
      .enter()
      .append('rect')
      .attr('height', legendCellSize + 'px')
      .attr('width', legendCellSize + 'px')
      .attr('x', 5)
      .attr('y', (d, i) => i * legendCellSize)
      .style('fill', (d, i) => colors[i]);

    // On procéde de la même façon sur les libellés avec un positionement sur l'axe X de la taille des carrés
    // à laquelle on rajoute 10 px de marge
    legend
      .selectAll()
      .data(keys)
      .enter()
      .append('text')
      .attr(
        'transform',
        (d, i) =>
          'translate(' + (legendCellSize + 10) + ', ' + i * legendCellSize + ')'
      )
      .attr('dy', legendCellSize / 1.6) // Pour centrer le texte par rapport aux carrés
      .style('font-size', '13px')
      .style('fill', 'grey')
      .text(d => labels[d]);
  };

  const draw = () => {
    const containerWidth =
      d3Container.current.getBoundingClientRect().width || width;

    if (data && d3Container.current && containerWidth !== svgWidth) {
      setSvgWidth(svgWidth);
      d3.select(d3Container.current).select('svg').remove();

      const svg = d3
        .select(d3Container.current)
        .append('svg')
        .attr('width', containerWidth)
        .attr('height', height + 80)
        .append('g')
        .attr('transform', 'translate(35, 10)');

      const x = d3
        .scaleBand()
        .domain(data.map(d => d.month))
        .range([0, containerWidth - 35])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(series[0], d => d[1]) + 35])
        .range([height, 0]);

      const interval = Math.round(data.length / 4);
      const xAxis = d3
        .axisBottom(x)
        .tickValues(x.domain().filter(d => d % interval === 1))
        .tickFormat((d, i) => data[i * interval].label);

      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .selectAll('text')
        .style('text-anchor', 'middle');

      svg
        .append('g')
        .attr('class', 'y axis')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#000')
        .attr('y', 6)
        .attr('dx', '30px')
        .style('text-anchor', 'end')
        .text('API');

      let groups = svg
        .selectAll('g.groupe')
        .data(series)
        .enter()
        .append('g')
        .style('fill', (d, i) => colors[i]);

      groups
        .selectAll('rect')
        .data(d => d)
        .enter()
        .append('rect')
        .attr('class', function (d) {
          return `month-${d.data.month}-${chartUuid}`;
        })
        .attr('x', d => x(d.data.month))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d[1]))
        .attr('height', d => height - y(d[1] - d[0]))
        .attr('cursor', 'help')
        .on('mouseover', function (event, d) {
          d3.selectAll(`.month-${d.data.month}-${chartUuid}`).attr(
            'opacity',
            0.6
          );
        })
        .on('mouseleave', function (event, d) {
          d3.selectAll(`.month-${d.data.month}-${chartUuid}`).attr(
            'opacity',
            1
          );
        })
        .on('mousemove', function (event, d) {
          if (!tooltip) return;
          tooltip.style('display', 'block');

          if (!tooltip) return;
          tooltip
            .html(getTooltip(d.data))
            .style('left', event.pageX + 10 + 'px')
            .style('top', event.pageY + 20 + 'px');
        })
        .on('mouseout', function (d) {
          if (!tooltip) return;
          tooltip.style('display', 'none');
        });

      addLegend(svg);
    }
  };

  useEffect(() => {
    /*eslint-disable*/
    tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('display', 'none');
    /*eslint-enable*/

    if (!data || !d3Container.current) {
      return;
    }

    draw();

    window.addEventListener('resize', () => draw());
    return window.removeEventListener('resize', () => draw());
  }, []);

  return (
    <>
      <div className="chart-wrapper" ref={d3Container} />

      <style global jsx>{`
        .chart-wrapper {
          width: 100%;
          margin: auto;
        }
        /* axis contour */
        .chart-wrapper > svg .axis path {
          stroke: #706f6f;
          stroke-width: 0.7;
          shape-rendering: crispEdges;
        }

        /* axis text */
        .chart-wrapper > svg .axis text {
          fill: #2b2929;
          font-family: Georgia, serif;
          font-size: 0.8rem;
        }

        div.tooltip {
          position: absolute;
          text-align: left;
          padding: 4px;
          background: #fff;
          max-width: 300px;
          border: 1px solid #aaa;
          border-radius: 2px;
          pointer-events: none;
        }

        @media only screen and (min-width: 1px) and (max-width: 700px) {
          div.tooltip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
export default StackedBarChart;
