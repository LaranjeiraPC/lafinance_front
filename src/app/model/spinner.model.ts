export class Spinner{

    private _message: string = ""; 
    private _status: string = ""; 
    private _refresh: boolean = false;
    
    public get refresh(): boolean {
        return this._refresh;
    }
    public set refresh(value: boolean) {
        this._refresh = value;
    }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    
}