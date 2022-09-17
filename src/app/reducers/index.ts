import { routerReducer } from '@ngrx/router-store';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface IAppState {

}

export const reducers: ActionReducerMap<IAppState> = {
    router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log('State Before', state);
        // console.log('Action', action);

        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<IAppState>[] =
    !environment.production ? [logger] : [];
