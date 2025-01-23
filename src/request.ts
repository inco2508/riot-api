import { accountRoute, leagueRoute, summonerRoute } from "./routing"
import { Account, League, Summoner } from "./types"

function request<T>(url: string): Promise<T> {
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


export function account(tagName: string, tagLine: string): Promise<Account> {
    return request<Account>(accountRoute(tagName, tagLine))
}

export function summoner(puuid: string): Promise<Summoner> {
    return request<Summoner>(summonerRoute(puuid))
}

export function league(summonerId: string): Promise<League> {
    return request<League>(leagueRoute(summonerId))
}
