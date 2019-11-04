import { combineReducers } from 'redux';

const UPDATE_PROMOS = "UPDATE_PROMOS";

const UPDATE_LOADING = "UPDATE_LOADING";



const initialState = {
  promos: [],
  isLoading: true
};

const promosReducer = (state = initialState.promos, action) => {
  console.log(action.type)
  if(action.type === UPDATE_PROMOS) {

    return action.value
  }
  return state;
};

const loadingReducer = (state = initialState.isLoading, action) => {
  console.log(action.type)
  if(action.type === UPDATE_LOADING) {

    return action.value
  }
  return state;
};




const rootReducer = combineReducers({
  promos: promosReducer,
  isLoading: loadingReducer
});

export default rootReducer;
