import { Match } from "./match.js";
import { Summoner } from "./summoner.js";
import { Account } from "./account.js";
import { League } from "./league.js";
export class Lol {
    _request;
    _account;
    _league;
    _match;
    _summoner;
    constructor(request) {
        this._request = request;
        this._account = new Account(request);
        this._league = new League(request);
        this._match = new Match(request);
        this._summoner = new Summoner(request);
    }
    get account() {
        return this._account;
    }
    get league() {
        return this._league;
    }
    get match() {
        return this._match;
    }
    get summoner() {
        return this._summoner;
    }
}
