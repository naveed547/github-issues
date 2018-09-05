import axios from 'axios';
import * as types from './actionTypes';

function loadIsuuesSuccess(issues,repoName) {
	let mapData = Object.assign({},issues[0].data);
	mapData['open_count'] = issues[1].data.total_count;
	mapData['closed_count'] = mapData.total_count - mapData.open_count;
	return {
		type: types.LOAD_ISSUES_SUCCESS,
		issues: mapData,
		repoName
	};
}

function loadIsuueSuccess(issues) {
	return {
		type: types.LOAD_ISSUE_SUCCESS,
		issues,
	};
}

function loadRepoSuccess(repoDetails) {
	return {
		type: types.LOAD_REPO_SUCCESS,
		repoDetails,
	};
}

export function setUserName(userName) {
	return {
		type: types.CURRENT_USER,
		userName
	};
}

export function loadIssues(repoName,userName) {
	return async function(dispatch) {
		let arr =[];
		arr.push(axios.get(`https://api.github.com/search/issues?q=repo:${userName}/${repoName}+type:issue`));
		arr.push(axios.get(`https://api.github.com/search/issues?q=repo:${userName}/${repoName}+type:issue+state:open`));
		let result = await axios.all(arr);
		dispatch(loadIsuuesSuccess(result,repoName));
		/*axios.get(`https://api.github.com/search/issues?q=repo:${types.GIT_USER}/${types.GIT_REPO}+type:issue`)
		.then((response) => {
			axios.get(`https://api.github.com/users/${types.GIT_USER}/repos`)
			.then((response) => {
		  		console.log('response');
			})
		})*/


		/*return axios
			.get(`https://api.github.com/search/issues?q=repo:${types.GIT_USER}/${types.GIT_REPO}+type:issue`)
			.then(issues => {
				dispatch(loadIsuuesSuccess(issues.data));
			})
			.catch(err => {
				throw err;
			});*/
	};
}


export function loadIssue(issueNumber,userName,repoName) {
	return function(dispatch) {
		return axios
			.get(`https://api.github.com/repos/${userName}/${repoName}/issues/${issueNumber}`)
			.then(issues => {
				dispatch(loadIsuueSuccess(issues.data));
			})
			.catch(err => {
				throw err;
			});
	};
}

export function loadRepos(userName) {
	return function(dispatch) {
		return axios
			.get(`https://api.github.com/users/${userName}/repos`)
			.then(repos => {
				dispatch(loadRepoSuccess({
					repos:repos.data,
					userName:repos.data[0].owner.login
				}));
			})
			.catch(err => {
				throw err;
			});
	};
}

/*export function loadRepo(user,repo) {
	return function(dispatch) {
		return axios
			.get(`https://api.github.com/search/issues?q=repo:${types.GIT_USER}/${types.GIT_REPO}+type:issue`)
			.then(issues => {
				dispatch(loadIsuuesSuccess(issues.data));
			})
			.catch(err => {
				throw err;
			});
	};
}*/


//https://api.github.com/search/issues?q=repo:${types.GIT_USER}/${types.GIT_REPO}+type:issue
//https://api.github.com/repos/${types.GIT_USER}/${types.GIT_REPO}/issues/${id}
//https://api.github.com/users/${types.GIT_USER}/repos