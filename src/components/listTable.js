import React, { Component } from 'react';
import {getTimeStamp} from '../helper/helper';
import moment from 'moment'

class IssueTable extends Component {
 constructor(props) {
    super(props); 
    this.listCopy = {
    	perPage: 10,
    	totalItems: 0,
    	numPage: 0,
    	items: [],
    	pageNumber:1
    } 
  }

  manipulateList = () => {
  	let issueCopy = this.props.issues.items.slice(); 

    if(this.props.filter.toggleBy) {
    	issueCopy = issueCopy.filter(issue => {
    		console.log(issue.state+this.props.filter.toggleBy)
    		return issue.state == this.props.filter.toggleBy
    	})
    }

    if(this.props.filter.searchBy) {
    	issueCopy = issueCopy.filter(issue => {
    		console.log(issue.title.indexOf(this.props.filter.searchBy));
    		return issue.title.indexOf(this.props.filter.searchBy) != -1
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
        		issueCopy = issueCopy;
    	}
    }
    this.listCopy.totalItems = issueCopy.length;
    this.listCopy.numPage = new Array(Math.ceil(issueCopy.length/this.listCopy.perPage));
    this.listCopy.items = issueCopy;
    const startIndex = (this.listCopy.perPage*(this.props.filter.goToPage - 1));
    console.log(issueCopy);
    return issueCopy.slice(startIndex+1, (startIndex+this.listCopy.perPage));
  }

  goToPage(i) {
  	const startIndex = (this.listCopy.perPage*(parseInt(i) - 1));
  	this.renderIssuesList(this.listCopy.items.slice(startIndex+1, (startIndex+this.listCopy.perPage)))
  }

  handleClick(e) {

  }

  renderIssuesList = (issueCopy) => {    
    
    const elementMap = issueCopy.map((issue) => {
      // console.log(repo.id);
      return (
        <li
          className="list-group-item"
          key={issue.number}>
          	<div>
				<i className={issue.state=='open' ? 'fa fa-exclamation-circle text-danger':'fa fa-check text-success'}></i>
				<a className="issue-title" href={`/issue/${issue.number}`}>&nbsp;&nbsp;{issue.title}</a>
			</div>              
			<span className="issue-desc">
				#{issue.number} {issue.state=='open' ? 'opened':'closed'} {moment(issue.state=='open' ? issue.updated_at : issue.closed_at).fromNow()} by {issue.user.login}
			</span>
        </li>
      );
    });
    let paginationComp = [];
    if(this.listCopy.numPage.length > 1) {
    	for (let i = 0; i < this.listCopy.numPage.length; i++) {
	      	paginationComp.push(
	    		<li className={this.props.filter.goToPage == (i+1) ? 'active page-item': 'page-item'} key={i+1}>
	    			<a className="page-link" href="javascript:void(0)" onClick={(e) => {this.props.goToPage((i+1))}}>{i+1}</a>
	    		</li>
	    	);
	    }
    }
   
	return (
		<div>
			<ul className="list-group list-group-flush">
				{elementMap}
			</ul>
			<ul className="pagination justify-content-center mt-5">
				{paginationComp}
			</ul>
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