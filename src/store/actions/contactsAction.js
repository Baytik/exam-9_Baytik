import {CONTACTS_FAILURE, CONTACTS_REQUEST, CONTACTS_SUCCESS} from "./actionTypes";
import axiosAPI from "../../axiosApi";

export const contactsRequest = () => ({type: CONTACTS_REQUEST});
export const contactsSuccess = contacts => ({type: CONTACTS_SUCCESS, contacts});
export const contactsFailure = error => ({type: CONTACTS_FAILURE, error});

export const getContacts = () => {
    return async dispatch => {
        try {
            dispatch(contactsRequest());
            const response = await axiosAPI.get('.json');
            dispatch(contactsSuccess(response.data))
        }catch (e) {
            dispatch(contactsFailure(e))
        }
    }
};