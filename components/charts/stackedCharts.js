import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const extractDate = d => {
  const originDate = new Date('01/01/2020');

  if (!d) {
    return originDate;
  }
  const dAsArray = d.split('/');
  const dAsDate = new Date(
    parseInt(dAsArray[2], 10),
    parseInt(dAsArray[1], 10) - 1, // month is zero indexed,
    0
  );
  return dAsDate < originDate ? originDate : dAsDate;
};

const generateTimeSeries = apis => {
  const data = Object.values(
    apis.reduce((acc, element) => {
      const d = extractDate(element.last_update);
      const key = d.toString();
      if (acc[key]) {
        acc[key].count += 1;
      } else {
        acc[key] = { date: d, count: 1 };
      }
      return acc;
    }, {})
  ).sort((a, b) => (a.date < b.date ? -1 : 1));

  data.forEach((elem, index) => {
    if (index !== 0) {
      data[index].count += data[index - 1].count;
    }
  });

  return data;
};

const generateData = allApis => {
  return [
    { id: 'Nombre d’APIs', values: generateTimeSeries(allApis) },
    {
      id: 'Nombre d’APIs en accès restreint',
      values: generateTimeSeries(allApis.filter(a => a.is_open === -1)),
    },
    {
      id: 'Nombre d’APIs accessibles via le compte api.gouv (Datapass)',
      values: generateTimeSeries(allApis.filter(a => a.datapass_link)),
    },
  ];
};

const MultiLineChart = ({ allApis }) => {
  const d3Container = useRef(null);
  const width = 700;
  const height = 400;

  const data = generateData(allApis);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      const xScale = d3.scaleTime().range([0, width]);
      const yScale = d3.scaleLinear().rangeRound([height, 0]);

      xScale.domain(
        d3.extent(data[0].values, function(d) {
          return d.date;
        })
      );
      yScale.domain([
        0,
        d3.max(data, function(c) {
          return d3.max(c.values, function(d) {
            return d.count + 4;
          });
        }),
      ]);

      const yaxis = d3.axisLeft().scale(yScale);
      const xaxis = d3
        .axisBottom()
        .ticks(d3.timeMonth.every(1))
        .tickFormat(d3.timeFormat('%b %Y'))
        .scale(xScale);

      svg
        .append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xaxis);

      svg
        .append('g')
        .attr('class', 'axis')
        .call(yaxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('dy', '.75em')
        .attr('y', 6)
        .style('text-anchor', 'end')
        .text('Nombre d‘APIs');

      let id = 0;
      const ids = function() {
        return 'line line-' + id++;
      };

      const line = d3
        .line()
        .x(function(d) {
          return xScale(d.date);
        })
        .y(function(d) {
          return yScale(d.count);
        });

      const lines = svg
        .selectAll('lines')
        .data(data)
        .enter()
        .append('g');

      lines
        .append('path')
        .attr('class', ids)
        .attr('d', function(d) {
          return line(d.values);
        });
    }
  }, []);

  return (
    <>
      <svg
        className="d3-component"
        width={width}
        height={height}
        ref={d3Container}
      />
      <style global jsx>{`
        svg.d3-component {
          margin: auto;
          padding: 20px;
          overflow: inherit;
        }

        svg.d3-component path.line {
          fill: none;
          stroke: #ed3700;
          stroke-width: 2px;
        }

        svg.d3-component path.line-0 {
          fill: none;
          stroke: #ed3700;
        }

        svg.d3-component path.line-1 {
          fill: none;
          stroke: #2b2929;
          stroke-dasharray: 2;
        }

        svg.d3-component path.line-2 {
          fill: none;
          stroke: #9c9c9c;
          stroke-dasharray: 6;
        }

        /* axis contour */
        svg.d3-component .axis path {
          stroke: #706f6f;
          stroke-width: 0.7;
          shape-rendering: crispEdges;
        }

        /* axis text */
        svg.d3-component .axis text {
          fill: #2b2929;
          font-family: Georgia;
          font-size: 120%;
        }
      `}</style>
    </>
  );
};
export default MultiLineChart;
