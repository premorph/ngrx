import { stateModel } from "@core/models/state.interface";
import {ActionReducerMap} from '@ngrx/store'
import { itemReducer } from "./reducer/item.reducer";
export interface AppState{
    items: stateModel
}
export const ROOT_REDUCRES: ActionReducerMap<AppState>={
    items:itemReducer
}