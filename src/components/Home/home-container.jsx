import {connect} from 'react-redux';

import HomeComponent from './home-component';
const mapStateToProps = state => {
    console.log(state);
    return {
      id: state.id,
      username: state.username
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            console.log('container login');
            dispatch({type:'SET_USER', username: 'Viraj', id: '123'})
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default HomeContainer;