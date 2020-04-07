import React from 'react';
import PropTypes from 'prop-types';
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
            <Link key={label.href} href={label.href}>
              <a className="ui label label">{label.title}</a>
            </Link>
          ) : (
            <div key={`${title}-${label}`} className="ui tiny label">
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

        .ui.tiny.label,
        a.label {
          margin: 1px;
        }
      `}</style>
    </div>
  );
};

LabelList.defaultProps = {
  isLink: false,
};

LabelList.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  isLink: PropTypes.bool,
};

export default LabelList;
