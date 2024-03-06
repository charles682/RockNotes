
import {Routes, Route} from 'react-router-dom';

import {SingIn} from '../pages/Singin'
import {SingUp} from '../pages/Singup'


export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SingIn/>} />
            <Route path='/register' element={<SingUp/>} />
           
        </Routes>

    )
}