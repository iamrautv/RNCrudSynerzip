import { commondTypes as CT } from '../config';
import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import { helpers, constants } from '../config';
import * as T from './types';

const { statusCodes } = constants;

const { BASE_URL } = Config;

const apiRequest = (type: string, data: CT.MetaObj, url: string, header: CT.ApiHeader = {}): Promise<any> => new Promise<any>(async (resolve, reject) => {
  try {
    const res = await axios({
      method: type,
      header: helpers.buildHeader(header),
      url: `${BASE_URL}${url}`,
      data
    });
    const resData = res.data;
    if (res.status === statusCodes.success) {
      resolve(resData.data);
    } else {
      reject({});
    }
  } catch (err) {
    reject({});
  }
});

export default apiRequest;
