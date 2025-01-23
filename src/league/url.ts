import { PlatformLocation, RegionalLocation } from "../location"

export class LeagueUrl {
    account( 
        route: RegionalLocation,
        gameName: string, 
        tagLine: string
    ): string {
        return `${route.getUrl()}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
    }

    summoner(
        route: PlatformLocation,
        puuid: string
    ): string {
        return `${route.getUrl()}/lol/summoner/v4/summoners/by-puuid/${puuid}`
    }

    league(
        route: PlatformLocation,
        summonerId: string
    ): string {
        return `${route.getUrl()}/lol/league/v4/entries/by-summoner/${summonerId}`
    }
}
