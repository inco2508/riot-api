import { PlatformLocation, RegionalLocation } from "./location"


export class Request {
    _token: string
    _platformLocation: PlatformLocation
    _regionalLocation: RegionalLocation

    constructor(
        token: string,
        platformLocation: PlatformLocation,
        regionalLocation: RegionalLocation
    ) {
        this._token = token
        this._platformLocation = platformLocation
        this._regionalLocation = regionalLocation
    }

    do<T>(url: string): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            const req = await fetch(
                url, 
                {
                    method: "GET",
                    headers: {
                        "X-Riot-Token": this._token 
                    }
                }
            )

            if (req.status !== 200) {
                // TODO: return something to handle the error
                reject() 
            }

            const json: T = await req.json()

            resolve(json)
        })
    }

    get platformLocation(): PlatformLocation {
        return this._platformLocation
    }


    get regionalLocation(): RegionalLocation{
        return this._regionalLocation
    }
}
