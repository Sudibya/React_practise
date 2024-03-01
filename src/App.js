import styles from  './App.module.css';
// import { UserInfo } from './Userinfo';

import { useState } from 'react';



// const User =(props)=>{
//   return (
//     <div>
//       <h1 className={styles.Name}>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//       {props.age<=18 ? <h1>Underage</h1> : <h1>Legal age</h1>}
//     </div>
//   );
// };



function App() {

  // Now we will use the useState to learn how to use it to store the data 


  let age = 0;

  const increaseAge = ()=>{
    age = age +1;
    console.log('Increasing age'); 
    console.log(age);
  };
  return (
      <div>
      <h1>Show the value in it</h1>
      <h1>{age}</h1>
      <button onClick={increaseAge}>Press this to count</button>


      </div>
      


      
  );
}
export default App;
