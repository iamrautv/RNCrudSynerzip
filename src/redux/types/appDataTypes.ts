interface AppDataInit  {
  loading: boolean,
  error: boolean,
  [key: string]: any
}

interface AppData {
  [key: string]: any
}

interface Action {
  type: string,
  appData: AppData
}

export type {
  AppDataInit,
  AppData,
  Action
};
