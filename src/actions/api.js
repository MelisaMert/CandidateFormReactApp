//In Order To Make HTTP request we will use the package Axios

import axios from "axios";

const baseUrl = "http://localhost:64846/api/";

// baseURL + suffix
// common action
export default {
    dCandidate(url = baseUrl + 'dCandidate/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newRecord => axios.post(url,newRecord),
            update: (id,updateRecord) => axios.pust(url+id,updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}