import axiosClient from "./axiosClient";

const authApi = { 
    register: (params) => { 
        const url = "/auth/register";
        return axiosClient.post(url, params);
    },
    login: (params) => { 
        const url = "/auth/login";
        return axiosClient.post(url, params);
    }
}

export default authApi;