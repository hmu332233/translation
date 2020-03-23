  
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';

function MainApp(props) {
  return (
    <Router>
      <Suspense fallback={''}>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Suspense>
    </Router>
  );
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default MainApp;