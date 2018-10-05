import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/repoAction";
import '../components/description.scss';
import { Link } from 'react-router-dom';
export class UserRepoSearch extends Component {
  constructor(props) {
    super(props);
		this.userName = React.createRef();
  }
  selectRepo = event => {
  	event.preventDefault();
  	const user = this.userName.current.value;
    this.props.loadRepos(user);
  }
  componentDidMount() {
		this.props.loadRepos(this.props.repoDetails.userName);
  }
  renderForm = () => {
      return (
		<form name="repoSearch" className="form-inline justify-content-center" onSubmit={(e) => {e.preventDefault();this.props.loadRepos(this.userName.current.value)}}>
		  <div className="form-group mb-2 mr-2">
		    <label htmlFor="userName" className="sr-only">Password</label>
		    <input type="text" className="form-control" id="userName" onChange={() => {}} name="user" ref={this.userName} value={this.props.repoDetails.userName} placeholder="Search Git user name" />
		  </div>
		  <button type="submit" className="btn btn-primary mb-2">Search</button>
		</form>
      );
  }
  renderRepoList() {
  	if (!this.props.repoDetails.repoData.length) {
  		return (<div>Loading...</div>);
  	} else {
  		return this.props.repoDetails.repoData.map((repo,index) => {
  			return (
  				<li className="list-group-item" key={repo.id}>
						<Link to={`/issueList/${this.props.repoDetails.userName}/${repo.name}`}>
							{repo.name}
						</Link>
  				</li>
  			)
  		})
  	}
  }
  render() {
  	return (
			<div>
				<h2 className="my-5 text-center">Search User and Repo</h2>
				User Name: <span className="user-name">{this.props.repoDetails.userName}</span> <br/>
				<div className="card">
					<div className="card-header">
						{this.renderForm()}
					</div>
					<ul className="list-group list-group-flush repo-list">{this.renderRepoList()}</ul>
				</div>
			</div>
	    );
  }
}


const mapStateToProps = state => {
    return {
    	repoDetails: state.reposReducer
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


const UserRepoSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UserRepoSearch);


export default UserRepoSearchContainer;

