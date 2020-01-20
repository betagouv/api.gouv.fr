import React from "react";
import PropTypes from "prop-types";

import Meta from "../components/meta";
import Header from "../components/header";
import Footer from "../components/footer";

class Page extends React.Component {
  render() {
    const { title, description, children } = this.props;

    return (
      <div>
        <Meta title={title} description={description} />
        <Header />
        <main>{children}</main>
        <Footer />

        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            width: 100%;
            background-color: #fff;
          }

          main {
            flex: 1;
          }
        `}</style>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
};

Page.defaultProps = {
  children: null,
  title: null,
  description: null
};

export default Page;
