import { Request } from "../request"
import { MatchDto } from "./dto/match"

export class Match {
    _request: Request

    constructor(request: Request) {
        this._request = request
    }

    byPuuid(puuid: string): Promise<Array<string>> {
        return this._request.do<Array<string>>(`${this._request.regionalLocation.getUrl()}/lol/match/v5/matches/by-puuid/${puuid}/ids`)
    }

    byMatchId(matchId: string): Promise<MatchDto> {
        return this._request.do<MatchDto>(`${this._request.regionalLocation.getUrl()}/lol/match/v5/matches/${matchId}`)
    }
}