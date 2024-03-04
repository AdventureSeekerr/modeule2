import React from "react";
import { Route, Routes} from "react-router-dom";
import Registration from "./Registration";
import SignIn from "./Sign-in";
import SpisokFilovUser from "./Spisok-filov-user"
import RedactirovanieFiles from './Redactiorovanie-file'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/signIn" element={< SignIn />} />
        <Route path="/SpisokFilovUser" element={< SpisokFilovUser /> }/>
        <Route path="/redactirovanie" element={< RedactirovanieFiles />}></Route>
      </Routes>
    </>

  )
}
