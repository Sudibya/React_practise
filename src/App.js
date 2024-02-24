
import styles from  './App.module.css';
let category;
const User =(props)=>{
  return (
    <div>
      <h1 className={styles.Name}>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      {props.age<=18 ? <h1>Underage</h1> : <h1>Legal age</h1>}
      
    </div>
  );
};

function App() {


  return (
    <div className={styles.App}>
       <User name="Sudibya" age={18} email="sonujena085@gmail.com" />
        
        <h2 style={{color:"red"}}>Show the color</h2>
    </div>
  );
}
export default App;
