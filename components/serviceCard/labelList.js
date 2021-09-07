import Link from 'next/link';
import { isEmpty } from 'lodash';

const LabelList = ({ title, labels, isLink }) => {
  if (isEmpty(labels) || labels.length === 0) return null;

  return (
    <div className="labels">
      <small>{title}&nbsp;:&nbsp;</small>
      <div>
        {labels.map(label =>
          isLink ? (
            <Link key={label.href} href={'/les-api/[slug]'} as={label.href}>
              <a className="label">{label.title}</a>
            </Link>
          ) : (
            <div key={`${title}-${label}`} className="label">
              {label}
            </div>
          )
        )}
      </div>

      <style jsx>{`
        .labels {
          display: flex;
          justify-content: flex-start;
          flex-flow: wrap;
          flex-direction: column;
        }
        small {
          font-size: 0.8rem;
        }

        a.label {
          line-height: 1.1rem;
          display: inline-block;
          vertical-align: baseline;
          font-size: 0.8rem;
          margin: 1px;
          background-color: #eee;
          font-weight: 700;
          color: #666;
          border-radius: 4px;
          padding: 6px 8px;
          margin: 3px 3px 0 0;
        }
      `}</style>
    </div>
  );
};

export default LabelList;
