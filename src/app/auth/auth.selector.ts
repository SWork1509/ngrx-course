import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from './reducers';

export const selectAuthState = createFeatureSelector<IAuthState>("auth");

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    isLoggedIn => !isLoggedIn
)