import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';
export const loadItems = createAction('[Item List] load Item');

export const loadedItems = createAction('[Item List] loaded Items', props<{items:ItemModel[]}>())