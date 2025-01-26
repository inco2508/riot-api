export class Request {
    _token;
    _platformLocation;
    _regionalLocation;
    constructor(token, platformLocation, regionalLocation) {
        this._token = token;
        this._platformLocation = platformLocation;
        this._regionalLocation = regionalLocation;
    }
    do(url) {
        return new Promise(async (resolve, reject) => {
            const req = await fetch(url, {
                method: "GET",
                headers: {
                    "X-Riot-Token": this._token
                }
            });
            if (req.status !== 200) {
                reject(await req.text());
                return;
            }
            resolve(await req.json());
        });
    }
    get platformLocation() {
        return this._platformLocation;
    }
    get regionalLocation() {
        return this._regionalLocation;
    }
}
