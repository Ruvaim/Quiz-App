import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {

  const [name, setName] = useState("")


  const fetchQuestions = () => {

  }

  return (
    <Router>
      <div className="App" style={{backgroundImage:'url(./ques1.png)'}}>
        <Header />

          <Routes>

            <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
            <Route path='/quiz' exact element={<Quiz />}/>
            <Route path='/result' exact element={<Result />}/>
            
          </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
