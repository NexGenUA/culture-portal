import { DEFAULT_ROUTER_FEATURENAME, getSelectors, RouterReducerState } from '@ngrx/router-store';
import { paths } from '../../constants/constants';
import { RouterStateUrl } from '../store.models';

export interface State {
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState<RouterStateUrl>;
}

export const selectRouter = (state: State) => state.router;

export const { selectUrl, selectRouteParam } = getSelectors(selectRouter);

export const selectWriterId = selectRouteParam(paths.WRITER_ID);
