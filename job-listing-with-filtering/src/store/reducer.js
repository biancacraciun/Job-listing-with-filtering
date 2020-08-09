import * as actionTypes from './actions';

const initialState = {
    jobs: [],
    tags: [],
    error: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_JOBS:
            return {
                ...state,
                jobs: [...action.storedJobs]
            }
        case actionTypes.ERROR :
            return {
                ...state,
                error: true,
            }
        case actionTypes.ADD_TAG:
            if(state.tags.indexOf(action.clickedTag) === -1) {
                return {
                    ...state,
                    tags: [
                        ...state.tags,
                        action.clickedTag
                    ]
                }
            } 

            return {
                ...state,
                tags: [
                    ...state.tags
                ],
                show: true
            }
        case actionTypes.REMOVE_TAG: 
            return {
                ...state,
                tags: [...state.tags]
            }
        case actionTypes.CLEAR_ACTIVE_STATE:
            return {
                ...state,
                tags: [],
            }
        case actionTypes.CLOSE_ERROR:
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;