import React, { useState } from "react";
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

const content=[
    {
        tab:"Section 1",
        content:"I'm the content of the Section 1"
    },
    {
        tab:"Section 2",
        content:"I'm the content of the Section 2"
    },
]

const useTabs=(initialTab,allTabs)=>{
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    const [currentIndex,setCurrentIndex]=useState(initialTab);
    return{
        currentItem:allTabs[currentIndex],
        changeItem:setCurrentIndex
    }
}

export default function App() {
    const {currentItem,changeItem}=useTabs(0,content);
  //Hooks가 생기기전까지는 state를 함수형 컴포넌트에서 사용할 수 없었음(클래스형 컴포넌트에서만 가능)
//   const maxLen = (value) => value.length <= 10;
//   const name = useInput("Mr.", maxLen);
//   const [item, setItem] = useState(1);
//   const increment = () => setItem(item + 1);
//   const decrement = () => setItem(item - 1);
//   console.log("Hi")
  return (
    <div className="App">
      {/* <h2>Start editing to see some magic happen!</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      <input placeholder="Name" {...name} />  위 코드와 동일 */}
      
      {content.map((section,index)=><button onClick={()=>changeItem(index)}>{section.tab}</button>)}
      <div>{currentItem.content}</div>
      
      
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
