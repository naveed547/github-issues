import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function reposReducer(state = initialState.issues, action) {
	switch (action.type) {
		case types.LOAD_ISSUES_SUCCESS: {
			return action.issues
		}
		case types.LOAD_ISSUE_SUCCESS: {
			return action.issues
		}
		default:
			return state;
	}
}