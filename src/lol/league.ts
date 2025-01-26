import { Request } from "../request.js"
import { LeagueDTO } from "./dto/league.js"

export class League {
    _request: Request

    constructor(request: Request) {
        this._request = request
    }

    bySummonerId(summonerId: string): Promise<LeagueDTO> {
        return this._request.do<LeagueDTO>(`${this._request._platformLocation.getUrl()}/lol/league/v4/entries/by-summoner/${summonerId}`)
    }
}