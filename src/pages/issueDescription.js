import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/repoAction";
import moment from 'moment';
import '../components/description.scss';
class IssueDescription extends Component {
  renderIssue = () => {
      let issue = this.props.repoDetails.repoData; 
      return (
		<div className="card">
			<div className="card-header row mx-0">
				<div className="col-sm-10 pl-0">#{issue.id} <b>{issue.title}</b></div>
				<div className={issue.state === 'open' ? 'col-sm-2 text-right text-danger pr-0':'col-sm-2 text-right text-success pr-0'}>
					<i className={issue.state === 'open' ? 'fa fa-exclamation-circle text-danger':'fa fa-check text-success'}></i>
					<span className="pl-1 text-capitalize">{issue.state}</span>
				</div>	
			</div>
			<div className="card-body">
				<p className="card-text">Issue Number: <b>{issue.number}</b></p>
				<p className="card-text">{issue.body}</p>
			</div>
			<div className="card-body row">
				<p className="card-text col-sm-6">
					<span>Created By: </span>
	        		<span><b>{issue.user.login}</b></span>
				</p>
				<p className="card-text col-sm-6 text-right">
					<small className="text-muted">Last updated <b>{moment(issue.state === 'open' ? issue.updated_at : issue.closed_at).fromNow()}</b>
					</small>
				</p>
			</div>
		</div>
      );
  }
  componentDidMount() {
		this.props.loadIssue(this.props.match.params.issueId,this.props.repoDetails.userName,this.props.repoDetails.currentRepo);
  }
  render() {
  	if (this.props.repoDetails 
  		&& this.props.repoDetails.repoData 
  		&& this.props.repoDetails.repoData.number 
  		&& this.props.location.pathname.split("/")[1] ==='issue') {
	    return (
	    	<div>
	      		<h2 className="my-5 text-center">Issue Description</h2>
	      		User Name: {this.props.repoDetails.userName} <br/>
	      		Repo Name: {this.props.repoDetails.currentRepo} <br/>
	      		{this.renderIssue()}
	      	</div>
	    );
	}else {
		return (
			<div className="my-5 text-center">Loading...</div>
		)
	}
  }
}


const mapStateToProps = state => {
    return {
        repoDetails: state.reposReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


const IssueDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(IssueDescription);


export default IssueDescriptionContainer;

