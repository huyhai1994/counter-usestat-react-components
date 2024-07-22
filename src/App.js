import './App.css';
import {useState} from 'react';

function App() {
    /* Code function useIncrement() that takes addAmount as a parameter, which is the unit of increase for each click
       Initialize state: const [count, setCount] = useState(0);
       Create a function to increment the count: function increment(), which takes addAmount as a parameter. Perform setCount
       Use the return statement [count, increment] to return values for Counter 1 and Counter 2 components
    */
    const useIncrement = (addAmount) => {
        const [count, setCount] = useState(0);
        const increment = () => setCount(count + addAmount);
        return [count, increment];
    }

    /* Create Counter 1 component
       Initialize const [count, setCount] = useIncrement(1);
       Create UI elements
         Handle button event and call setCount: onClick={increment}
    */
    const Counter1 = () => {
        const [count, increment] = useIncrement(1);
        return (<div>Count: {count} <br/>
                <button onClick={increment}>Increase</button>
            </div>

        );
    }
    const Counter2 = () => {
        const [count, increment] = useIncrement(2);
        return (<div>Count: {count} <br/>
                <button onClick={increment}>Increase</button>
            </div>

        );
    }
    return (<div>
        <Counter1/>
        <Counter2/>
    </div>);
}

export default App;