import * as types from '../../actions/actionTypes';

import initialState from '../../reducers/initialState';
import userReducer from '../../reducers/userReducer';

describe('>>>R E D U C E R --- Test userReducer',()=>{
    it('+++ reducer for SEARCH_ISSUES', () => {
        let state = initialState.filter;
        state = userReducer(state,{
            type: types.SEARCH_ISSUES,
            filter: 'bootstrap'
        })
        expect(state).toEqual({
            ...initialState.filter,
            searchBy: 'bootstrap'
        })
    });
    it('+++ reducer for FILTER_ISSUES', () => {
        let state = initialState.filter;
        state = userReducer(state,{
            type: types.FILTER_ISSUES,
	        filter: ''
        })
        expect(state).toEqual({
            type: types.FILTER_ISSUES,
	        filter: ''
        })
    });
    it('+++ reducer for SORT_ISSUES', () => {
        let state = initialState.filter;
        state = userReducer(state,{
            type: types.SORT_ISSUES,
            filter: "MOST_COMMENTED"
        })
        expect(state).toEqual({
            ...initialState.filter,
            sortBy: "MOST_COMMENTED"
        })
    });
    it('+++ reducer for TOGGLE_ISSUES', () => {
        let state = initialState.filter;
        state = userReducer(state,{
            type: types.TOGGLE_ISSUES,
            filter: 'open'
        })
        expect(state).toEqual({
            ...initialState.filter,
            toggleBy: "open"
        })
    });
    it('+++ reducer for GOTO_PAGE', () => {
        let state = initialState.filter;
        state = userReducer(state,{
            type: types.GOTO_PAGE,
            id: 5
        })
        expect(state).toEqual({
            ...initialState.filter,
            goToPage: 5
        })
    });

    it('+++ reducer for Default', () => {
        let state = initialState.filter;
        state = userReducer(state,{type:''})
        expect(state).toEqual({
            ...initialState.filter
        })
    });

});