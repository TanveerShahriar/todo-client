import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import CustomTitle from './Pages/Shared/CustomTitle/CustomTitle';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <CustomTitle title={"Home"}>
              <Home></Home>
            </CustomTitle>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={
          <CustomTitle title={"Login"}>
            <Login></Login>
          </CustomTitle>
        }></Route>

        <Route path='/register' element={
          <CustomTitle title={"Register"}>
            <Register></Register>
          </CustomTitle>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
