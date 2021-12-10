import axios from "axios";

const baseURL = "http://localhost:2410";
//const baseURL = "https://nameless-peak-87129.herokuapp.com";
function get(url:string){
    return axios.get(baseURL + url);
}

function post(url:string,obj:object){
    return axios.post(baseURL + url, obj)
}

export default {
    get,
    post,
}