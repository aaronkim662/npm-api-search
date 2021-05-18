import { SearchState } from '../../state/action-types';
import './cellComponent.sass';

const CellComponents: React.FC<SearchState> = (props) => {
  return (
    <div className = 'search-cell'>
      <div className = 'search-cell-name'>Name: {props.name}</div>
      <div className = 'search-cell-description'>Description: {props.description}</div>
      <div className = 'search-cell-link'>Link: {props.link}</div>
    </div>
  )
}

export default CellComponents;