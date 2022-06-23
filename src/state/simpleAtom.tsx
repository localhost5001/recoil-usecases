import { atom } from 'recoil'

const userObj = {
    id: 1,
    name: 'User Name',
    email: 'mail@mail.com'
}

export const userState = atom({
    key: 'user',
    default: userObj
})
