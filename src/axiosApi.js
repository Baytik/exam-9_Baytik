import axios from 'axios';

const axiosAPI = axios.create({
   baseURL: 'https://exam-9-contacts.firebaseio.com/'
});

export default axiosAPI