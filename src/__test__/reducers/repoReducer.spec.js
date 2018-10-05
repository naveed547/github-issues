import * as types from '../../actions/actionTypes';

import initialState from '../../reducers/initialState';
import reposReducer from '../../reducers/repoReducer';
import repoMock from "../data/mock";

describe('>>>R E D U C E R --- Test repoReducer',()=>{
    it('+++ reducer for LOAD_ISSUES_SUCCESS', () => {
        let state = initialState.repoDetails;
        state = reposReducer(state,{
            type: types.LOAD_ISSUES_SUCCESS,
            issues: repoMock.allIssues,
            repoName: repoMock.repoName
        })
        expect(state).toEqual({
            ...initialState.repoDetails,
            repoData: repoMock.allIssues,
            currentRepo: repoMock.repoName
        })
    });
    it('+++ reducer for LOAD_ISSUE_SUCCESS', () => {
        let state = initialState.repoDetails;
        state = reposReducer(state,{
            type: types.LOAD_ISSUE_SUCCESS,
	        issues: repoMock.singleIssue
        })
        expect(state).toEqual({
            ...initialState.repoDetails,
            repoData: repoMock.singleIssue
        })
    });
    it('+++ reducer for LOAD_REPO_SUCCESS', () => {
        let state = initialState.repoDetails;
        state = reposReducer(state,{
            type: types.LOAD_REPO_SUCCESS,
            repoDetails: {
                userName: repoMock.userName,
                repos: repoMock.userRepos
            }
        })
        expect(state).toEqual({
            ...initialState.repoDetails,
            userName: repoMock.userName,
	        repoData: repoMock.userRepos,
	        currentRepo: ''
        })
    });
    it('+++ reducer for CURRENT_USER', () => {
        let state = initialState.repoDetails;
        state = reposReducer(state,{
            type: types.CURRENT_USER,
            userName: repoMock.userName
        })
        expect(state).toEqual({
            ...initialState.repoDetails,
            userName: repoMock.userName
        })
    });
    it('+++ reducer for CURRENT_REPO', () => {
        let state = initialState.repoDetails;
        state = reposReducer(state,{
            type: types.CURRENT_REPO,
            currentRepo: repoMock.repoName
        })
        expect(state).toEqual({
            ...initialState.repoDetails,
            currentRepo: repoMock.repoName
        })
    });

    it('+++ reducer for Default', () => {
        let state = initialState.repoDetails;
        state = reposReducer(state,{type:''})
        expect(state).toEqual({
            ...initialState.repoDetails
        })
    });

});