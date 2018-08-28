import React, { Component } from 'react';
import InputSearchFilter from '../components/inputSearchFilter.js';
import ListTable from '../components/listTable.js';
import TopFilter from '../components/topFilter.js';
import { withRouter } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/userAction";
import '../components/list.scss';

class IssueList extends Component {
  constructor(props) {
    super(props);    
  }
  render() {
    if (this.props.issues && this.props.issues.items && this.props.issues.items.length) {
	    return (
			<div>
				<h2 className="text-center my-5">Issues List <span className="my-5 text-center">{this.props.issues && this.props.issues.total_count ? `(${this.props.issues.total_count})` : ''} </span></h2>
				
				<div className="card">
					<div className="card-header row my-0">
						<div className="col-sm-4">
							<InputSearchFilter filter={this.props.filter} {...this.props} />
						</div>
						<div className="col-sm-8">
							<TopFilter filter={this.props.filter} {...this.props} />
						</div>
					</div>
					<ListTable  issues={this.props.issues} {...this.props} />
				</div>
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
    console.log(state);
    return {
        issues: state.reposReducer,
        filter: state.userReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


const IssueListContainer = connect(mapStateToProps, mapDispatchToProps)(IssueList);


export default IssueListContainer;