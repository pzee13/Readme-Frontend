import { Route , Routes  } from 'react-router-dom'
import SignUp from '../pages/authentication/SignUp';
import Login from '../pages/authentication/Login';


function UserRoutes() {
    return (
        <Routes>
           <Route path="/signup" element={ <SignUp />} />
           <Route path="/login" element={ <Login />} />
        </Routes>
    )
}


export default UserRoutes;