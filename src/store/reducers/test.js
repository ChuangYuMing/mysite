import { createAction, handleActions } from 'redux-actions';
import { CHANGE_VALUE_TEST } from '../actions/actionTypes';

export const changeValueTest = createAction(CHANGE_VALUE_TEST, updates => updates);


const initialState = {
    testValue: 'test1'
}
export default handleActions(
    {
        [changeValueTest]: (state, action) => ({
            ...state,
            ...action.payload,
            hasChanged: true,
        }),
    },
    initialState
);