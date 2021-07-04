import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Kanye from './Kanye.jsx';
import Computer from './Computer.jsx';
import Quote from './Quote.jsx';
import generateInspiration from '../computerQuotes.js';

// Function to randomly choose between computer quote and Kanye quote

// once state changes to either, useEffect to grab whichever quote

// handle click in component (if state matches name, render green check mark, else red x)


const App = (props) => {
  const [quote, setQuote] = useState('');
  const [answer, setAnswer] = useState('');
  const [scoreBoard, setScoreBoard] = useState(0);

  const newQuote = () => {
    let choice = Math.random();
    if (choice > 0.5) {
      axios.get('https://api.kanye.rest/')
      .then((result) => {
        setQuote(result.data.quote);
        setAnswer('kanye');
      });
    } else {
      setQuote('computer quote');
      setAnswer('computer');
    }
  };

  const answered = (score) => {
    setScoreBoard(scoreBoard + score);
    setTimeout(() => {
      newQuote();
    }, 5000);
  };

  useEffect(() => {
    newQuote();
  }, [])

  return (
    <div className='h-1/2 w-140px container mx-auto p-16 grid grid-rows-4 grid-cols-none font-sans'>
      <div className='row-span-2 col-auto grid grid-cols-2 place-content-center'>
        <Computer quote={quote} answered={answered} answer={answer}/>
        <Kanye quote={quote} answered={answered} answer={answer}/>
      </div>
      <Quote quote={quote}/>
      <div className='row-span-1 justify-self-center'>
        <span>Score: {scoreBoard}</span>
      </div>
    </div>
  )
};

export default App;