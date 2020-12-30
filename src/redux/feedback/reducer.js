import {FEEDBACK} from "./constants";

const initialState = {};

const feedbackReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case FEEDBACK.POST_FEEDBACK_REQUEST:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};

export default feedbackReducer;