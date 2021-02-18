export class Usuario{

    private _id: number = 0;
	private _usuario: string = "";
    private _autenticado: boolean = false;
    private _status: string = "";
    private _message: string = "";
    private _permissao: string = "";

    public get permissao(): string {
        return this._permissao;
    }
    public set permissao(value: string) {
        this._permissao = value;
    }
    
    public get autenticado(): boolean {
        return this._autenticado;
    }
    public set autenticado(value: boolean) {
        this._autenticado = value;
    }

    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
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