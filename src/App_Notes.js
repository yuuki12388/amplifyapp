import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations'
import { useEffect, useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

const intitialFormState = { name: '', description: '' }
function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(intitialFormState);

  useEffect(() => {
    fetchNotes();   
  }, []);

  async function fetchNotes() {
    //const apiData = await API.graphql({ queries: listNotes });
    const apiData = await API.graphql(graphqlOperation(listNotes));
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote(){
    if(!formData.name||!formData.description) return;

    await API.graphql({query: createNoteMutation, variables: {input:formData}});
    setNotes([...notes, formData]);
    setFormData(intitialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <div><img src={logo} height="100" width="100" alt="react logo"/></div>
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

