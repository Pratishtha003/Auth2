import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from "./components/Spinner";
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
import Student from './mainPage/Student';
import Teacher from './mainPage/Teacher';
function App() {
  const {loading} = useSelector(state=>state.alerts);
  return (
    <>
    <Router>
    {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={
                <ProtectedRoutes>
                  <HomePage />
                </ProtectedRoutes>
              } />
            <Route path="/login" element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              } />
            <Route path="/register" element={
                <PublicRoutes>
                  <Register />
                </PublicRoutes>
              } />
              <Route path="/teacher" element={
                <PublicRoutes>
                  <Teacher />
                </PublicRoutes>
              } />
              <Route path="/student" element={
                <PublicRoutes>
                  <Student/>
                </PublicRoutes>
              } />
          </Routes>
        )}
    </Router>
    </>
  );
}

export default App;

