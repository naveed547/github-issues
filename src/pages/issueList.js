import React, { Component } from 'react';
import {connect} from "react-redux";
import '../components/list.scss';
import {ISFMapper,TFMapper,LTMapper} from '../helper/stateActionMapper';

class IssueList extends Component {
	render() {
		if (this.props.count) {
		    return (
				<React.Fragment>
					<h2 className="text-center my-5">Issues List <span className="my-5 text-center">{this.props.count ? `(${this.props.count})` : ''} </span></h2>
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
        count: state.reposReducer.total_count
    }
};

const IssueListContainer = connect(mapStateToProps, null)(IssueList);


export default IssueListContainer;