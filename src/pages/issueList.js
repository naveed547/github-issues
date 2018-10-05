import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import '../components/list.scss';
import {ISFMapper,TFMapper,LTMapper} from '../helper/stateActionMapper';
import * as actions from "../actions/repoAction";

export class IssueList extends Component {
	componentDidMount() {
		this.props.loadIssues(this.props.match.params.repo,this.props.match.params.user);
	}
	render() {
		if (this.props.count !== undefined) {
		    return (
				<React.Fragment>
					<h2 className="text-center my-5">Issues List <span className="my-5 text-center">{this.props.count ? `(${this.props.count})` : ''} </span></h2>
					User Name: <span className="user-name">{this.props.repoDetails.userName}</span> <br/>
	      			Repo Name: <span className="repo-name">{this.props.repoDetails.currentRepo}</span> <br/>
	      			{this.props.count ? (
				        <div className="card">
							<div className="card-header row mx-0">
								<div className="col-sm-4">
									<ISFMapper />
								</div>
								<div className="col-sm-8">
									<TFMapper />
								</div>
							</div>
							<LTMapper />	
						</div>
				      ) : (
				        <div className="my-5 text-center">No data found for this user</div>
				      )}
				</React.Fragment>
		    );
		}
		else {
			return (
				<div className="my-5 text-center">Loading...</div>
			)
		}
	}

  
}


const mapStateToProps = state => {
    return {
        repoDetails: state.reposReducer,
        count: state.reposReducer.repoData.total_count
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

const IssueListContainer = connect(mapStateToProps, mapDispatchToProps)(IssueList);


export default IssueListContainer;