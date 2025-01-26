export class Summoner {
    _request;
    constructor(request) {
        this._request = request;
    }
    byPuuid(puuid) {
        return this._request.do(`${this._request._platformLocation.getUrl()}/lol/summoner/v4/summoners/by-puuid/${puuid}`);
    }
}
