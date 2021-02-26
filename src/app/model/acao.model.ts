export class Acao{

    private _id: number = 0;
	private _nomeAcao: string = "";
    private _ativoAcao: string = "";
    private _usuario: string = "";

    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }

    public get ativoAcao(): string {
        return this._ativoAcao;
    }
    public set ativoAcao(value: string) {
        this._ativoAcao = value;
    }
    
    public get nomeAcao(): string {
        return this._nomeAcao;
    }
    public set nomeAcao(value: string) {
        this._nomeAcao = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}