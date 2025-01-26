export class League {
    _request;
    constructor(request) {
        this._request = request;
    }
    bySummonerId(summonerId) {
        return this._request.do(`${this._request._platformLocation.getUrl()}/lol/league/v4/entries/by-summoner/${summonerId}`);
    }
}
