import { Request } from "../request"
import { AccountDTO } from "./dto/account"

export class Account {
    _request: Request
    
    constructor(request: Request) {
        this._request = request
    }

    byGameNameAndTagLine(
        gameName: string,
        tagLine: string
    ): Promise<AccountDTO> {
        return this._request.do<AccountDTO>(`${this._request.regionalLocation.getUrl()}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`) 
    }
}