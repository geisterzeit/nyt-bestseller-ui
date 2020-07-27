import { useReducer, useEffect } from "react";
import axios from "axios";

const URL = [
  "https://api.nytimes.com/svc/books/lists/current/hardcover-fiction.json",
  "https://api.nytimes.com/svc/books/lists/current/hardcover-nonfiction.json",
  "https://api.nytimes.com/svc/books/lists/current/hardcover-advice.json",
  "https://api.nytimes.com/svc/books/lists/current/graphic-books-and-manga.json",
  "https://api.nytimes.com/svc/books/lists/current/young-adult-hardcover.json",
  "https://api.nytimes.com/svc/books/lists/current/series-books.json",
];
const API_KEY = "dyx4xS5FgjwQ5rrJPYKKOqXHfwybgoWG";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, books: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, books: action.payload.books };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        books: [],
      };
    default:
      return state;
  }
}

export default function useFetchApi(category) {
  const [state, dispatch] = useReducer(reducer, { books: [], loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    dispatch({ type: ACTIONS.MAKE_REQUEST });

    axios
      .get(URL[category], {
        cancelToken: cancelToken.token,
        params: {
          "api-key": API_KEY,
        },
      })
      .then((response) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { books: response.data.body },
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: error } });
      });
  }, [category]);

  return state;
}
