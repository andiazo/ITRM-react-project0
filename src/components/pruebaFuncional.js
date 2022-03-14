import React, {useState, useEffect} from "react";


function usePrueba(isLogged) {
    const [isOnline, setIsOnline] = useState(isLogged)

    useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status);
        }
    
        handleStatusChange(isLogged)
        return () => {
            handleStatusChange(!isLogged)
        };
      });

    const color = isOnline ? 'green' : 'red'
    const style = {
        backgroundColor: color,
    };
    return (
        <div style={style}>
            { isOnline ? 'Online': 'Offline'}
        </div> 
    )
}

function usePrueba2(c) {
    const [changeColor, setChangeColor] = useState('red')

    useEffect(() => {
        function handleStatusChange(c) {
            setChangeColor(c);
        }
    
        handleStatusChange(c)
        return () => {
            handleStatusChange('')
        };
      });

    return changeColor
}

const PruebaFuncional = () => {
    
    const [count, setCount] = useState(0);
    const [isLogged, setIsLogged] = useState(true)

    const incrementCount = () => {
        setCount(count+1)    
    }
    
    const decrementCount = () => {
        setCount(count-1)
    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    }, [count])

    useEffect(()=>{
        let log = isLogged? 'Logged': 'Log in'
        document.title = `You clicked ${count} times | ${log}`;
    }, [isLogged])

    useEffect(()=>{
        console.log('Se usó')
    })

    const logged = () => {
        setIsLogged(!isLogged)
    }


    const [bColor, setBColor] = useState('red')
    
    const handleColor = (c) => {
        // setBColor(c)
    }
    
    const isOnline = usePrueba(isLogged);
    const colr = usePrueba2(bColor);

    return (
        <div>
            Estado 
            {/* {isOnline} */}
            {/* <button onClick={incrementCount}>Aumentar {count}</button>
            <button onClick={logged}>{isLogged ? 'Logged': 'Log in'}</button>
            <button onClick={handleColor('blue')} style={{color: 'blue'}}>Blue</button> */}
            <button onClick={handleColor('green')} style={{color: 'green'}}>Green</button>
        </div>
    )
}

export default PruebaFuncional