import { commondTypes as CT } from '../config';
import axios from 'axios';
import Config from 'react-native-config';
import { helpers, constants } from '../config';
import * as T from './types';

const { statusCodes } = constants;

const { BASE_URL } = Config;

const apiRequest = (type: string, data: CT.MetaObj, url: string, header: CT.ApiHeader = {}): Promise<any> => new Promise<any>(async (resolve, reject) => {
  try {
    let res;
    if (type === 'GET') {
      res = await axios.get(url);
    } else if (type === 'DELETE') {
      res = await axios.delete(url);
    } else {
      res = await axios({
        method: type,
        headers: helpers.buildHeader(header),
        url: url,
        data
      });
    }
    resolve(res.data);
  } catch (err) {
    console.log({ err });
    reject({});
  }
});

export default apiRequest;
