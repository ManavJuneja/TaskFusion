// action.js

import * as actionType from './ActionType';
import api from "@/config/api"; 

// Fetch Issues
export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionType.FETCH_ISSUES_REQUEST });
        try {
            const response = await api.get(`/api/issues/project/${id}`);
            console.log('Issues fetched', response.data);
            dispatch({
                type: actionType.FETCH_ISSUES_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.FETCH_ISSUES_FAILURE,
                error: error.message
            });
        }
    };
};

// Fetch Issue by ID
export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionType.FETCH_ISSUE_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/issues/${id}`);
            console.log('Issue fetched by ID', response.data);
            dispatch({
                type: actionType.FETCH_ISSUE_BY_ID_SUCCESS,
                issue: response.data
            });
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.FETCH_ISSUE_BY_ID_FAILURE,
                error: error.message
            });
        }
    };
};

// Create Issue
export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({ type: actionType.CREATE_ISSUE_REQUEST });
        try {
            const response = await api.post('/api/issues', issueData);
            console.log('Issue created', response.data);
            dispatch({
                type: actionType.CREATE_ISSUE_SUCCESS,
                issue: response.data
            });
            console.log("issue created",response.data)
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.CREATE_ISSUE_FAILURE,
                error: error.message
            });
        }
    };
};

// Update Issue
export const updateIssue = (id, issueData) => {
    return async (dispatch) => {
        dispatch({ type: actionType.UPDATE_ISSUE_REQUEST });
        try {
            const response = await api.put(`/api/issues/${id}`, issueData);
            console.log('Issue updated', response.data);
            dispatch({
                type: actionType.UPDATE_ISSUE_SUCCESS,
                issue: response.data
            });
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.UPDATE_ISSUE_FAILURE,
                error: error.message
            });
        }
    };
};

// Update Issue Status
export const updateIssueStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({ type: actionType.UPDATE_ISSUE_STATUS_REQUEST });
        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log('Issue status updated', response.data);
            dispatch({
                type: actionType.UPDATE_ISSUE_STATUS_SUCCESS,
                issue: response.data
            });
        } catch (error) {
            dispatch({
                type: actionType.UPDATE_ISSUE_STATUS_FAILURE,
                error: error.message
            });
        }
    };
};

// Delete Issue
export const deleteIssue = (id) => {
    return async (dispatch) => {
        dispatch({ type: actionType.DELETE_ISSUE_REQUEST });
        try {
            await api.delete(`/api/issues/${id}`);
            console.log('Issue deleted', id);
            dispatch({
                type: actionType.DELETE_ISSUE_SUCCESS,
                issueId: id
            });
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.DELETE_ISSUE_FAILURE,
                error: error.message
            });
        }
    };
};

// Assigned Issue to User
export const assignedIssueToUser = ({issueId, userId}) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ASSIGNED_ISSUE_TO_USER_REQUEST });
        try {
            const response = await api.put(`/api/issues/${issueId}/assignee/${ userId }`);
            console.log('Issue assigned to user', response.data);
            dispatch({
                type: actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issue: response.data
            });
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error: error.message
            });
        }
    };
};
