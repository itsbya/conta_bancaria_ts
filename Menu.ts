
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input"




function mostrarMenu(): void {
    
    console.log("*****************************************************");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("*****************************************************");
    console.log("1 - Criar Conta                                      ");
    console.log("2 - Listar todas as Contas                           ");
    console.log("3 - Buscar Conta por Número                          ");
    console.log("4 - Atualizar Dados da Conta                         ");
    console.log("5 - Apagar Conta                                     ");
    console.log("6 - Sacar                                            ");
    console.log("7 - Depositar                                        ");
    console.log("8 - Transferir                                       ");
    console.log("9 - Sair                                             ");
    console.log("*****************************************************");
}


function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ana Beatriz");
    console.log("Generation Brasil");
    console.log("github.com/itsbya");
    console.log("*****************************************************");
}



function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}


export function main(): void {

    let opcao: number;


   // Testes da classe ContaCorrente
    const cc1 = new ContaCorrente(2, 5678, "Bianca", 1, 200000.00, 2000.00);

    cc1.visualizar();

    // Teste do Método sacar - conta corrente
    console.log('Sacar R$1000.00', cc1.sacar(1000.00));
    console.log('Sacar R$200000.00', cc1.sacar(200000.00));
    console.log('Sacar R$2.00', cc1.sacar(2.00));


    // Teste depositar
    console.log('Depositar R$500.00', cc1.depositar(500.00));

    cc1.visualizar();
   

    // Testes Conta Poupança
    const cp1 = new ContaPoupanca(2, 3000, 'Ana Beatriz', 2, 2000.00, '05/02/2026');

    cp1.visualizar();

    

    while (true) {

        console.log(Colors.bg.black, Colors.fg.yellow);
        mostrarMenu();
        console.log(Colors.reset);

        console.log("Digite uma opção: ");
        opcao = Input.questionInt("");

        if (opcao === 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            break;
        }


        switch (opcao) {

            case 1:
                console.log("\nCriar Conta\n");

                keyPress()
                break;

            case 2:
                console.log("\nListar todas as Contas\n");

                keyPress()
                break;

            case 3:
                console.log("\nBuscar Conta por Número\n");

                keyPress()
                break;

            case 4:
                console.log("\nAtualizar Dados da Conta\n");

                keyPress()
                break;

            case 5:
                console.log("\nApagar Conta\n");

                keyPress()
                break;

            case 6:
                console.log("\nSacar\n");

                keyPress()
                break;

            case 7:
                console.log("\nDepositar\n");

                keyPress()
                break;

            case 8:
                console.log("\nTransferir\n");

                keyPress()
                break;

            default:
                console.log("\nOpção inválida!\n");
        }

        console.log("\nPressione ENTER para continuar...");
        Input.prompt();
    }
}


main();
