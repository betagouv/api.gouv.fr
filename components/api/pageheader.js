import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import isElementVisible from '../../utils';

import { throttle } from 'lodash';
import colors from '../../styles/colors';

const Title = ({ title, logo }) => (
  <>
    <div className="title">
      <img src={`/images/api-logo/${logo}`} alt={title} className="ui image" />
      <h1>{title}</h1>
    </div>
    <style jsx>{`
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
      }

      .title img {
        border-radius: 100%;
        width: 48px;
        height: 48px;
        background-color: #fff;
      }

      .title h1 {
        font-family: Evolventa;
        margin: 0 0.5em;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 43px;
        text-align: center;
      }
    `}</style>
  </>
);

const Tagline = ({ tagline }) => (
  <>
    <div className="tagline">{tagline}</div>
    <style jsx>{`
      .tagline {
        font-family: Evolventa;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
      }
    `}</style>
  </>
);

const PageHeader = ({ title, logo, tagline }) => {
  const pageHeaderRef = useRef(null);
  const [isInlined, setIsInlined] = useState(false);

  const handleScroll = throttle(() => {
    if (!pageHeaderRef) {
      return;
    }

    if (
      (window.scrollY >= 200 && !isInlined) ||
      (window.scrollY <= 200 && isInlined)
    ) {
      animateHeader();
      setIsInlined(!isInlined);
    }
  }, 100);

  const animateHeader = () => {
    if (!pageHeaderRef || !pageHeaderRef.current) {
      return;
    }

    pageHeaderRef.current.animate(
      [
        // keyframes
        { flexDirection: 'column', position: 'inherit', top: '10px' },
        { flexDirection: 'column', position: 'inherit', top: '-100px' },
        { flexDirection: 'row', position: 'fixed', top: '-100px' },
        { flexDirection: 'row', position: 'fixed', top: '100px' },
      ],
      {
        // timing options
        duration: 1000,
        fill: 'forwards',
      }
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="mission-statement" ref={pageHeaderRef}>
        <Link href="/">
          <a className="back-button">← Retour</a>
        </Link>
        <div className="ui container content">
          <Title title />
          <Tagline tagline />
        </div>
      </section>

      <style jsx>{`
        #mission-statement.sticky {
          background: ${colors.backgroundBlueGradient};
          color: white;
        }

        #mission-statement {
          background: ${colors.backgroundBlueGradient};
          color: white;
        }

        .back-button {
          position: absolute;
          top: 20px;
          color: #fff;
          left: 20px;
        }
        .back-button:hover {
          text-decoration: underline;
        }

        .content {
          padding: 50px 0;
        }
      `}</style>
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    url: PropTypes.string,
    path: PropTypes.array,
    label: PropTypes.string,
    lastXdays: PropTypes.number,
  }),
};

export default PageHeaderWrapper;
