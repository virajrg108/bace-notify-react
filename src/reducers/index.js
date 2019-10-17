// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log("reducer reached!!", action);
      return {
        id: action.id,
        username: action.username
      };
    default:
      console.log('default');
      return state;
  }
};

export default user;