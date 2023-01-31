import React from 'react';
import Navbar from './Navbar';



function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);
  


  return (

    <div className="counter">
      <Navbar />
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    </div>



  );
}




export default Counter;

