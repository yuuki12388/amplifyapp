import './Expense.css';
import { listExpenses, listExpenseTypes } from './graphql/queries';
import { createExpense as createExpenseMutation, deleteExpense as deleteExpenseMutation } from './graphql/mutations'
import { useEffect, useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

const intitialFormState = { name: '', description: '', expenseType:'' }

function Expense() {

    const [expenses, setExpenses] = useState([]);
    const [expenseTypes, setExpenseTypes] = useState([]);
    const [formData, setFormData] = useState(intitialFormState);

    useEffect(() => {
        fetchExpenses();
    }, []);

    async function fetchExpenses() {
        //const apiData = await API.graphql({ queries: listNotes });
        const apiData = await API.graphql(graphqlOperation(listExpenses));
        setExpenses(apiData.data.listExpenses.items);

        const apiDataExpenseTypes = await API.graphql(graphqlOperation(listExpenseTypes));        
        setExpenseTypes(apiDataExpenseTypes.data.listExpenseTypes.items);
    }

    async function createExpense() {
        if (!formData.name || !formData.description || !formData.expenseType) return;

        await API.graphql({ query: createExpenseMutation, variables: { input: formData } });
        setExpenses([...expenses, formData]);
        setFormData(intitialFormState);
    }

    async function deleteExpense({ id }) {
        const newExpenseTypesArray = expenses.filter(expense => expense.id !== id);
        setExpenses(newExpenseTypesArray);
        await API.graphql({ query: deleteExpenseMutation, variables: { input: { id } } });
    }

    return (
        <div>
            <h1>Expenses</h1>
            <input
                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Name"
                value={formData.name}
            />
            <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                placeholder="Description"
                value={formData.description}
            />
            <select onChange={e => setFormData({ ...formData, 'expenseType': e.target.value })}>
                    <option>Select Expense Type</option>
                    { 
                        expenseTypes.map(expenseType => (
                            <option key={expenseType.id} value={expenseType.id}>{expenseType.name}</option>
                        ))
                    } 
                </select>
            <button onClick={createExpense}>Create Expense</button>
            <div style={{ marginBottom: 30 }}>
                {
                    expenses.map(expense => (
                        <div key={expense.id || expense.name}>
                            <h2>{expense.name}</h2>
                            <p>{expense.description}</p>
                            <button onClick={() => deleteExpense(expense)}>Delete Expense</button>
                        </div>
                    ))
                }                
            </div>
        </div>
    );
}

export default Expense;