import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData); //lifting the state up to the app component, sending data through components
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    );
};

export default NewExpense;