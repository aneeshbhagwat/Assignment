import React from 'react';
import './App.css';

export default class App extends React.Component
 {
  constructor(){
    super();
    this.state={show:false}
  }

  render(){
  return (
    <div>
      <h1>Componet is Unmount</h1>

     {this.state.show?<Child/>:null}
      <button onClick={()=>{this.setState({show:!this.state.show})}}>
        Toogle Child
      </button>

    </div>
    
    
    
  );
}
 }

class Child extends React.Component{

  componentWillUnmount()
  {
    console.warn("componet is hidden")
  }
  render(){
    return (
      <div>
          <h2>Child componet</h2>
       </div>
    );
  }
}


// import logo from './logo.svg';
// import './App.css';
// import FirstComponent from './components/FirstComponent';
// import SecondComponent from './components/SecondComponent';
// import { useState } from 'react';

// function App() {

//   const [counter, setCounter] = useState(0)

//   const [mountFirst, setmountFirst] = useState(true)
//   const [mountSecond, setmountSecond] = useState(false)

//   // console.log("App component rendered");

//   const handleMountFirst = () => {
//     setmountSecond(false)
//     setmountFirst(true)
//   }

//   const handleMountsecond = () => {
//     setmountSecond(true)
//     setmountFirst(false)
//   }


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Counter : {counter}</h1>
//         <div>
//           <button onClick={() => setCounter(counter + 1)}>Increment</button>
//           <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//         </div>

//         {mountFirst && <FirstComponent/>}
//         {mountSecond && <SecondComponent/>}

//         <div>
//           <button onClick={handleMountFirst}>Toggle First Component</button>
//           <button onClick={handleMountsecond}>Toggle Second Component</button>
//         </div>
      
//       </header>
//     </div>
//   );
// }

// export default App;



