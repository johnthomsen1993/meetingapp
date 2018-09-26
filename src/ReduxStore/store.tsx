import {  createStore } from 'redux';
import { MeetingActions } from './Actions/simpleAction';
import { reducer } from './Reducers/simpleReducer';
import { IMetingStoreState } from './types/meeting';

export default function configureStore() {
 return createStore<IMetingStoreState,MeetingActions,any,any>(
  reducer,{
      date:new Date(),
      topic:'',
  }
 );
}