import leia from "readline-sync";
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/Conta";

leia.setDefaultOptions({ encoding: "utf8" });


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


export function main(): void {

    let opcao: number;

    // Instaciar Objetos da Classe Conta

    const c1 = new Conta(1, 1234, 'Bia', 1, 200000.00);

    
    c1.visualizar();

    // Testes do Método Sacar
    console.log("Sacar 100,00: ", c1.sacar(100.00));
    console.log("Sacar 200000.00: ", c1.sacar(200000.00));
    console.log("Sacar 0.00: ", c1.sacar(0.00));

    // Testes do Método Depositar
    console.log("Depositar -10.00: ");
    c1.depositar(-10.00);

    console.log("Depositar 500.00: ");
    c1.depositar(500.00);

    c1.visualizar();

    // console.log("O Titular da Conta é: ", c1.titular);
    // console.log("O Saldo da Conta é: ", c1.saldo);

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow);
        mostrarMenu();
        console.log(colors.reset);

        process.stdout.write("Digite uma opção: ");
        opcao = leia.questionInt("");

        if (opcao === 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            break;
        }

        switch (opcao) {

            case 1:
                console.log("\nCriar Conta\n");
                break;

            case 2:
                console.log("\nListar todas as Contas\n");
                break;

            case 3:
                console.log("\nBuscar Conta por Número\n");
                break;

            case 4:
                console.log("\nAtualizar Dados da Conta\n");
                break;

            case 5:
                console.log("\nApagar Conta\n");
                break;

            case 6:
                console.log("\nSacar\n");
                break;

            case 7:
                console.log("\nDepositar\n");
                break;

            case 8:
                console.log("\nTransferir\n");
                break;

            default:
                console.log("\nOpção inválida!\n");
        }

        console.log("\nPressione ENTER para continuar...");
        leia.prompt();
    }
}


main();
