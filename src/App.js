import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const addCash = (cash1) => {
        dispatch({ type: 'ADD_CASH', payload: cash1 });
    };
    const getCash = (cash1) => {
        dispatch({ type: 'GET_CASH', payload: cash1 });
    };
    return (
        <div className='App'>
            <button onClick={() => addCash(Number(prompt()))}>ADD</button>
            <div>{cash}</div>
            <button onClick={() => getCash(Number(prompt()))}>REMOVE</button>
        </div>
    );
}

export default App;
