import React from 'react';
import PropTypes from 'prop-types';

import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import colors from '../styles/colors';

class Page extends React.Component {
  render() {
    const { title, description, children } = this.props;

    return (
      <div id="page-layout">
        <Meta title={title} description={description} />
        <Header />
        <main>{children}</main>
        <Footer />

        <style global jsx>{`
          #page-layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            width: 100%;
            background-color: #fff;
          }

          #page-layout > main {
            flex: 1;
            margin-top: 75px;
          }

          a {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

Page.defaultProps = {
  children: null,
  title: null,
  description: null,
};

export default Page;
