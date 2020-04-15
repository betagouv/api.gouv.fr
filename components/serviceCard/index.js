import React from 'react';
import Link from 'next/link';

import { getAPI } from '../../model/api';
import LabelList from './labelList';
import { render } from 'react-dom';

class ServiceCard extends React.Component {
  static async getInitialProps(ctx) {
    console.log(this.props);
    console.log(ctx);

    return { apiList: [] };
  }

  render() {
    const { url, title, description, screenshot, apiList = [] } = this.props;
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
  }
}

export default ServiceCard;
