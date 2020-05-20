import {call, take} from "redux-saga/effects";
import {updateUserProfileSaga} from "../profile/profile-sagas";
import {updateUserProfile} from "../profile/profile-reducer";
import {TOGGLE_MEMBERSHIP} from "./memberships-reducer";

export function* updateMembershipSaga() {
    while (true) {
        const {payload: {membership, isActive}} = yield take(TOGGLE_MEMBERSHIP);
        let data;

        isActive ? data = {membership} : data = {membership: {name: 'memberships.titleFree', id: null}};
        yield call(updateUserProfileSaga, updateUserProfile(data));
    }
}
