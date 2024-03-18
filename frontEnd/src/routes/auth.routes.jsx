import {Routes, Route, Navigate} from 'react-router-dom';

import {SingIn} from '../pages/Singin'
import {SingUp} from '../pages/Singup'


export function AuthRoutes(){
    const user = localStorage.getItem("@rocketnotes:user");

    return(
        <Routes>
            <Route path='/' element={<SingIn/>} />
            <Route path='/register' element={<SingUp/>} />
            {!user  && <Route path='*' element={<Navigate to="/"/>} />} 
        </Routes>

    )
}