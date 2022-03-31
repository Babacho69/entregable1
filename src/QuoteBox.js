import React from 'react';
import quotes from './quotes.json';
import { useState } from 'react';
import Quotes from './Quotes';


const getRandom = () => Math.floor(Math.random() * quotes.length)

const colors = [ "#4A0404", "#cc7722", "brown", "red", "#808000", "#0000ff"  ];

const QuoteBox = () => {

    const [ quote, setQuote] = useState(quotes[getRandom()]);
  
    const changeQuotes = () => {
      const random = getRandom()
      setQuote(quotes[random]);
    }
  
    
    const color = colors[Math.floor(Math.random() * 6)]
  
    document.body.style = `background: ${color}`
  
  
    
    console.log(quotes)
    
      return (
      
      <div className='card' style={{color: color }}>

        <h1><Quotes quote={quote.quote}/></h1>

        <h4>{quote.author}</h4>
        <button  onClick={ changeQuotes } style={{background: color }}><i className="fa-solid fa-angle-right" style={{color:'white'}} ></i></button>
        
      </div>
    );
  }
  
  
  
  export default QuoteBox;
  