import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { getAPI } from '../../model/api';
import LabelList from './labelList';

const ServiceCard = ({ slug, title, description, api, screenshot }) => {
  const [apiList, setApiList] = useState([]);
  const url = `/service/${slug}`;

  useEffect(() => {
    const getAPIs = async () => {
      const apiList = await Promise.all(api.map(id => getAPI(id)));
      setApiList(apiList);
    };

    if (api) {
      getAPIs();
    }
  }, [api]);

  return (
    <div className="service-card">
      <Link href={url}>
        <a className="dont-apply-link-style">
          <div className="image">
            <img
              src={`/images/service-screenshot/${screenshot}`}
              alt={`illustration du service ${title}`}
            />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <div className="meta">{description}</div>
          </div>
        </a>
      </Link>
      <div className="footer">
        <LabelList
          title={`API utilisée${apiList.length > 1 ? 's' : ''}`}
          labels={apiList.map(({ title, slug }) => {
            return { title, href: `/api/${slug}` };
          })}
          isLink
        />
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  api: PropTypes.array.isRequired,
};

export default ServiceCard;
