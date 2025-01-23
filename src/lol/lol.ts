import { Request } from "../request";
import { Match } from "./match";
import { Summoner } from "./summoner";
import { Account } from "./account";
import { League } from "./league";

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