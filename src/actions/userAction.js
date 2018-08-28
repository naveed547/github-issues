import * as types from './actionTypes';
export const searchIssues = (filter) => {
  return {
    type: types.SEARCH_ISSUES,
    filter
  }
}

export const filterIssues = (filter) => {
  return {
    type: types.FILTER_ISSUES,
    filter
  }
}

export const sortIssues = (filter) => {
  return {
    type: types.SORT_ISSUES,
    filter
  }
}

export const toggleIssues = (filter) => {
  console.log(filter);
  return {
    type: types.TOGGLE_ISSUES,
    filter
  }
}

export const goToPage = (id) => {
  return {
    type: types.GOTO_PAGE,
    id
  }
}
