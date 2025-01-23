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


