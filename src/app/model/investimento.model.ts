import { Acao } from "./acao.model";
import { Compra } from "./compra.model";
import { Usuario } from "./usuario.model";

export class Investimento{

    private _id: number;
    
	private _acao: Acao;
    
	private _usuario: Usuario;

    private _quantidade: number;

    private _detCompra: Compra[];
    
    private _ultimoValorCompra: number;

    private _totalCompra: number;

    private _ultimaDataAtualizacao: Date;
   
    private _ultimaDataVenda: Date;
    
    private _ultimaDataCompra: Date;
    
    public get ultimaDataCompra(): Date {
        return this._ultimaDataCompra;
    }
    public set ultimaDataCompra(value: Date) {
        this._ultimaDataCompra = value;
    }

    public get ultimaDataVenda(): Date {
        return this._ultimaDataVenda;
    }
    public set ultimaDataVenda(value: Date) {
        this._ultimaDataVenda = value;
    }

    public get ultimaDataAtualizacao(): Date {
        return this._ultimaDataAtualizacao;
    }
    public set ultimaDataAtualizacao(value: Date) {
        this._ultimaDataAtualizacao = value;
    }

    public get detCompra(): Compra[] {
        return this._detCompra;
    }
    public set detCompra(value: Compra[]) {
        this._detCompra = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
	
    public get acao(): Acao {
        return this._acao;
    }
    public set acao(value: Acao) {
        this._acao = value;
    }
	
    public get usuario(): Usuario {
        return this._usuario;
    }
    public set usuario(value: Usuario) {
        this._usuario = value;
    }
	
    public get quantidade(): number {
        return this._quantidade;
    }
    public set quantidade(value: number) {
        this._quantidade = value;
    }
	
    public get ultimoValorCompra(): number {
        return this._ultimoValorCompra;
    }
    public set ultimoValorCompra(value: number) {
        this._ultimoValorCompra = value;
    }
	
    public get totalCompra(): number {
        return this._totalCompra;
    }
    public set totalCompra(value: number) {
        this._totalCompra = value;
    }

}