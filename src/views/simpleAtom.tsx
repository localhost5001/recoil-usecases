import { useRecoilValue } from 'recoil'
import { userState } from 'state/simpleAtom'

const SimpleAtom = () => {
    const user = useRecoilValue(userState)
    return (
       <div>{user.id}</div> 
    )
}

export default SimpleAtom
