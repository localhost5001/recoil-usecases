import { useId } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from 'state/simpleAtom'

const UserForm = () => {
    const [user, setUser] = useRecoilState(userState)
    const emailId = useId()
    const nameId = useId()

    return (
        <div className='border border-gray-200 p-2 m-2'>
            <div className=''>User Id {user.id}</div>
            <div className='my-2'>
                <label htmlFor={emailId} className="block mb-2 text-sm font-medium text-gray-900">
                    Email   
                </label>
                <input 
                    type="email" 
                    id={emailId}
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="w-full shadow-md p-1 border-gray-300 rounded-lg" 
                    placeholder="name@flowbite.com" 
                />
            </div>

             <div className="my-2">
                <label htmlFor={nameId} className="block mb-2 text-sm font-medium text-gray-900">
                    Name   
                </label>
                <input 
                    type="text" 
                    id={nameId}
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full shadow-md p-1 border-gray-300 rounded-lg" 
                    placeholder="name@flowbite.com" 
                />
             </div>
        </div>
    )
}

const SimpleAtom = () => {
    return (
       <div className='m-2 p-5 drop-shadow-lg bg-gray-300'>
            <UserForm />
            <UserForm />
       </div> 
    )
}

export default SimpleAtom
