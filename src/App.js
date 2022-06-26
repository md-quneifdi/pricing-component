import React,  { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { Data1 , Data2} from './components/Data';

function App() {
  const [item,setItem] = useState(false);

  const handleState = () => setItem(!item);

  let Data;

  item ? Data = Data1 : Data = Data2;

  return (
    <div className="App">
     <div className="pricing-box">
       <div className="title-part">
         <h2>Our Pricing</h2>
         <div className="options">
           <span>Annually</span>
           <span><Button rounded={true} click={handleState} /></span>
           <span>Monthly</span>
         </div>
       </div>
       <div className="pricing-cards">
         {
           Data.map(items => (
             
            <div className="basic-card" key={items.id}> 
              <h2 className="title">{items.title}</h2>
              <h1 className="price">
                <span className='d-sign'>$</span>
                <span className='p-span'>{items.price}</span>
              </h1>
              <ul className="info">
                <li>{items.line1}</li>
                <li>{items.line2}</li>
                <li>{items.line3}</li>
              </ul>
              <button className='btn'>LERN MORE</button>
         </div>
           ))
         }
       </div>
     </div>
    </div>
  );
}

export default App;
