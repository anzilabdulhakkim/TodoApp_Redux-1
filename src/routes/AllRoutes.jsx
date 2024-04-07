import {Routes,Route} from 'react-router-dom'
import Login from '../components/Login'
import Todo from '../components/Todo'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Todo /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes
