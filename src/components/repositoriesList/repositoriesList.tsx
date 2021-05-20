import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import './repositoriesList.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CellComponents from "../cellComponent/cellComponent";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const [filter, setFilter] = useState('Filter By');

  const { searchRepositories } = useActions();

  let { data, error, loading} = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const filterRepos = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filtered = event.target.value
    setFilter(filtered)
    // console.log('here', event.target.value, filter)
    if (filtered === 'A-Z') {
      data = data.sort((a, b) => (a.name > b.name ? 1: -1));
    }else if(filtered === 'Z-A') {
      data = data.sort((a, b) => (a.name > b.name ? -1: 1));
    }
  }

  return <div>
    <form id = 'search-repositories-form' onSubmit = {onSubmit}>
      <div id = 'search-repositories-box'>
        <div id = 'search-repositories-input-container'>
          <FontAwesomeIcon className = 'input-icon' icon = {faSearch}/>
          <input id = 'search-repositories-input' className = 'form-element' placeholder = 'Search' value = {term} onChange = {e => setTerm(e.target.value)}/>
        </div>
        <button id = 'search-repositories-button' className = 'form-element'>Search</button>
        <select value = {filter} placeholder = 'Sort By' onChange = {filterRepos} id = 'repositories-filter-button'>
          <option value = ''>Filter By</option>
          <option value = 'A-Z'>A-Z</option>
          <option value = 'Z-A'>Z-A</option>
        </select>
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