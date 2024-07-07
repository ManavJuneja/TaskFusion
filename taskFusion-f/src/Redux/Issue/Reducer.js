 // reducers/issuesReducer.js

import * as actionType from './ActionType';

const initialState = {
    issues: [],
    issue: null,
    loading: false,
    error: null
};

const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_ISSUES_REQUEST:
            case actionType.CREATE_ISSUE_REQUEST:
                // case actionType.UPDATE_ISSUE_REQUEST:
                // case actionType.UPDATE_ISSUE_STATUS_REQUEST:
                    case actionType.DELETE_ISSUE_REQUEST:
            case actionType.FETCH_ISSUE_BY_ID_REQUEST:
        case actionType.ASSIGNED_ISSUE_TO_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionType.FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                issues: action.issues,
                loading: false
            };
        case actionType.FETCH_ISSUE_BY_ID_SUCCESS:
        case actionType.UPDATE_ISSUE_SUCCESS:
        case actionType.UPDATE_ISSUE_STATUS_SUCCESS:
            return {
                ...state,
                issueDetails: action.issue,
                loading: false
            };
            case actionType.CREATE_ISSUE_SUCCESS:
                return {
                    ...state,
                    issues: [...state.issues, action.issue],
                    loading: false
                };
        case actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                issues:state.issues.map((issue)=>
                    issue.id===action.issue.id? action.issue:issue
                ),
                };
            
        case actionType.DELETE_ISSUE_SUCCESS:
            return {
                ...state,
                issues: state.issues.filter((issue) => issue.id !== action.issueId),
                loading: false
            };
        case actionType.FETCH_ISSUES_FAILURE:
        // case actionType.FETCH_ISSUE_BY_ID_FAILURE:
        case actionType.CREATE_ISSUE_FAILURE:
        // case actionType.UPDATE_ISSUE_FAILURE:
        // case actionType.UPDATE_ISSUE_STATUS_FAILURE:
        case actionType.DELETE_ISSUE_FAILURE:
        case actionType.ASSIGNED_ISSUE_TO_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default issuesReducer;
