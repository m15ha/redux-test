import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.customer.customer);
    const cash = useSelector((state) => state.cash.cash);
    const addCash = (cash1) => {
        dispatch({ type: 'ADD_CASH', payload: cash1 });
    };
    const getCash = (cash1) => {
        dispatch({ type: 'GET_CASH', payload: cash1 });
    };

    const getCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch({ type: 'GET_CUSTOMER', payload: customer });
    };

    const removeCustomer = (customer1) => {
        dispatch({ type: 'GET_CUSTOMER', payload: customer1 });
    };

    return (
        <div className='App'>
            <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
            <button onClick={() => getCash(Number(prompt()))}>
                REMOVE CASH
            </button>
            <div>{cash}</div>
            <button onClick={() => getCustomer(prompt())}>ADD CUSTOMER</button>
            <button onClick={() => removeCustomer(prompt())}>
                REMOVE CUSTOMER
            </button>
            {customer.length > 0 ? (
                <div>customer</div>
            ) : (
                <div>Out of customers :-)</div>
            )}
        </div>
    );
}

export default App;
