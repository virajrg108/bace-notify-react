import {connect} from 'react-redux';

import LoginComponent from './login-component';

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            console.log('container login');
            dispatch({type:'SET_USER', username: 'Viraj', id: '123'})
        }
    };
};

const LoginContainer = connect(null, mapDispatchToProps)(LoginComponent)

export default LoginContainer;