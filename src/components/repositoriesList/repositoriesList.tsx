import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import './repositoriesList.sass'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();

  const { data, error, loading} = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term)
  };
  return <div>
    <form onSubmit = {onSubmit}>
      <input id = 'search-repositories' value = {term} onChange = {e => setTerm(e.target.value)}/>
      <button id = 'search-button'>Search</button>
      {error && <h3 id = 'error-notification'>Network Error</h3>}
      {loading && <h3 id = 'loading-spinner'>Loading...</h3>}
      {!error && !loading &&
        data.map((name) =>
          <div key = {name}>{name}</div>
        )
      }
    </form>
  </div>
}

export default RepositoriesList;