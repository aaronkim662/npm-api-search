import { Provider } from 'react-redux';
import { store } from '../../state';
import RepositoriesList from '../repositoriesList/repositoriesList';
import './app.sass';

const App = () => {
  return <Provider store = {store} >
    <div id = 'app-container'>
      <h1 id ='repository-title'>Search For a Package</h1>
      <RepositoriesList />
    </div>
  </Provider>
}

export default App;