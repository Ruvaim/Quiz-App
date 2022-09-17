import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import axios from 'axios';
import Categories from './Data/Catagories';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category,difficulty) => {

    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

      const {results} = data;

      const allQues = results.map((result) => ({
        question:result.question,
        correct:result.correct_answer,
        incorrect:result.incorrect_answers,
        category:result.category
      }))

      setQuestions(allQues)
    }
    
    console.log("questionss",questions);
  

  return (
    <Router>
      <div className="App" style={{backgroundImage:'url(./ques1.png)'}}>
        <Header />

          <Routes>

            <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
            <Route path='/quiz' exact element={<Quiz 
            name={name}
            questions={questions}
            setQuestions={setQuestions}
            score={score}
            setScore={setScore}
            />}/>
            <Route path='/result' exact element={<Result />}/>
            
          </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
