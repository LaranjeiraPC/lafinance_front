export class Compra{

    private _id: number;
   
	private _quantidade: number;
    
	private _valorCompra: number;
    
	private _totalCompra: number;
    
	private _dataCompra: Date;
    
	private _indicadorAtivo: string;

    public get indicadorAtivo(): string {
        return this._indicadorAtivo;
    }
    public set indicadorAtivo(value: string) {
        this._indicadorAtivo = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
	
    public get quantidade(): number {
        return this._quantidade;
    }
    public set quantidade(value: number) {
        this._quantidade = value;
    }
	
    public get valorCompra(): number {
        return this._valorCompra;
    }
    public set valorCompra(value: number) {
        this._valorCompra = value;
    }
	
    public get totalCompra(): number {
        return this._totalCompra;
    }
    public set totalCompra(value: number) {
        this._totalCompra = value;
    }
	
    public get dataCompra(): Date {
        return this._dataCompra;
    }
    public set dataCompra(value: Date) {
        this._dataCompra = value;
    }

}