import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import CustomTitle from './Pages/Shared/CustomTitle/CustomTitle';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <CustomTitle title={"Home"}>
            <Home></Home>
          </CustomTitle>
        }></Route>

        <Route path='/login' element={
          <CustomTitle title={"Login"}>
            <Login></Login>
          </CustomTitle>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
