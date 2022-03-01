import { Wine } from "./wine.model";

export class WineSearchResult {
    count: number;
    results: Wine[] = [];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        if (obj.results) {
            for (let itElem of obj.results) {
                this.results.push(new Wine(itElem));
            }
        }
    }
}
