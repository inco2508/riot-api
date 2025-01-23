import { PlatformLocation, RegionalLocation } from "./location"
import { Url } from "./routing"
import { Account, League, Summoner } from "./types"


export class Request {
    _platformLocation: PlatformLocation
    _regionalLocation: RegionalLocation

    constructor(
        platformLocation: PlatformLocation,
        regionalLocation: RegionalLocation
    ) {
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
                        "X-Riot-Token": process.env.RIOT_KEY
                    }
                }
            )

            if (req.status !== 200) {
                reject() 
            }

            const json: T = await req.json()

            resolve(json)
        })
    }

    account(
        tagName: string, 
        tagLine: string
    ): Promise<Account> {
        return this.do<Account>(new Url().account(this._regionalLocation, tagName, tagLine))
    }

    summoner(puuid: string): Promise<Summoner> {
        return this.do<Summoner>(new Url().summoner(this._platformLocation, puuid))
    }

    league(summonerId: string): Promise<League> {
        return this.do<League>(new Url().league(this._platformLocation, summonerId))
    }
}

