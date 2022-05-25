import { BrowerRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
//import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';

function App() {
  // toast.success('Hello world!')
  const [count, setCount] = useState(0);
  const [abc, setAbc] = useState('Helloworld!');
  
  const countUp = () => {
    setCount(prev => {
      return prev+1
    });
    setAbc('Hellow');
  }

  useEffect(() => {
    toast.success(count);
  }, [count, abc]);

  return (
    <BrowerRouter>
      <Router />
    </BrowerRouter>
  );
}

export default App;