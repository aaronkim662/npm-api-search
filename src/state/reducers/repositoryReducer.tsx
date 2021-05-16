import { Action } from '../actions';
import { ActionType } from '../action-types'

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initalState = {
  loading: false,
  error: null,
  data: []
}

// additional check for return type
const reducer = (
  state: RepositoriesState = initalState,
  action: Action | any
  ):RepositoriesState => {
    // type guards
  // if (action.payload === '')
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }

    default:
      return state;
  }
};

export default reducer;