import React, { Component } from 'react';
import {getTimeStamp} from '../helper/helper';
import Pagination from './pagination';
import Issue from './issue';

class IssueTable extends Component {
 
  listCopy = {
    	perPage: 10,
    	totalItems: 0,
    	numPage: 0,
    	items: [],
    	pageNumber:1
  } 

  manipulateList = () => {
  	let issueCopy = this.props.issues.items.slice(); 

    if(this.props.filter.toggleBy) {
    	issueCopy = issueCopy.filter(issue => {
    		return issue.state === this.props.filter.toggleBy
    	})
    }

    if(this.props.filter.searchBy) {
    	issueCopy = issueCopy.filter(issue => {
    		return issue.title.toLowerCase().trim().indexOf(this.props.filter.searchBy.trim()) !== -1
    	})
    }

    if(this.props.filter.sortBy) {
    	const sortBy = this.props.filter.sortBy.toLowerCase();
    	switch(sortBy) {
			case 'newest':
				issueCopy = issueCopy.sort(function(a, b){
				  return getTimeStamp(a.updated_at) > getTimeStamp(b.updated_at);
				});
				break;
			 case 'oldest':
			 	issueCopy = issueCopy.sort(function(a, b){
				  return getTimeStamp(a.updated_at) > getTimeStamp(b.updated_at);
				});
				issueCopy = issueCopy.reverse();
				break;
			case 'most commented':
			 	issueCopy = issueCopy.sort(function(a, b){
				  return a.comments > b.comments;
				});
				break;
			case 'least commented':
			 	issueCopy = issueCopy.sort(function(a, b){
				  return a.comments > b.comments;
				});
				issueCopy = issueCopy.reverse();
				break;
			default:
				console.log("new option added");
    	}
    }
    this.listCopy.totalItems = issueCopy.length;
    this.listCopy.numPage = new Array(Math.ceil(issueCopy.length/this.listCopy.perPage));
    this.listCopy.items = issueCopy;
    const startIndex = (this.listCopy.perPage*(this.props.filter.goToPage - 1));
    return issueCopy.slice(startIndex+1, (startIndex+this.listCopy.perPage));
  }

  goToPage(i) {
  	const startIndex = (this.listCopy.perPage*(parseInt(i,10) - 1));
  	this.renderIssuesList(this.listCopy.items.slice(startIndex+1, (startIndex+this.listCopy.perPage)))
  }

  handleClick(e) {

  }

  renderIssuesList = (issueCopy) => {    
	return (
		<div>
			<ul className="list-group list-group-flush">
				{issueCopy.map((issue) => (<Issue key={issue.number} {...issue}></Issue>))}
			</ul>
			{<Pagination goTo={this.props.filter.goToPage} 
				 	 			numPage={this.listCopy.numPage}
				 	 			onClick={(index) => this.props.goToPage(index)}>
				 	</Pagination>}
		</div>
	)
  }
  render() {
  	if (this.props.issues && this.props.issues.items && this.props.issues.items.length) {
	    return ( 
	    	<div>
	    		{this.renderIssuesList(this.manipulateList())}
			</div>
	    );
	}else {
		return (
			<div>Loading...</div>
		)
	}
  }
}

export default IssueTable;