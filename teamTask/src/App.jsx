import {Routes,Route,Link,NavLink} from "react-router-dom"
import React from 'react'
import LogInPage from "./Pages/LogInPage"
import SignUpPage from "./Pages/SignUpPage"
import ForgotPage from "./Pages/ForgotPage"
import VerifyPage from "./Pages/VerifyPage"
import CreateNewPasswordPage from "./Pages/CreateNewPasswordPage"
import UpdatedPasswordPage from "./Pages/UpdatedPasswordPage"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogInPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPage/>}></Route>
        <Route path="/forgotpassword/verifyotp" element={<VerifyPage/>}></Route>
        <Route path="/forgotpassword/verifyotp/createnew" element={<CreateNewPasswordPage/>}></Route>
        <Route path="/forgotpassword/verifyotp/createnew/updated" element={<UpdatedPasswordPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
