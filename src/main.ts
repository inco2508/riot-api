import "dotenv/config"

import { RegionalRouting, PlatformRouting } from "./routing"

if (!process.env.RIOT_KEY) {
    console.log("RIOT api key not found")
}

type Summoner = {
    accountId: string,
    profileIconId: number,
    revisionDate: number,
    id: string,
    puuid: string,
    summonerLevel: number
}

type Account = {
    puuid: string,
    gameName: string,
    tagLine: string
}

type MiniSeriesDTO = {
  losses: number
  progress: string
  target: number
  wins: number
}

// Define the LeagueEntryDTO type
type League = {
  leagueId: string
  summonerId: string
  queueType: string
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
  hotStreak: boolean
  veteran: boolean
  freshBlood: boolean
  inactive: boolean
  miniSeries?: MiniSeriesDTO // Optional as it might not always exist
}
function accountRoute(
    gameName: string, 
    tagLine: string
): string {
    return `${new RegionalRouting().europe()}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
}

function summonerRoute(
    puuid: string
): string {
    return `${new PlatformRouting().euw1()}/lol/summoner/v4/summoners/by-puuid/${puuid}`
}

function leagueRoute(
    summonerId: string
): string {
    return `${new PlatformRouting().euw1()}/lol/league/v4/entries/by-summoner/${summonerId}`
}

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

function account(tagName: string, tagLine: string): Promise<Account> {
    return request<Account>(accountRoute(tagName, tagLine))
}

function summoner(puuid: string): Promise<Summoner> {
    return request<Summoner>(summonerRoute(puuid))
}

function league(summonerId: string): Promise<League> {
    return request<League>(leagueRoute(summonerId))
}

async function main() {
    const a = await account("fastmiaou", "2601")
    const s = await summoner(a.puuid)
    console.log(s)
    console.log(await league(s.id))
}

main()
