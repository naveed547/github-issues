import React, { Component } from 'react';
import Pagination from './pagination';
import Issue from './issue';
import PropTypes from 'prop-types';

class IssueTable extends Component {
  render() {
  	if (this.props.issues) {
	    return ( 
	    	<React.Fragment>
	    		<ul className="list-group list-group-flush">
					{this.props.issues.map((issue) => (<Issue key={issue.number} {...issue}></Issue>))}
				</ul>
				<Pagination activePage={this.props.goToFilter} 
				 	 	numPage={this.props.numPage}
				 	 	onClick={(index) => this.props.go(index)}>
				</Pagination>
			</React.Fragment>
	    );
	}else {
		return (
			<div>Loading...</div>
		)
	}
  }
}


IssueTable.propTypes = {
  go: PropTypes.func.isRequired,
  issues: PropTypes.array.isRequired,
  numPage: PropTypes.array.isRequired,
  goToFilter: PropTypes.number.isRequired
}



export default IssueTable;