import React from 'react';
import { IApi } from '../../model';
import { monthDifference } from '../../utils';
import StackedBarChartByMonth from './stackedBarChartByMonth';
import { getDate, getLabel, ORIGIN } from './utils';

interface IChartData {
  month: number;
  datapass: number;
  open: number;
  close: number;
  label: string;
  new: { slug: string; title: string }[];
}

const openClosedLabels = {
  open: ' en accès libre',
  datapass: ' en accès restreint via le compte api.gouv.fr (DataPass)',
  close: ' en accès restreint',
};

const colors = ['#F8D67C', '#A72257', '#2b8cbe'];

const generateData = (allApis: IApi[]) => {
  const origin = new Date(ORIGIN);
  const monthCount = monthDifference(origin, new Date()) + 1;

  //@ts-ignore
  const data: IChartData[] = [...Array(monthCount).keys()].map(m => {
    return {
      month: m + 1,
      open: 0,
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
        data[m].open += 1;
      }
    }
    data[month].new.push({ slug: api.slug, title: api.title });
  });

  return data;
};

const StackedBarChartOpenClosed: React.FC<{ allApis: IApi[] }> = ({
  allApis,
}) => {
  const data = generateData(allApis);
  return (
    <StackedBarChartByMonth
      colors={colors}
      data={data}
      labels={openClosedLabels}
    />
  );
};

export default StackedBarChartOpenClosed;
