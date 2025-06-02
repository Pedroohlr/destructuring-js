// ================================================================
// Exemplo completo de Destructuring em JavaScript
// ================================================================

// ------------------------------------------------
// 1. Destructuring de Array
// ------------------------------------------------

// Criamos um array de números para demonstrar:
const numeros = [10, 20, 30, 40];

// 1.1 Atribuição direta por posição:
// "quebra" o array em variáveis correspondentes a cada índice:
const [primeiro, segundo, terceiro, quarto] = numeros;
console.log("Array Destructuring:");
console.log("primeiro:", primeiro);   // 10
console.log("segundo:", segundo);     // 20
console.log("terceiro:", terceiro);   // 30
console.log("quarto:", quarto);       // 40

// 1.2 Pulando elementos com vírgulas:
// Se quisermos ignorar um índice, basta deixar uma vírgula sem variável:
const [um, , tres] = numeros;
console.log("\nPulando elementos:");
console.log("um:", um);   // 10
console.log("tres:", tres); // 30

// 1.3 Valores padrão (default) quando o índice não existe:
// Caso o array seja menor ou não contenha aquela posição, usa-se valor padrão:
const [a = 0, b = 0, c = 0, d = 0, e = 50] = [5, 15];
// - a = 5   (porque índice 0 existe e vale 5)
// - b = 15  (porque índice 1 existe e vale 15)
// - c = 0   (índice 2 não existe → valor padrão 0)
// - d = 0   (índice 3 não existe → valor padrão 0)
// - e = 50  (índice 4 não existe → valor padrão 50)
console.log("\nValores padrão:");
console.log("a:", a); // 5
console.log("b:", b); // 15
console.log("c:", c); // 0
console.log("d:", d); // 0
console.log("e:", e); // 50

// 1.4 Rest operator em array:
// O operador "..." coleta todos os elementos restantes em um novo array:
const [head, ...restoNumeros] = numeros;
console.log("\nRest operator em array:");
console.log("head:", head);               // 10
console.log("restoNumeros:", restoNumeros); // [20, 30, 40]

// ------------------------------------------------
// 2. Destructuring de Objeto
// ------------------------------------------------

// Criamos um objeto de usuário para demonstrar:
const usuario = {
  nome: "Pedro",
  idade: 20,
  endereco: {
    cidade: "Uberaba",
    estado: "MG"
  },
  funcao: "Desenvolvedor",
  interesse: undefined
};

// 2.1 Atribuição simples por chave:
// As variáveis devem ter o mesmo nome que as propriedades do objeto:
const { nome, idade, funcao } = usuario;
console.log("\nObject Destructuring:");
console.log("nome:", nome);       // "Maria"
console.log("idade:", idade);     // 28
console.log("funcao:", funcao);   // "Desenvolvedora"

// 2.2 Renomeando variáveis:
// Podemos extrair e renomear ao mesmo tempo:
const { nome: nomeCompleto, idade: anos } = usuario;
console.log("\nRenomeando variáveis:");
console.log("nomeCompleto:", nomeCompleto); // "Maria"
console.log("anos:", anos);                 // 28

// 2.3 Valores padrão (default) em objeto:
// Se a chave não existe ou for undefined, usa o valor padrão:
const { interesse = "Nenhum definido", profissao = "Não especificado" } = usuario;
console.log("\nValores padrão em objeto:");
console.log("interesse:", interesse);   // "Nenhum definido"
console.log("profissao:", profissao);   // "Não especificado"

// 2.4 Destructuring aninhado:
// Para acessar propriedades de subobjetos de forma direta:
const { endereco: { cidade, estado } } = usuario;
console.log("\nDestructuring aninhado:");
console.log("cidade:", cidade); // "Uberaba"
console.log("estado:", estado); // "MG"

// 2.5 Rest operator em objeto:
// Coleta todas as demais propriedades em um novo objeto:
const { endereco, ...restoUsuario } = usuario;
console.log("\nRest operator em objeto:");
console.log("endereco:", endereco);       // { cidade: "Uberaba", estado: "MG" }
console.log("restoUsuario:", restoUsuario);
// restoUsuario = {
//   nome: "Maria",
//   idade: 28,
//   funcao: "Desenvolvedora",
//   interesse: undefined
// }
