import { Request } from "../request.js";
import { Match } from "./match.js";
import { Summoner } from "./summoner.js";
import { Account } from "./account.js";
import { League } from "./league.js";

export class Lol {
    _request: Request

    _account: Account
    _league: League
    _match: Match
    _summoner: Summoner

    constructor(request: Request) {
        this._request = request

        this._account = new Account(request)
        this._league = new League(request)
        this._match = new Match(request)
        this._summoner = new Summoner(request)
    }


    get account(): Account {
        return this._account
    }

    get league(): League {
        return this._league
    }

    get match(): Match {
        return this._match
    }

    get summoner(): Summoner {
        return this._summoner
    }
}