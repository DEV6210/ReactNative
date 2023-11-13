import axios from "axios";

const url = 'http://192.168.0.103:8000';


export const getPosts = async () => {
    try {
        const res = await axios.get(`${url}/getPosts`);
        return res;
    } catch (error) {
        console.log('api call error', error)
    }
}