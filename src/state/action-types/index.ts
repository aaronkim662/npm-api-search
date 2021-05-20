export enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

// type SearchRates = {
//   maintenance: number;
//   popularity: number;
//   quality: number;
//   searchScore: number;
// }

export type SearchState = {
  name: string;
  description: string;
  link: string;
  // score: SearchRates;
}

// export type SelectType= {
//   values: string[];
//   setValues: () => void;

// }