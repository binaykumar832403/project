import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from './Admin/AdminLogin';
import AdminDashBoard from './Admin/AdminDashBoard';
import AdminContext from './contextApi/AdminContext';
import { useState } from 'react';
import AdminSignUp from './Admin/AdminSignUp';
import AdminDetailsUpdate from './Admin/AdminDetailsUpdate';
import QuestionPage from './Admin/QuestionPage';
import ViewUserScorePage from './Admin/ViewUserScorePage';
import MainPage from './MainPage';
import UserLogin from './user/UserLogin';
import UserDashBoard from './user/UserDashBoard';
import QuestionSubmitPage from './user/QuestionSubmitPage';
import UserSignUp from './user/UserSignUp';



function App() {
  const [globalUsername,setGlobalUsername]=useState()
  return (
    <>
      <BrowserRouter>
        <AdminContext.Provider value={{globalUsername:globalUsername,setGlobalUsername:setGlobalUsername}}>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/userLogin' element={<UserLogin></UserLogin>}></Route>
            <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
            <Route path='/userDashBoard' element={<UserDashBoard></UserDashBoard>}></Route>
            <Route path='/adminDashBoard' element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path='/adminSignUp' element={<AdminSignUp></AdminSignUp>}></Route>
            <Route path='/userSignUp' element={<UserSignUp></UserSignUp>}></Route>
            <Route path='/adminDetailsUpdate/:id' element={<AdminDetailsUpdate></AdminDetailsUpdate>}></Route>
            <Route path='/questionPage' element={<QuestionPage></QuestionPage>}></Route>
            <Route path='/submitPage' element={<QuestionSubmitPage></QuestionSubmitPage>}></Route>
            <Route path='/viewUserScorePage' element={<ViewUserScorePage></ViewUserScorePage>}></Route>
          </Routes>
        </AdminContext.Provider>
      </BrowserRouter>
      
    </>
    
  );
}

export default App