import {call, takeLatest, all, fork} from 'redux-saga/effects'
import axios from "axios";
import {FEEDBACK} from "./constants";

const API_ENDPOINT = window.REACT_APP_API_ENDPOINT;

function* handleFeedbackRequest(action) {
    yield call(
        axios.post,
        `${API_ENDPOINT}/feedback/send`,
        action
    );
}

function* watchHandleFeedbackRequest() {
    yield takeLatest(
        FEEDBACK.POST_FEEDBACK_REQUEST,
        handleFeedbackRequest
    )
}

export function* feedbackSaga() {
    yield all([fork(watchHandleFeedbackRequest)]);
}


