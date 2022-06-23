import { atom } from 'recoil'

const userObj = {
    id: 1,
    name: 'User Name'
}

export const userState = atom({
    key: 'user',
    default: userObj
})
