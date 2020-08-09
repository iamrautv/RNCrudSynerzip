import { commondTypes as CT } from '../config';
interface ApiRequest {
  method: string,
  header: CT.ApiHeader,
  url: string,
  data: CT.MetaObj | any[],
}

export type {
  ApiRequest
};
