// Definindo a classe Heroi
class Heroi {
    // Construtor da classe para criar objetos Heroi
    constructor(nome, idade, tipo) {
        this.nome = nome;   // Define a propriedade "nome" do objeto Heroi
        this.idade = idade; // Define a propriedade "idade" do objeto Heroi
        this.tipo = tipo;   // Define a propriedade "tipo" do objeto Heroi
    }

    // aqui vamos ver como realizar os ataques, vou usar estrutura de repetição.

    atacar(){
        let ataque; // é a variável para amazenar o tipo de ataque. 
        switch (this.tipo) { // a partir daqui vamos verificar o tipo de heroi.
            case "mago":
                ataque = "usou magia"; // Se for um mago, define o ataque como "usou magia"
                break;
            case "guerreiro":
                ataque = "usou espada"; // Se for um guerreiro, define o ataque como "usou espada"
                break;
            case "monge":
                ataque = "usou artes marciais"; // Se for um monge, define o ataque como "usou artes marciais"
                break;
                case "ninja":
                    ataque = "usou shuriken"; // Se for um ninja, define o ataque como "usou shuriken"
                    break;
                default:
                    ataque = "usou um ataque desconhecido"; // Se for outro tipo, define como "usou um ataque desconhecido"
                    break;
            }
    
            console.log(`O ${this.tipo} atacou usando ${ataque}`); // Exibe a mensagem de ataque no console
        }

        // Criando heróis usando a classe Heroi
const heroi1 = new Heroi("Jaélson", 33, "mago");
const heroi2 = new Heroi("Eli", 30, "guerreiro");
const heroi3 = new Heroi("Favo Jr", 40, "monge");
const heroi4 = new Heroi("Felipao da Dio", 28, "ninja");


// Realizando ataques chamando o método "atacar" para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();