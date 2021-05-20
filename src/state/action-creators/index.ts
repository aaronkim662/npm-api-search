import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async ( dispatch: Dispatch<Action> ) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });

      const names = data.objects.map( (result: any) => {
        return {
          name: result.package.name,
          description: result.package.description,
          link: result.package.links.npm
          // ,
          // score: {
          //   maintenance: result.score.detail.maintenance,
          //   popularity: result.score.detail.popularity,
          //   quality: result.score.detail.quality,
          //   searchScore: result.searchScore
          // }
        }
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.payload
      })
    }
  }
};