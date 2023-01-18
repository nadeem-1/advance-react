
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"


console.log("check");


// const AppDemo=()=>(
    
//     <h1>Hello React</h1>
    
// );

// class App extends React.Component{
//     state={
//         answer: 42
//     };
// render(){
//     return(
//         <h1>Hello Claas  {this.state.answer}</h1>
//     );
// }
// }

// export default App;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)