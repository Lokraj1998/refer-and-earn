import axios from "axios";
import { API_BASE_URL } from "../Constants";


export const getAllByReferralCode = (ref) => {
    return axios.get(API_BASE_URL + "/api/user/" + ref);
};

export const getUserByUsername = (userName) => {
    return axios.get(API_BASE_URL + "/api/user/userName/" + userName);
};

export const createUser = (post) => {
    return axios.post(API_BASE_URL + "/api/user", post);
};

export const getAllUsers = (id) => {
    return axios.get(API_BASE_URL + "/api/user/all/"+ id);
};

export const deletedUser = (userId) => {
    console.log("userId", userId);
    return axios.delete(API_BASE_URL + "/api/user/deleteuser/"+ userId);
}
