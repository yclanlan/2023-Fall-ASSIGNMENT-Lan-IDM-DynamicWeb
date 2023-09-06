//Omport React and ReactDOM libraries
import React from 'react';
import ReactDOM  from 'react-dom/client';

//Grab #root div and store it as a var
//Tie react to our root div aka let react control this div

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

//create an app component
function App(){
  const name = 'Lan'
  const age = '28'

  let flip = Math.random()
  let coin ='tail'
  if (flip>0.5){
    coin='head'
  }else{
    coin='tail'
  }

  const arr=[1,1,3];
  const myObj={name:'Lan'}




  return (
    <>
    <h1> Fried Garlic Water Spinach </h1>
    <img src="https://img.soundofhope.org/2020-07/88-1596049315262.jpg"
    style={{ width:'50%'}}></img>

    <h3>Ingredients</h3>
    <li>water spinach </li>
      <li>garlic</li>
      <li>chili</li>
      <li>salt</li>
    <ul> 
      
    </ul>

    <h3>step</h3>
    <ol> 


      <li>After applying a coat of oil to the pan, add sliced garlic and chili. Sauté until they become tender and fragrant. </li>
      <li>Once the garlic and chili are ready, introduce the vegetable stalks into the pan. Sprinkle with salt.</li>
      <li>Cover the pan with a lid and allow the vegetables to steam briefly. The leaves will release their moisture as they cook.</li>
      <li>When everything is cooked to perfection, it's time to plate up and enjoy!</li>
    </ol>



    <br/><br/><br/><br/><br/><br/>
   {/* ---------- what we learned in class ---------- */}
  <hr/>
    <h1> Hello React!</h1>
      <p> My name is {name} and I am {age} years old</p>
      <p> flip: {flip}</p>
      <p> Coins flip: <b>{coin}</b></p>
      <p> Coins flip by short hand: 
        <b>{
        Math.random()>0.5 ? 'heads' : 'tails'
        }</b>
      </p>

      <hr/>

      <p> Print the array out: {arr} </p>

      { /* <p> {myObj} </p> */ }

      <button disable={false} style={{color:'red'}}> Click Me </button>
      <input type="number" min={5} />



    </>
  )
}

//Render react root / root div from index.html
root.render(<App />);
