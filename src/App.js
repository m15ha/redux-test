import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './store/asyncActions/customers';

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
        const customer1 = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer1));
    };

    const removeCustomer = (customer2) => {
        dispatch(removeCustomerAction(customer2.id));
    };

    return (
        <div className='App'>
            <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
            <button onClick={() => getCash(Number(prompt()))}>
                REMOVE CASH
            </button>
            <div>{cash}</div>
            <button onClick={() => getCustomer(prompt())}>ADD CUSTOMER</button>
            <button onClick={() => dispatch(fetchCustomers())}>ADD CUSTOMERS</button>
            {customer.length > 0 ? (
                <div>
                    {customer.map((el) => (
                        <div onClick={() => removeCustomer(el)} key={el.id}>{el.name}</div>
                        
                    ))}
                </div>
            ) : (
                <div>Out of customers :-)</div>
            )}
        </div>
    );
}

export default App;
