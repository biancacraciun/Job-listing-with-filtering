import axios from 'axios';

export const STORE_JOBS = 'STORE_JOBS';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const CLEAR_ACTIVE_STATE = 'CLEAR_ACTIVE_STATE';
export const ERROR = 'ERROR';
export const CLOSE_ERROR = 'CLOSE_ERROR';

export const storeJobs = (jobs) => {
    return {
        type: STORE_JOBS,
        storedJobs: jobs
    }
};

export const initJobs = () => {
    return dispatch => {
        axios.get('https://jsonblob.com/api/jsonBlob/7dc98bf1-d54d-11ea-b46a-15b043ad7f95')
        .then(response => {
            dispatch(storeJobs(response.data.jobs))
        })
        .catch(error => {
            throw new Error(error)
        });
    }
};

export const addTag = (tag) => {
    return {
        type: ADD_TAG,
        clickedTag: tag
    }
};

export const removeTag = () => {
    return {
        type: REMOVE_TAG
    }
};

export const clearActiveState = () => {
    return {
        type: CLEAR_ACTIVE_STATE
    }
};

export const error = () => {
    return {
        type: ERROR,
    }
};

export const closeError = () => {
    return {
        type: CLOSE_ERROR
    }
}
