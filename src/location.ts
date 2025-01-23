abstract class Location {
    _region: string

    constructor(region: string) {
        this._region = region
    }

    getUrl(): string {
        return `https://${this._region}.api.riotgames.com`
    }
}


export abstract class PlatformLocation extends Location { }

export class Euw1 extends PlatformLocation {
    constructor() {
        super("euw1")
    }
}


export abstract class RegionalLocation extends Location { }

export class Europe extends RegionalLocation {
    constructor() {
        super("europe")
    }
}
