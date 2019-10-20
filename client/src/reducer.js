import { combineReducers } from 'redux';

const UPDATE_PROMOS = "UPDATE_PROMOS";



const initialState = {
  promos: []
};

const promosReducer = (state = initialState.promos, action) => {
  console.log(action.type)
  if(action.type === UPDATE_PROMOS) {

    return action.value
  }
  return state;
};



const rootReducer = combineReducers({
  promos: promosReducer
});

export default rootReducer;
