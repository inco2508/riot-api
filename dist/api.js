import { Lol } from "./lol/lol.js";
import { Request } from "./request.js";
export class Api {
    _lol;
    constructor(token, platformLocation, regionalLocation) {
        const request = new Request(token, platformLocation, regionalLocation);
        this._lol = new Lol(request);
    }
    get lol() {
        return this._lol;
    }
}
