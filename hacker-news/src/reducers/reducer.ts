import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../actions";

import { IInitialState } from "../context/appContext";

interface IAppAction {
  type: string;
  payload?: any;
}

export const reducer = (state: IInitialState, action: IAppAction) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;

        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }

        return {
          ...state,
          page: nextPage,
        };
      }

      if (action.payload === "dec") {
        let prevPage = state.page - 1;

        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }

        return { ...state, page: prevPage };
      }

      return {
        ...state,
      };
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
