import { Route , Routes  } from 'react-router-dom'
import SignUp from '../pages/authentication/SignUp';
import Login from '../pages/authentication/Login';
import HomePage from '../pages/bookPages/Home';


function UserRoutes() {
    return (
        <Routes>
           <Route path="/signup" element={ <SignUp />} />
           <Route path="/login" element={ <Login />} />
           <Route path="/" element={ <HomePage />} />
        </Routes>
    )
}


export default UserRoutes;