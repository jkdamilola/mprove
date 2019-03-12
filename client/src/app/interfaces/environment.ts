import * as enums from '@app/enums/_index';

export interface Environment {
  dev: boolean;
  local: boolean;
  test: boolean;
  production: boolean;

  canClickOkOnErrorDialog: boolean;
  canPrintToConsole: boolean;
  canUseStoreLogger: boolean;
  canUseStoreFreeze: boolean;

  // dynamicAssetsBaseUrl: string;
  // httpUrl: string;
  // websocketUrl: string;

  i18nPrefix?: string;
  versions?: any;
}
