import React from "react";
 import Header from "./components/Header";
 import Home from "./components/Home";  
 import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
 import Login from "./components/Login";
 import Register from "./components/Register";
 import Contact from "./components/Contact";        
 import Footer2 from "./components/Footer2"; 
 import Quiz from "./components/Quiz";  
 import Memory from "./components2/Memory";
 import Sleep from "./components2/Sleep";
 import YourBody from "./components2/YourBody";
 import Digestion from "./components2/Digestion";
 import Pain from "./components2/Pain";
 import Relationship from "./components2/Relationship";
 import Skin from "./components2/Skin";
 import ResultPage from "./components2/ResultPage";
 import "./styles/App.scss"; 
 import "./styles/header.scss";
 import "./styles/login.scss";
 import "./styles/register.scss";
 import "./styles/home.scss";
 import "./styles/Footer.scss";
 import "./styles/Footer2.scss";
 import "./styles2/questionform.css";
 import "./styles/mediaquries.scss";
import VirtualCalling from "./components/VirtualCalling";
import Room from "./components/Room";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/login" element = {<Login/>}/> 
        <Route path="/calling" element = {<VirtualCalling/>}/>  
        <Route path="/register" element = {<Register/>}/> 
        <Route path="/room/:roomID" element = {<Room/>}/> 
        {/* <Route path="/question" element = {<QuestionForm/>}/>  */}
        <Route path="/quiz" element = {<Quiz/>}/>
        <Route path="/memory" element = {<Memory/>}/> 
        <Route path="/sleep" element = {<Sleep/>}/> 
        <Route path="/yourbody" element = {<YourBody/>}/> 
        <Route path="/digestion" element = {<Digestion/>}/> 
        <Route path="/pain" element = {<Pain/>}/> 
        <Route path="/relationship" element = {<Relationship/>}/> 
        <Route path="/skin" element = {<Skin/>}/> 
        <Route path="/result" element = {<ResultPage/>}/>
      </Routes>
      {/* <Footer/> */}
      <Footer2/>
    </Router>
  );
}

export default App;

