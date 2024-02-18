import { makeAutoObservable } from "mobx";

interface Station {
    id: Number;
    title: String;
    code: string;
}

interface AppState {
    stations: Station[];
}

function createAppStore(initialState: AppState) {
    return makeAutoObservable({
        state: initialState || {},

        get stationTitles(): String[] {
            return (this.state.stations || []).map((station: Station) => station.title);
        },
    });
}