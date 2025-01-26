class Location {
    _region;
    constructor(region) {
        this._region = region;
    }
    getUrl() {
        return `https://${this._region}.api.riotgames.com`;
    }
}
export class PlatformLocation extends Location {
}
export class Euw1 extends PlatformLocation {
    constructor() {
        super("euw1");
    }
}
export class RegionalLocation extends Location {
}
export class Europe extends RegionalLocation {
    constructor() {
        super("europe");
    }
}
