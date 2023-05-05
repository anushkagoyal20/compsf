import {useState, useEffect} from 'react';

function useCounter(initialCount){
    const[count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };
    // increment function is being used to increase count on clicking
    // but to improve the PerformanceNavigationTiming, we have changed its name from handleClick to increament

    return{
        count, 
        increment
    };
};

export default useCounter;