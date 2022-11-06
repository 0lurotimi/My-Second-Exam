import {useState} from "react";


function useCounter( initialCount = 0, value) {
    const [count, setCount] = useState(initialCount);
    const increment = () => {
      setCount(count + value);
    };
    const decrement = () => {
      setCount(count - value);
    };
    const reset = () => {
      setCount(0);
    };
    const setValue = () => {
      // setCount(count++);
    };
    return [count, increment, decrement, reset]
}



export default useCounter