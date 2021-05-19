import { SearchState } from '../../state/action-types';
import './cellComponent.sass';

const CellComponents: React.FC<SearchState> = (props) => {
  return (
    <div className = 'search-cell'>
      <div id = 'search-cell-name' className = 'search-block'>{props.name}</div>
      <div id = 'search-cell-description' className = 'search-block'>{props.description}</div>
      <div onClick = {() => window.open(props.link, '_blank')} id = 'search-cell-link' className = 'search-block'>{props.name}</div>
    </div>
  )
}

export default CellComponents;