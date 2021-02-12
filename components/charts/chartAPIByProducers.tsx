import React from 'react';
import { IApi } from '../../model';
import { monthDifference } from '../../utils';
import StackedBarChartByMonth from './stackedBarChartByMonth';
import { getDate, getLabel, ORIGIN } from './utils';

const getLabels = (allApis: IApi[]) => {
  const labels: any = {};
  allApis.forEach(api => {
    const type = api.owner_type || 'autre';
    if (!labels[type]) {
      labels[type] = type;
    }
  });
  return labels;
};

const colors = [
  '#FFEDB6',
  '#F8D67C',
  '#F8B195',
  '#F67280',
  '#C06C84',
  '#6C5B7B',
  '#355C7D',
  '#4a3d55',
];

const generateData = (allApis: IApi[], keys: string[]) => {
  const origin = new Date(ORIGIN);
  const monthCount = monthDifference(origin, new Date()) + 1;

  //@ts-ignore
  const data: any[] = [...Array(monthCount).keys()].map(m => {
    const node = {
      month: m + 1,
      label: getLabel(m),
      new: [],
    };
    keys.forEach(key => {
      //@ts-ignore
      node[key] = 0;
    });
    return node;
  });

  allApis.forEach(api => {
    const month = monthDifference(origin, new Date(getDate(api)) || origin);

    for (let m = month; m < monthCount; m++) {
      data[m][api.owner_type] += 1;
    }
    data[month].new.push({ slug: api.slug, title: api.title });
  });

  return data;
};

const StackedBarChartOpenClosed: React.FC<{ allApis: IApi[] }> = ({
  allApis,
}) => {
  const labels = getLabels(allApis);
  const data = generateData(allApis, Object.keys(labels));
  return <StackedBarChartByMonth colors={colors} data={data} labels={labels} />;
};

export default StackedBarChartOpenClosed;
