export type MatchDto = {
  metadata: MetadataDto
  info: InfoDto
}

export type MetadataDto = {
  dataVersion: string
  matchId: string
  participants: string[]
}

export type InfoDto = {
  endOfGameResult: string
  gameCreation: number
  gameDuration: number
  gameEndTimestamp: number
  gameId: number
  gameMode: string
  gameName: string
  gameStartTimestamp: number
  gameType: string
  gameVersion: string
  mapId: number
  participants: ParticipantDto[]
  platformId: string
  queueId: number
  teams: TeamDto[]
  tournamentCode: string
}

export type ParticipantDto = {
  allInPings: number
  assistMePings: number
  assists: number
  baronKills: number
  bountyLevel: number
  champExperience: number
  champLevel: number
  championId: number
  championName: string
  commandPings: number
  championTransform: number
  consumablesPurchased: number
  challenges: ChallengesDto
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  eligibleForProgression: boolean
  enemyMissingPings: number
  enemyVisionPings: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  holdPings: number
  getBackPings: number
  goldEarned: number
  goldSpent: number
  individualPosition: string
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: string
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  missions: MissionsDto
  neutralMinionsKilled: number
  needVisionPings: number
  nexusKills: number
  nexusTakedowns: number
  nexusLost: number
  objectivesStolen: number
  objectivesStolenAssists: number
  onMyWayPings: number
  participantId: number
  pentaKills: number
  perks: PerksDto
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  placement: number
  playerAugment1: number
  playerAugment2: number
  playerAugment3: number
  playerAugment4: number
  playerSubteamId: number
  pushPings: number
  profileIcon: number
  puuid: string
  quadraKills: number
  riotIdGameName: string
  riotIdTagline: string
  role: string
  sightWardsBoughtInGame: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  subteamPlacement: number
  summoner1Casts: number
  summoner1Id: number
  summoner2Casts: number
  summoner2Id: number
  summonerId: string
  summonerLevel: number
  summonerName: string
  teamEarlySurrendered: boolean
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  timePlayed: number
  totalAllyJungleMinionsKilled: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalEnemyJungleMinionsKilled: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionScore: number
  visionClearedPings: number
  visionWardsBoughtInGame: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
}

export type ChallengesDto = {
  [key: string]: number | string | boolean | undefined
}

export type MissionsDto = {
  [key: string]: number | undefined
}

export type PerksDto = {
  statPerks: PerkStatsDto
  styles: PerkStyleDto[]
}

export type PerkStatsDto = {
  defense: number
  flex: number
  offense: number
}

export type PerkStyleDto = {
  description: string
  selections: PerkStyleSelectionDto[]
  style: number
}

export type PerkStyleSelectionDto = {
  perk: number
  var1: number
  var2: number
  var3: number
}

export type TeamDto = {
  bans: BanDto[]
  objectives: ObjectivesDto
  teamId: number
  win: boolean
}

export type BanDto = {
  championId: number
  pickTurn: number
}

export type ObjectivesDto = {
  baron: ObjectiveDto
  champion: ObjectiveDto
  dragon: ObjectiveDto
  horde: ObjectiveDto
  inhibitor: ObjectiveDto
  riftHerald: ObjectiveDto
  tower: ObjectiveDto
}

export type ObjectiveDto = {
  first: boolean
  kills: number
}
