import React, { Component } from 'react';

class TopFilter extends Component {
  constructor(props) {
    super(props);    
  }
  render() {
    console.log(this.props);
    if (this.props.issues && this.props.issues.items && this.props.issues.items.length) {
      return (
        <div className="topFilter row">
        	<div className="col text-center">
            <button type="button" className={this.props.filter.toggleBy=='open' ? 'btn btn-secondary':'btn btn-outline-secondary'} onClick={(e) => {this.props.toggleIssues('open')}}>
              <i className="fa fa-exclamation-circle text-danger"></i> {this.props.issues.open_count} Open
            </button>
            <button type="button" className={this.props.filter.toggleBy=='closed' ? 'btn btn-secondary ml-1':'btn btn-outline-secondary ml-1'} onClick={(e) => {this.props.toggleIssues('closed')}}>
              <i className="fa fa-check text-success"></i> {this.props.issues.closed_count} Closed
            </button>
          </div>
          <div className="col text-right">
            <select className="form-control" onChange={(e) => {this.props.sortIssues(e.target.value)}}>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Commented</option>
              <option>Least Commented</option>
            </select>
          </div>
        </div>
      );
    } else {
      return ('');
    }
  }
}

export default TopFilter;