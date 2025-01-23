import { League } from "./league/league";
import { PlatformLocation, RegionalLocation } from "./location";
import { Request } from "./request";

export class Api {
    _league: League
    
    constructor(
        token: string,
        platformLocation: PlatformLocation,
        regionalLocation: RegionalLocation
    ) {
        const request = new Request(token, platformLocation, regionalLocation)
        this._league = new League(request)
    }

    get league(): League {
        return this._league
    }
}