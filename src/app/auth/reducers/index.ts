import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { IUser } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface IAuthState {
  user: IUser

}

export const INITIAL_AUTH_STATE = {
  user: undefined
}

export const authReducer = createReducer(
  INITIAL_AUTH_STATE,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })
)
