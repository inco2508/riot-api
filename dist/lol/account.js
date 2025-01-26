export class Account {
    _request;
    constructor(request) {
        this._request = request;
    }
    byGameNameAndTagLine(gameName, tagLine) {
        return this._request.do(`${this._request.regionalLocation.getUrl()}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
    }
}
