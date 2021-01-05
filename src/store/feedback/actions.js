import {FEEDBACK} from "./constants";

export const postFeedback = (data) => (
    {type: FEEDBACK.POST_FEEDBACK_REQUEST, payload: data}
)