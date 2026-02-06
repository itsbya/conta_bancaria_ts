import { Conta } from "./Conta";


export class ContaPoupanca extends Conta {

    private _aniversarioConta: string;


	constructor(
        numero: number, 
        agencia: number, 
        titular: string, 
        tipo: number, 
        saldo: number,
        aniversarioConta: string) {
            super(numero, agencia, titular, tipo, saldo);
            this._aniversarioConta = aniversarioConta;
	}



   // Métodos GET e SET específicos de Conta Poupança
	public get aniversarioConta(): string {
		return this._aniversarioConta;
	}

    
	public set aniversarioConta(value: string) {
		this._aniversarioConta = value;
	}


    // Métodos auxiliares 
    public visualizar(): void{
        super.visualizar();
        console.log(`Data de aniversário da conta: R$ ${this._aniversarioConta}`);
    }




}