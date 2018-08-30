import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopFilter extends Component {
  render() {
    if (this.props.issuesCount) {
      return (
        <div className="topFilter row">
        	<div className="col text-center">
            <button type="button" className={this.props.toggleFilter === 'open' ? 'btn btn-secondary':'btn btn-outline-secondary'} onClick={(e) => {this.props.toggle(this.props.toggleFilter === 'open' ? '' : 'open')}}>
              <i className="fa fa-exclamation-circle text-danger"></i> {this.props.issuesCount.open_count} Open
            </button>
            <button type="button" className={this.props.toggleFilter === 'closed' ? 'btn btn-secondary ml-1':'btn btn-outline-secondary ml-1'} onClick={(e) => {this.props.toggle(this.props.toggleFilter === 'closed' ? '' : 'closed')}}>
              <i className="fa fa-check text-success"></i> {this.props.issuesCount.closed_count} Closed
            </button>
          </div>
          <div className="col text-right">
            <select value={this.props.sortFilter} className="form-control" onChange={(e) => {this.props.sort(e.target.value)}}>
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

TopFilter.propTypes = {
  sort: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  issuesCount: PropTypes.shape({
    open_count: PropTypes.number.isRequired,
    closed_count: PropTypes.number.isRequired
  }),
  sortFilter: PropTypes.string.isRequired,
  toggleFilter: PropTypes.string.isRequired
}

export default TopFilter;