import React from 'react';
import PropTypes from 'prop-types';
import hoist from 'hoist-non-react-statics';

import ErrorPage from '../../pages/_error';

export default Page => {
  const Extended = hoist(
    class extends React.Component {
      static propTypes = {
        err: PropTypes.object,
      };

      static defaultProps = {
        err: null,
      };

      state = {
        err: null,
      };

      componentDidCatch(err) {
        this.setState({
          err,
        });
      }

      render() {
        const { err: stateError } = this.state;
        const { err: propsError } = this.props;

        const err = stateError || propsError;
        if (err) {
          return <ErrorPage {...this.props} code={err.code} />;
        }

        return <Page {...this.props} />;
      }
    },
    Page
  );

  Extended.getInitialProps = async context => {
    if (Page.getInitialProps) {
      try {
        return await Page.getInitialProps(context);
      } catch (err) {
        if (context.res) {
          err.code = context.res.statusCode;
        }
        return {
          err,
        };
      }
    }

    return {};
  };

  return Extended;
};
