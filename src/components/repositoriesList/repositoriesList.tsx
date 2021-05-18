import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import './repositoriesList.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CellComponents from "../cellComponent/cellComponent";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();

  const { data, error, loading} = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term)
  };

  return <div>
    <form id = 'search-repositories-form' onSubmit = {onSubmit}>
      <div id = 'search-repositories-box'>
        <div id = 'search-repositories-input-container'>
          <FontAwesomeIcon className = 'input-icon' icon = {faSearch}/>
          <input id = 'search-repositories-input' className = 'form-element' placeholder = 'Search' value = {term} onChange = {e => setTerm(e.target.value)}/>
        </div>
        <button id = 'search-repositories-button' className = 'form-element'>Search</button>
      </div>
      {error && <h3 id = 'error-notification'>Network Error</h3>}
      {loading && <h3 id = 'loading-spinner'>Loading...</h3>}
      {!error && !loading &&
        data.map((repo, index) =>
          <div key = {term + '_' + index}>
            <CellComponents name = {repo.name} description = {repo.description} link = {repo.link}/>
          </div>
        )
      }
    </form>
  </div>
}

export default RepositoriesList;