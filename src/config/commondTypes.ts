interface MetaObj {
  [key: string]: any
}

interface ApiHeader {
  Accept?: string,
  'Content-Type'?: string,
  'Cache-Control'?: string,
  Authorization?: string
}

export type {
  MetaObj,
  ApiHeader
};
