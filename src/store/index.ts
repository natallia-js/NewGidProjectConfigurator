import { makeAutoObservable } from 'mobx';
import { AppState, Station, TreeNode } from './types';

export function createAppStore(initialState: AppState) {
  return makeAutoObservable({
    state: initialState || {},

    get sideMenuItems(): TreeNode[] {
      return this.state.sideMenuItems;
    },

    addItem() {
      this.state.sideMenuItems.push({title: 'station 4', additionalInfo: {id: 4, title: 'station 4', code: '444444'}});
    },

    async fetchStations() {
      this.state.sideMenuItems = [
        {title: 'station 1', additionalInfo: {id: 1, title: 'station 1', code: '111111'}},
        {title: 'station 2', additionalInfo: {id: 2, title: 'station 2', code: '222222'}},
        {title: 'station 3', additionalInfo: {id: 3, title: 'station 3', code: '333333'}},
      ],
    },
  });
}
