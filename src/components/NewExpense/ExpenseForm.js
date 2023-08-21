import React from "react";
import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {

    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAmount, setEnteredAmount] = useState("");
    const[enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     //pulls out all k-v pairs and assigns them to obj, then override
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        //guaranteed the latest snapshot state
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     //pulls out all k-v pairs and assigns them to obj, then override
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     //pulls out all k-v pairs and assigns them to obj, then override
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        setEnteredDate(event.target.value);
    };

    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === 'title'){
    //         setEnteredTitle(value);
    //     } else if (identifier === 'date'){
    //         setEnteredDate(value);
    //     }else {
    //         setEnteredAmount(value)
    //     }
    // };

    const submitHandler = (event) => {
         event.preventDefault(); //prevent reloading on submit

         //create an object with desired data pointing at the state vars, which are updated on change to form, format Date
         const expenseData = {
             title: enteredTitle,
             amount: enteredAmount,
             date: new Date(enteredDate)
         };

         console.log(expenseData);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;