import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from '../store.models';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';

export const reducers: ActionReducerMap<State> = {
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
