import axios from "axios";
import Config from 'react-native-config'

const instance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    baseURL: Config.BOOKAPI_HOST,
    timeout: 50000,
});

export default instance