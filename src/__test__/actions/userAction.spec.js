import * as types from '../../actions/actionTypes';
import * as actions from "../../actions/userAction";

describe('>>>A C T I O N --- Test userActions',()=>{
    it('+++ actionCreator searchIssues', () => {
        const search = actions.searchIssues('bootstrap')
        expect(search).toEqual({type:types.SEARCH_ISSUES,filter:'bootstrap'})
    });
    it('+++ actionCreator filterIssues', () => {
        const filter = actions.filterIssues('Your Issues')
        expect(filter).toEqual({type:types.FILTER_ISSUES,filter:'Your Issues'})
    });
    it('+++ actionCreator sortIssues', () => {
        const sort = actions.sortIssues('Newest')
        expect(sort).toEqual({type:types.SORT_ISSUES,filter:'Newest'})
    });
    it('+++ actionCreator toggleIssues', () => {
        const toggle = actions.toggleIssues('open')
        expect(toggle).toEqual({type:types.TOGGLE_ISSUES,filter:'open'})
    });
    it('+++ actionCreator goToPage', () => {
        const goTo = actions.goToPage(10)
        expect(goTo).toEqual({type:types.GOTO_PAGE,id:10})
    });
});