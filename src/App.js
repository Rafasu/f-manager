import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Players from './Components/Players'
import SelectedTeam from './Components/SelectedTeam'
import './styles/styles.scss';


const App = () => (
  <Provider store={store}>
    <main>
      <h1>Football Manager</h1>
      <Players />
      <SelectedTeam />
      

    </main>

  </Provider>
)

export default App;
