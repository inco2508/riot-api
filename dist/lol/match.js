export class Match {
    _request;
    constructor(request) {
        this._request = request;
    }
    byPuuid(puuid) {
        return this._request.do(`${this._request.regionalLocation.getUrl()}/lol/match/v5/matches/by-puuid/${puuid}/ids`);
    }
    byMatchId(matchId) {
        return this._request.do(`${this._request.regionalLocation.getUrl()}/lol/match/v5/matches/${matchId}`);
    }
}
