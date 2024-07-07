import * as actionType from './ActionType';

const initialState = { // Corrected typo from 'iniitalState' to 'initialState'
    messages: [], // Ensure messages is initialized as an empty array
    loading: false,
    error: null,
    chat: null
};

const ChatReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.FETCH_MESSAGES_REQUEST:
        case actionType.SEND_MESSAGE_REQUEST:
        case actionType.FETCH_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionType.FETCH_MESSAGES_SUCCESS:
        case actionType.FETCH_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.messages
            };
        case actionType.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message] // Ensure messages is updated correctly
            };
        case actionType.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat
            };
        case actionType.FETCH_MESSAGES_FAILURE:
        case actionType.SEND_MESSAGE_FAILURE:
        case actionType.FETCH_CHAT_BY_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default ChatReducer;
