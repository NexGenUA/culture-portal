import { DEFAULT_ROUTER_FEATURENAME, RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface State {
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}
