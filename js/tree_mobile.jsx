import React from 'react';
import ReactDOM from 'react-dom';
import {infoTableParents} from './main.jsx';
import {infoTableChildren} from './main.jsx';

class TreeMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  displayChild = (childInfo) => {
    this.setState({childInfo: childInfo});
    if (this.state.childInfo == childInfo) {
      this.setState({childInfo: ''});
    }
  }

  render() {

    return (
      <section id="treeMobileSection">
        <div id="parentsMobile">
          <div className="parentsPortraitsMobile">

            {infoTableParents.map((e, index) => {
              return <Row name={e.name} bio={e.bio} key={index}/>
            })}
          </div>
        </div>

        <div id="childrenMobile">
          <div className="childrenPortraitsMobile">

            {infoTableChildren.map((e, index) => {
              return <Row name={e.name} bio={e.bio} key={index}/>
            })}
          </div>
        </div>

      </section>
    )
  }
}

class ParentPortrait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: ''
    }
  }

  handleParentClick = (event) => {
    if (typeof this.props.onDisplay === 'function') {
      this.props.onDisplay(this.props.info);
      console.log("WORKed");
      console.log(infoTableChildren);
      console.log("TEXT");

    }
  }

  render() {
    return (
      <div className="portrait" onClick={this.handleParentClick}>
        <div className={this.props.person}></div>
      </div>
    )
  }

}

class ChildPortrait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleChildClick = (event) => {
    if (typeof this.props.onDisplay === 'function') {
      this.props.onDisplay(this.props.info);

    }
  }

  render() {
    return (
      <div className="portrait" onClick={this.handleChildClick}>
        <div className={this.props.person}></div>
      </div>
    )
  }

}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ''
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    if (this.state.info == '') {
      this.setState({info: this.props.bio});
    } else {
      this.setState({info: ''});
    }
  }

  render() {
    return (
      <div>
        <div className="portrait" onClick={this.handleClick}>
          <div className={this.props.name}></div>
        </div>
        <div>{this.state.info}</div>
      </div>
    )
  }
}

module.exports = TreeMobile;
