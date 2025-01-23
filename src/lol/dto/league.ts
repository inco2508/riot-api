export type MiniSeriesDTO = {
    losses: number
    progress: string
    target: number
    wins: number
}

export type LeagueDTO = {
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
    miniSeries?: MiniSeriesDTO
}
