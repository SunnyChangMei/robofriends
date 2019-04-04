import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //     // searchField: ''
  //   };
  // }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  // fetch request service
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(user => {
  //       this.setState({
  //         robots: user
  //       });
  //     });
  // }

  // onSearchChange = event => {
  //   this.setState({
  //     searchField: event.target.value
  //   });
  // };

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1> Loading </h1>
    ) : (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
