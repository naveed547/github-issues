import axios from 'axios';
import * as types from './actionTypes';

export function loadIsuuesSuccess(issues) {
	let mapData = Object.assign({},issues[0].data);
	mapData['open_count'] = issues[1].data.total_count;
	mapData['closed_count'] = mapData.total_count - mapData.open_count;
	return {
		type: types.LOAD_ISSUES_SUCCESS,
		issues: mapData,
	};
}

export function loadIsuueSuccess(issues) {
	return {
		type: types.LOAD_ISSUE_SUCCESS,
		issues,
	};
}

export function loadIssues() {
	return async function(dispatch) {
		let arr =[];
		arr.push(axios.get(`https://api.github.com/search/issues?q=repo:${types.GIT_USER}/${types.GIT_REPO}+type:issue`));
		arr.push(axios.get(`https://api.github.com/search/issues?q=repo:${types.GIT_USER}/${types.GIT_REPO}+type:issue+state:open`));
		let result = await axios.all(arr);
		dispatch(loadIsuuesSuccess(result));
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


export function loadIssue(issueNumber) {
	return function(dispatch) {
		return axios
			.get(`https://api.github.com/repos/${types.GIT_USER}/${types.GIT_REPO}/issues/${issueNumber}`)
			.then(issues => {
				dispatch(loadIsuueSuccess(issues.data));
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