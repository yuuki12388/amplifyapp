import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {  listTopics } from './graphql/queries';
import { createTopic as createTopicMutation, deleteTopic as deleteTopicMutation } from './graphql/mutations'
import { useEffect, useState } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';

const intitialFormState = { title: '', description: '' }
function App() {
  const [topics, setTopics] = useState([]);
  const [formData, setFormData] = useState(intitialFormState);

  useEffect(() => {
    fetchTopics();   
  }, []);

  async function fetchTopics() {
    //const apiData = await API.graphql({ queries: listNotes });
    const apiData = await API.graphql(graphqlOperation(listTopics));
    setTopics(apiData.data.listTopics.items);
  }

  async function createTopic(){
    if(!formData.title||!formData.description) return;

    await API.graphql({query: createTopicMutation, variables: {input:formData}});
    setTopics([...topics, formData]);
    setFormData(intitialFormState);
  }

  async function deleteTopic({ id }) {
    const newTopicsArray = topics.filter(topic => topic.id !== id);
    setTopics(newTopicsArray);
    await API.graphql({ query: deleteTopicMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <div><img src={logo} height="100" width="100" alt="react logo"/></div>
      <h1>Topics</h1>
      <input
        onChange={e => setFormData({ ...formData, 'title': e.target.value})}
        placeholder="Topic Title"
        value={formData.title}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Topic description"
        value={formData.description}
      />
      <button onClick={createTopic}>Create Topic</button>
      <div style={{marginBottom: 30}}>
        {
          topics.map(topic => (
            <div key={topic.id || topic.title}>
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
              <button onClick={() => deleteTopic(topic)}>Delete Topic</button>              
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

