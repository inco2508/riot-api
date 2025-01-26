import { Lol } from "./lol/lol.js";
import { PlatformLocation, RegionalLocation } from "./location.js";
import { Request } from "./request.js";

export class Api {
    _lol: Lol

    constructor(
        token: string,
        platformLocation: PlatformLocation,
        regionalLocation: RegionalLocation
    ) {
        const request = new Request(token, platformLocation, regionalLocation)
        this._lol = new Lol(request)
    }

    get lol(): Lol {
        return this._lol
    }
}