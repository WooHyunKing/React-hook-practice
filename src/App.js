import React, { useState,useEffect } from "react";
import "./styles.css";

//useInput을 사용하면 다른 함수에서 이벤트를 처리할 수 있음
// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (event) => {
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(event.target.value);
//     } else {
//       setValue(event.target.value.slice(0, -2));
//       alert("재입력하세요");
//     }
//   };
//   return { value, onChange };
// };

export default function App() {
  //Hooks가 생기기전까지는 state를 함수형 컴포넌트에서 사용할 수 없었음(클래스형 컴포넌트에서만 가능)
  const sayHello = () => console.log("hello");
  const [number,setNumber]=useState(0);
  const [aNumber,setAnumber]=useState(0);
  
  useEffect(sayHello,[number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={()=>setNumber(number+1)}>{number}</button>
      <button onClick={()=>setAnumber(aNumber+1)}>{aNumber}</button>
    </div>
  );
}

// class AppUgly extends React.Component{ //Hooks를 사용하지 않은 클래스형 컴포넌트
//   state={
//     item:1
//   };

//   incrementItem=()=>{
//     this.setState(state=>{
//       return{
//         item:state.item+1
//       };
//     });
//   };

//   decrementItem=()=>{
//     this.setState(state=>{
//       return{
//         item:state.item-1
//       };
//     });
//   };

//   render(){
//     const {item}=this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.AppdecrementItem}>Decrement</button>
//       </div>
//     );
//   }
// }
