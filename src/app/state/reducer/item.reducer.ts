import { createReducer, on } from '@ngrx/store';
import { loadItems } from '../actions/item.actions';
import { stateModel } from '@core/models/state.interface';
export const initialState: stateModel= { loading: false, items: [] };
export const itemReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  })
);
