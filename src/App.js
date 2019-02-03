import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.testInfo.test}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  testInfo: state.testInfo
});

export default connect(mapStateToProps, null)(App);
