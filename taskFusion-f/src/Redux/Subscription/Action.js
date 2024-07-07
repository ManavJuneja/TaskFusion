// action.js

import api from '@/config/api'; 
import * as actionType from './ActionType';

// Get User Subscription
export const getUserSubscription = () => {
    return async (dispatch) => {
        dispatch({ type: actionType.GET_USER_SUBSCRIPTION_REQUEST });
        try {
            const response = await api.get('/api/subscription/user',{
                headers: {
                    'Authorization': `Bearer ${jwt}`
                },
            });
            dispatch({
                type: actionType.GET_USER_SUBSCRIPTION_SUCCESS,
                payload: response.data
            });
            console.log('User subscription fetched', response.data);
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.GET_USER_SUBSCRIPTION_FAILURE,
                payload: error.message
            });
        }
    };
};

// Upgrade Subscription
export const upgradeSubscription = ({planType}) => {
    return async (dispatch) => {
        dispatch({ type: actionType.UPGRADE_SUBSCRIPTION_REQUEST });
        try {
            const response = await api.patch('/api/subscription/upgrade', null,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                },
                params: {
                    planType:planType,
                },
            });
            dispatch({
                type: actionType.UPGRADE_SUBSCRIPTION_SUCCESS,
                payload: response.data
            });
            console.log('Subscription upgraded', response.data);
        } catch (error) {
            console.log('Error:', error);
            dispatch({
                type: actionType.UPGRADE_SUBSCRIPTION_FAILURE,
                payload: error.message
            });
        }
    };
};
