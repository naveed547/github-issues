import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function reposReducer(state = initialState.repoDetails, action) {
	switch (action.type) {
		case types.LOAD_ISSUES_SUCCESS: {
			return {
	            ...state,
	            repoData: action.issues,
	            currentRepo: action.repoName
	        }
		}
		case types.LOAD_ISSUE_SUCCESS: {
			return {
	            ...state,
	            repoData: action.issues
	        }
		}
		case types.LOAD_REPO_SUCCESS: {
			return {
	            ...state,
	            userName: action.repoDetails.userName,
	            repoData: action.repoDetails.repos,
	            currentRepo: ''
	        }
		}
		case types.CURRENT_USER: {
			return {
				...state,
				userName: action.userName
			}
		}
		case types.CURRENT_REPO: {
			return {
				...state,
				currentRepo: action.currentRepo
			}
		}
		default:
			return state;
	}
}