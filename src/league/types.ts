export type Summoner = {
    accountId: string,
    profileIconId: number,
    revisionDate: number,
    id: string,
    puuid: string,
    summonerLevel: number
}

export type Account = {
    puuid: string,
    gameName: string,
    tagLine: string
}

export type MiniSeries = {
    losses: number
    progress: string
    target: number
    wins: number
}

export type League = {
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
    miniSeries?: MiniSeries
}
