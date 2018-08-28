import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userReducer(state = initialState.filter, action) {
	switch (action.type) {
		case types.SEARCH_ISSUES: {
			return Object.assign({}, state, {searchBy: action.filter});
		}
		case types.FILTER_ISSUES: {
			return action;
		}
		case types.SORT_ISSUES: {
			return Object.assign({}, state, {sortBy: action.filter});
		}
		case types.TOGGLE_ISSUES: {
			return Object.assign({}, state, {toggleBy: action.filter});
		}
		case types.GOTO_PAGE: {
			return Object.assign({}, state, {goToPage: action.id});
		}
		default:
			return state;
	}
}