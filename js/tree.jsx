import React from 'react';
import ReactDOM from 'react-dom';
import {infoTableParents} from './main.jsx';
import {infoTableChildren} from './main.jsx';



class Tree extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  displayParent = (parentInfo) => {
    this.setState({parentInfo: parentInfo});
    if(this.state.parentInfo == parentInfo){
      this.setState({parentInfo: ''});
    }
  }

  displayChild = (childInfo) => {
    this.setState({childInfo: childInfo});
    if(this.state.childInfo == childInfo){
      this.setState({childInfo: ''});
    }
  }

  render(){
    return (
      <section id="treeSection">
      <div id="rowParents">

        <div id="parentsPortraits">
          {infoTableParents.map((e, index) =>< ParentPortrait onDisplay = {
            this.displayParent
          }
          person = {
            e.name
          }
          info = {
            e.bio
          }
          key = {
            index
          } />)}
        </div>

        <Bio info={this.state.parentInfo}/>

      </div>

      <div id="rowChildren">
        <div id="childrenPortraits">

        {infoTableChildren.map((e, index) =>< ChildPortrait onDisplay = {
          this.displayChild
        }
        person = {
          e.name
        }
        info = {
          e.bio
        }
        key = {
          index
        } />)}

      </div>

        <Bio info={this.state.childInfo}/>

      </div>
    </section>
    )
  }
}

class ParentPortrait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleParentClick = (event) => {
    if (typeof this.props.onDisplay === 'function') {
      this.props.onDisplay(this.props.info);

    }
  }

  render() {
    return (
      <div className="portrait" onClick={this.handleParentClick}>
        <div className={this.props.person}></div>
        <Bio/>
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
        <Bio/>
      </div>
    )
  }

}

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.info}
      </div>

    )
  }
}

module.exports = Tree;
