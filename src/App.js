import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {  listExpenseTypes } from './graphql/queries';
import { createExpenseType as createExpenseTypeMutation, deleteExpenseType as deleteExpenseTypeMutation } from './graphql/mutations'
import { useEffect, useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

const intitialFormState = { name: '', description: '' }
function App() {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [formData, setFormData] = useState(intitialFormState);

  useEffect(() => {
    fetchExpenseTypes();   
  }, []);

  async function fetchExpenseTypes() {
    //const apiData = await API.graphql({ queries: listNotes });
    const apiData = await API.graphql(graphqlOperation(listExpenseTypes));
    setExpenseTypes(apiData.data.listExpenseTypes.items);
  }

  async function createExpenseType(){
    if(!formData.name||!formData.description) return;

    await API.graphql({query: createExpenseTypeMutation, variables: {input:formData}});
    setExpenseTypes([...expenseTypes, formData]);
    setFormData(intitialFormState);
  }

  async function deleteExpenseType({ id }) {
    const newExpenseTypesArray = expenseTypes.filter(expenseType => expenseType.id !== id);
    setExpenseTypes(newExpenseTypesArray);
    await API.graphql({ query: deleteExpenseTypeMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <div><img src={logo} height="100" width="100" alt="react logo"/></div>
      <h1>Expense Types</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Description"
        value={formData.description}
      />
      <button onClick={createExpenseType}>Create Expense Type</button>
      <div style={{marginBottom: 30}}>
        {
          expenseTypes.map(expenseType => (
            <div key={expenseType.id || expenseType.name}>
              <h2>{expenseType.name}</h2>
              <p>{expenseType.description}</p>
              <button onClick={() => deleteExpenseType(expenseType)}>Delete Expense Type</button>              
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

