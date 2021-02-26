export class Usuario{

    private _id: number = 0;
	private _nomeUsuario: string = "";
    private _autenticado: boolean = false;
    private _status: string = "";
    private _message: string = "";
    private _perfilUsuario: string = "";
    private _emailUsuario: string = "";
    private _ativolUsuario: string = "";
    
    public get ativolUsuario(): string {
        return this._ativolUsuario;
    }
    public set ativolUsuario(value: string) {
        this._ativolUsuario = value;
    }
    
    public get emailUsuario(): string {
        return this._emailUsuario;
    }
    public set emailUsuario(value: string) {
        this._emailUsuario = value;
    }

    public get perfilUsuario(): string {
        return this._perfilUsuario;
    }
    public set perfilUsuario(value: string) {
        this._perfilUsuario = value;
    }
    
    public get autenticado(): boolean {
        return this._autenticado;
    }
    public set autenticado(value: boolean) {
        this._autenticado = value;
    }

    public get nomeUsuario(): string {
        return this._nomeUsuario;
    }
    public set nomeUsuario(value: string) {
        this._nomeUsuario = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

}