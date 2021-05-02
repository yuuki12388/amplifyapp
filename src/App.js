import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <div><img src={logo} height="100" width="100" alt="react logo" /></div>
      <Menu></Menu>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

