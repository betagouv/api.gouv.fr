import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { monthDifference } from '../../utils';

const ORIGIN = '01/01/2020';

const getDate = api => {
  const lastUpdateArray = (api.last_update || ORIGIN).split('/');
  return new Date(
    parseInt(lastUpdateArray[2], 10),
    parseInt(lastUpdateArray[1], 10), // month is zero indexed,
    0
  );
};

const getLabel = m => {
  const d = new Date(
    new Date(ORIGIN).setMonth(new Date(ORIGIN).getMonth() + m)
  );
  var options = {
    year: 'numeric',
    month: 'long',
  };
  return new Intl.DateTimeFormat('fr-FR', options).format(d);
};

const generateData = allApis => {
  const origin = new Date(ORIGIN);
  const monthCount = monthDifference(origin, new Date()) + 1;

  //@ts-ignore
  const data = [...Array(monthCount).keys()].map(m => {
    return {
      month: m + 1,
      all: 0,
      close: 0,
      datapass: 0,
      label: getLabel(m),
      new: [],
    };
  });

  allApis.forEach(api => {
    const month = monthDifference(origin, new Date(getDate(api)) || origin);

    for (let m = month; m < monthCount; m++) {
      if (api.datapass_link) {
        data[m].datapass += api.datapass_link ? 1 : 0;
      }
      if (!api.datapass_link && api.is_open === -1) {
        data[m].close += api.is_open === -1 ? 1 : 0;
      }
      if (api.is_open === 0 || api.is_open === 1) {
        data[m].all += 1;
      }
    }
    data[month].new.push({ slug: api.slug, title: api.title });
  });

  return data;
};

const StackedBarChart = ({ allApis }) => {
  const d3Container = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const width = 700;
  const height = 250;
  const [svgWidth, setSvgWidth] = useState(0);
  const colors = ['#e0f3db', '#7bccc4', '#2b8cbe'];
  const keys = ['all', 'close', 'datapass'];
  const labels = {
    all: 'au total',
    close: ' en accès restreint',
    datapass: 'accessibles via le compte api.gouv.fr',
  };
  const legendCellSize = 20;
  let tooltip = null;

  const data = generateData(allApis);

  const stack = d3
    .stack()
    .keys(keys)
    .order(d3.stackOrderAppearance)
    .offset(d3.stackOffsetNone);

  const series = stack(data);

  const getTooltip = d => {
    const newAPICount = d.new.length;
    return `
      <div>
        <b>${d.label}</b></br>
        <p>
        ${d.all + d.close + d.datapass} API ${labels['all']}</br>
        ${d.close + d.datapass} API ${labels['close']}</br>
        ${d.datapass} API ${labels['datapass']}
        </p>
        <i>${
          newAPICount > 0
            ? `Cliquez pour faire apparaitre les ${newAPICount} API ajouteée(s) ce mois-ci`
            : 'Aucune API ajoutée ce mois -ci'
        }</i>
      </div>
      `;
  };

  const addLegend = svg => {
    let legend = svg.append('g').attr('transform', 'translate(10, 20)'); // Représente le point précis en haut à gauche du premier carré de couleur

    // Pour chaque couleur, on ajoute un carré toujours positionné au même endroit sur l'axe X et décalé en fonction de la
    // taille du carré et de l'indice de la couleur traitée sur l'axe Y
    legend
      .selectAll()
      .data(colors)
      .enter()
      .append('rect')
      .attr('height', legendCellSize + 'px')
      .attr('width', legendCellSize + 'px')
      .attr('x', 5)
      .attr('y', (d, i) => i * legendCellSize)
      .style('fill', d => d);

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
      d3.select(d3Container.current)
        .select('svg')
        .remove();

      const svg = d3
        .select(d3Container.current)
        .append('svg')
        .attr('width', containerWidth)
        .attr('height', height + 40)
        .append('g')
        .attr('transform', 'translate(35, 10)');

      const x = d3
        .scaleBand()
        .domain(data.map(d => d.month))
        .range([0, containerWidth - 35])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(series[0], d => d[1])])
        .range([height, 0]);

      const xAxis = d3
        .axisBottom(x)
        .tickValues(
          x.domain().filter(d => d % Math.round(data.length / 4) === 1)
        )
        .tickFormat((d, i) => data[i * 3].label);

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
        .attr('x', d => x(d.data.month))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d[1]))
        .attr('height', d => height - y(d[1] - d[0]))
        .attr('cursor', 'pointer')
        .on('click', function(event, d) {
          setSelectedMonth(d.data.month);
        })
        .on('mousemove', function(event, d) {
          if (!tooltip) return;
          tooltip
            .transition()
            .duration(200)
            .style('display', 'block');

          if (!tooltip) return;
          tooltip
            .html(getTooltip(d.data))
            .style('left', event.pageX + 'px')
            .style('top', event.pageY + 20 + 'px');
        })
        .on('mouseout', function(d) {
          if (!tooltip) return;
          tooltip.style('display', 'none');
        });

      addLegend(svg);
    }
  };

  useEffect(() => {
    tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('display', 'none');

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
      {selectedMonth && (
        <div>
          <h4>
            API Ajoutée(s) {selectedMonth === 1 ? 'avant' : 'en'}{' '}
            {getLabel(selectedMonth - 1)}
          </h4>
          {selectedMonth && data[selectedMonth - 1].new.length > 0 ? (
            <ul>
              {data[selectedMonth - 1].new.map(api => (
                <li key={api.slug}>
                  <a href={`/les-api/${api.slug}`}>{api.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <i>Aucunne API ajoutée ce mois-ci</i>
          )}
        </div>
      )}
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
          padding: 2px;
          background: #fff;
          max-width: 300px;
          border: 1px solid #666;
          border-radius: 2px;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};
export default StackedBarChart;
