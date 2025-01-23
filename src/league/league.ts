import { Request } from "../request";
import { LeagueUrl } from "./url";
import { Account, Summoner } from "./types";

export class League {
    _request: Request

    constructor(request: Request) {
        this._request = request
    }

    account(
        tagName: string, 
        tagLine: string
    ): Promise<Account> {
        return this._request.do<Account>(new LeagueUrl().account(this._request.regionalLocation, tagName, tagLine))
    }

    summoner(puuid: string): Promise<Summoner> {
        return this._request.do<Summoner>(new LeagueUrl().summoner(this._request.platformLocation, puuid))
    }

    league(summonerId: string): Promise<League> {
        return this._request.do<League>(new LeagueUrl().league(this._request.platformLocation, summonerId))
    }
}