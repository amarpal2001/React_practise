import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Practise from './class_component/Practise';
import Increment from './class_component/Increment'
// import './index.css' 
import './Button.css'
import './Login.css'
import './sign.css'
import './React_Todo_app/Todoapp.css'
import Bind from './class_component/Bind'
// import Pr from './class_component/Pr';
// import nature from './class_component/nature.jpeg'
// import moon from './class_component/moon.jpeg'
// import flower from './class_component/flower.jpeg'
// import UseRef from './class_component/UseRef';
// import MyComp from './class_component/MyComp';
// import UseCounter from './class_component/function_component/UseCounter';
// import HookCounterThree from './class_component/function_component/HookCounterThree';
import HookCounterTwo from './class_component/function_component/HookCounterTwo';
// import Hookcounter from './class_component/function_component/Hookcounter';
import Login from './Login';
import Button from './Button'
import SignUp from './SignUp';
import TodoApp from './React_Todo_app/TodoApp';
import Context from './class_component/function_component/Context'
import New from './class_component/New';
import ChangeColor from './class_component/ChangeColor';


function App() {
  return (
    <div>
      {/* <Context /> */}
      <TodoApp/>
      {/* <ChangeColor/> */}
      {/* <Router>
           <Switch>
          <Route exact path="/" component={Button}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/Login" component={Login}/>
          </Switch>
      </Router> */}
      {/* <Button/> */}
      {/* <SignUp/> */} 
      {/* <Login/> */}
      {/* <Practise/> */}
      {/* <Increment /> */}
      {/* <Bind/>  */}
      {/* <Hookcounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <UseCounter/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <Hookcounter/> */}
      {/* <Pr>
        <img src={nature} className="sticky"/>
        <img src={moon}  className="sticky1"/>
        <img src={flower} className="sticky2" />
      </Pr> */}
      {/* <UseRef/> */}
      {/* <MyComp heading={"love"} content={"Love is good"}/> */}
      {/* <New/> */}
    </div>
  )
}
export default App;