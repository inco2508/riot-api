class Routing {
    baseUrl(region: string) {
        return `https://${region}.api.riotgames.com`
    }
}

export class PlatformRouting extends Routing {
    euw1(): string {
        return super.baseUrl("euw1")
    }
}

export class RegionalRouting extends Routing {
    europe(): string {
        return super.baseUrl("europe")
    }
}

export function accountRoute( gameName: string, 
    tagLine: string
): string {
    return `${new RegionalRouting().europe()}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
}

export function summonerRoute(
    puuid: string
): string {
    return `${new PlatformRouting().euw1()}/lol/summoner/v4/summoners/by-puuid/${puuid}`
}

export function leagueRoute(
    summonerId: string
): string {
    return `${new PlatformRouting().euw1()}/lol/league/v4/entries/by-summoner/${summonerId}`
}

