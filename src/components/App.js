import React from 'react';
import { Routes, Route }  from 'react-router-dom'
import Chats from "../pages/Chats";
import Layout from "./Layout";
import MyProfile from "../pages/MyProfile";

function App() {
  return (
   <Routes>
     <Route path={'/'} element={<Layout />}>
       <Route index element={<Chats />}/>
       <Route path={'/myprofile'} element={<MyProfile />}/>
     </Route>
   </Routes>
  )
}

export default App;



