import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import '../components/list.scss';
import {ISFMapper,TFMapper,LTMapper} from '../helper/stateActionMapper';
import * as actions from "../actions/repoAction";

class IssueList extends Component {
	componentDidMount() {
		this.props.loadIssues(this.props.match.params.repo,this.props.repoDetails.userName);
	}
	render() {
		if (this.props.count) {
		    return (
				<React.Fragment>
					<h2 className="text-center my-5">Issues List <span className="my-5 text-center">{this.props.count ? `(${this.props.count})` : ''} </span></h2>
					User Name: {this.props.repoDetails.userName} <br/>
	      			Repo Name: {this.props.repoDetails.currentRepo} <br/>
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
				</React.Fragment>
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
        repoDetails: state.reposReducer,
        count: state.reposReducer.repoData.total_count || 0
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

const IssueListContainer = connect(mapStateToProps, mapDispatchToProps)(IssueList);


export default IssueListContainer;