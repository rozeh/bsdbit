import axios from "axios"
import { atom } from "recoil"

export const docsList = () => {
    return axios.get('http://busanit.com:4000/api/v1/docs/list')
}

export const regDocs = ({title, content, docsuser, phoneNum, boardId}) => {
    const paramReg = { title, content, docsuser, phoneNum, boardId }
    return axios.post('http://busanit.com:4000/api/v1/docs/create', paramReg)
}

const DocsDefault = {
    title:'',
    content:'',
    docsuser:'',
    phoneNum:'',
    boardId:''
}

export const userDocs = atom({
    key: 'userDocs',
    default: DocsDefault
});