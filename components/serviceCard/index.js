import Link from 'next/link';

import LabelList from './labelList';

const ServiceCard = ({
  path,
  title,
  description,
  screenshot,
  apiList = [],
}) => (
  <div className="service-card">
    <Link href="/service/[slug]" as={path}>
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
        labels={apiList.map(({ title, path }) => {
          return { title, href: path };
        })}
        isLink
      />
    </div>
  </div>
);

export default ServiceCard;
