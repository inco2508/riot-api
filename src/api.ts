import { Lol } from "./lol/lol";
import { PlatformLocation, RegionalLocation } from "./location";
import { Request } from "./request";

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