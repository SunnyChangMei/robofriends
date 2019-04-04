import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD, //cap const variable
  payload: text
});
