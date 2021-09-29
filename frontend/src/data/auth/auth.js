import { atom } from 'recoil';
import axios from 'axios';

//회원가입
export const register = ({email, password, passwordCheck, username}) => {
    const regParam = { email, password, passwordCheck, username }
    return axios.post('http://busanit.com:4000/api/v1/user/register', regParam)
}

//로그인
export const login = ({email, password}) => {
    const loginParam = {email, password}
    return axios.post('http://busanit.com:4000/api/v1/user/login', loginParam)
}


export const setLogin = (token, username) => {
    
    axios.defaults.headers.common['Authentication'] = `Bearer ${token}`
    
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('username', username)
}

export const unsetLogout = () => {
    delete axios.defaults.headers.common['Authentication']

    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
}


const userAuthDefault = {
    isAuth: false,
    user: ''
}

const token = window.localStorage.getItem('token')
if(token && token !== 'undefined' && token !== '') {
    const username = window.localStorage.getItem('username')

    if(username){
        setLogin(token, username)
        
        userAuthDefault.isAuth = true
        userAuthDefault.user = username
    }
}

export const userAuth = atom({
    key: 'userAuth',
    default: userAuthDefault
});
