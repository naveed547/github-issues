import * as types from '../../actions/actionTypes';
import * as actions from "../../actions/repoAction";
import initialState from '../../reducers/initialState';
import repoMock from "../data/mock";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("actions", () => {
    afterEach(() => {
      axiosMock.reset();
    });
    describe('loadIssues', () => {
        it('returns data when sendMessage is called', done => {
            var mock = new MockAdapter(axios);
            mock.onGet(`https://api.github.com/search/issues?q=repo:${repoMock.userName}/${repoMock.repoName}+type:issue`).reply(200, repoMock.allIssues);
            mock.onGet(`https://api.github.com/search/issues?q=repo:${repoMock.userName}/${repoMock.repoName}+type:issue+state:open`).reply(200, repoMock.openIssues);
            let mapData = Object.assign({},repoMock.allIssues);
            mapData['open_count'] = repoMock.openIssues.total_count;
            mapData['closed_count'] = mapData.total_count - mapData.open_count;
            const receiveUsersAction = {
                type: types.LOAD_ISSUES_SUCCESS,
                issues: mapData,
                repoName: repoMock.repoName 
            };
            const store = mockStore(initialState);
            store.dispatch(actions.loadIssues(repoMock.repoName,repoMock.userName)).then(() => {
                const result = store.getActions();
                expect(result).toMatchObject([receiveUsersAction]);
            });
            done();
        });
    });
    describe('loadIssue', () => {
        it('returns data when sendMessage is called', done => {
            var mock = new MockAdapter(axios);
            mock.onGet(`https://api.github.com/repos/${repoMock.userName}/${repoMock.repoName}/issues/${repoMock.issueNumber}`).reply(200, repoMock.singleIssue);
            const receiveUsersAction = {
                type: types.LOAD_ISSUE_SUCCESS,
                issues: repoMock.singleIssue
            };
            const store = mockStore(initialState);
            store.dispatch(actions.loadIssue(repoMock.issueNumber,repoMock.userName,repoMock.repoName)).then(() => {
                const result = store.getActions();
                expect(result).toMatchObject([receiveUsersAction]);
            });
            done();
        });
    });
    /* describe('loadRepos', () => {
        it('returns data when sendMessage is called', done => {
            var mock = new MockAdapter(axios);
            mock.onGet(`https://api.github.com/users/${repoMock.userName}/repos`).reply(200, repoMock.userRepos);
            const receiveUsersAction = {
                type: types.LOAD_REPO_SUCCESS,
		        repoDetails: repoMock.userRepos
            };
            const store = mockStore(initialState);
            store.dispatch(actions.loadRepos(repoMock.userName)).then(() => {
                const result = store.getActions();
                expect(result).toMatchObject([receiveUsersAction]);
            });
            done();
        });
    }); */
    describe('setUserName', () => {
        it('returns data when sendMessage is called', done => {
            const receiveUsersAction = {
                type: types.CURRENT_USER,
		        userName: repoMock.userName
            };
            const result = actions.setUserName(repoMock.userName);
            expect(result).toMatchObject(receiveUsersAction);
            done();
        });
    });
});