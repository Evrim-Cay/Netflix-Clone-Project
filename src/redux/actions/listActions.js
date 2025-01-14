import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//kullanici id'si
const account_id = import.meta.env.VITE_ACCOUNT_ID;

//listedeki filmleri alan asenkron thunk aksiyonu
export const getWatchList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/${account_id}/watchlist/movies`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

//film listede varsa kaldiran yoksa ekleyen asenkroon thunk aksiyonu

export const toggleMovieList = (movie, isAdd) => async (dispatch) => {
  //body icerigini hazirla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  //api istegi at
  api
    .post(`/account/${account_id}/watchlist`, body)
    .then(() => {
        //ekleme/cikarma durumuna gore reducer'a haber ver
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};
