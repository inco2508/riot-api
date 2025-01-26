import { Request } from "../request.js"
import { SummonerDTO } from "./dto/summoner.js"

export class Summoner {
    _request: Request

    constructor(request: Request) {
        this._request = request
    }

    byPuuid(puuid: string): Promise<SummonerDTO> {
        return this._request.do<SummonerDTO>(`${this._request._platformLocation.getUrl()}/lol/summoner/v4/summoners/by-puuid/${puuid}`)
    }
}   