//Funções

const isWeekend = (date)=>{
    if (date.getDay()==0 || date.getDay()==6){
        return true
    }
    return false
}

const getMelhorBanho = (arrayDeValores) => {
    return arrayDeValores.reduce((ac, orcamento)=>{
        if(orcamento.valor < ac.valor){
            return orcamento
        } else if (orcamento.valor > ac.valor) {
            return ac
        }
        else if(orcamento.valor === ac.valor){
            return orcamento.dist < ac.dist ? orcamento : ac
        }
    })
}

// informações fornecidas para o problema
const info = {
    meuCanino: {
        dist: 2,
        banhoPS:20,
        banhoGS:40,
        banhoPFS:24,
        banhoGFS:48,
    },
    vaiRex: {
        dist: 1.7,
        banhoPS:15,
        banhoGS:50,
        banhoPFS:20,
        banhoGFS:55,
    },
    chowChawgas: {
        dist: 0.8,
        banhoPS:30,
        banhoGS:45,
        banhoPFS:30,
        banhoGFS:45,
    },
}

// solicitando entrada do usuário através do terminal
const input = process.argv.slice(2)

const date = input[0].split('/')

// declarando e instanciando classe
let myDate = new Date()
// inicializando atributos da classe
myDate.setDate(Number(date[0]))
myDate.setMonth(Number(date[1])-1)
myDate.setFullYear(Number(date[2]))

// declarando variável que receberá os orçamento de cada pet shop de acordo com a entrada
let orcamentos = []

// calculando orçamentos para fins de semana
if(isWeekend(myDate)){
    const valorMeuCanino = (Number(input[1])*info.meuCanino.banhoPFS) + (Number(input[2])*info.meuCanino.banhoGFS)
    orcamentos.push({nome: 'Meu Canino Feliz', valor: valorMeuCanino, dist: info.meuCanino.dist})
    const valorVaiRex = (Number(input[1])*info.vaiRex.banhoPFS) + (Number(input[2])*info.vaiRex.banhoGFS)
    orcamentos.push({nome: 'Vai Rex', valor: valorVaiRex, dist: info.vaiRex.dist})
    const valorChowChawgas = (Number(input[1])*info.chowChawgas.banhoPFS) + (Number(input[2])*info.chowChawgas.banhoGFS)
    orcamentos.push({nome: 'ChowChawgas', valor: valorChowChawgas, dist: info.chowChawgas.dist})

    // definindo melhor orçamento através da função criada
    const melhor = getMelhorBanho(orcamentos)
    console.log(`${melhor.nome} R$${melhor.valor}`);
}
// calculando orçamentos para dias de semana
else{
    const valorMeuCanino = (Number(input[1])*info.meuCanino.banhoPS) + (Number(input[2])*info.meuCanino.banhoGS)
    orcamentos.push({nome: 'Meu Canino Feliz', valor: valorMeuCanino, dist: info.meuCanino.dist})
    const valorVaiRex = (Number(input[1])*info.vaiRex.banhoPS) + (Number(input[2])*info.vaiRex.banhoGS)
    orcamentos.push({nome: 'Vai Rex', valor: valorVaiRex, dist: info.vaiRex.dist})
    const valorChowChawgas = (Number(input[1])*info.chowChawgas.banhoPS) + (Number(input[2])*info.chowChawgas.banhoGS)
    orcamentos.push({nome: 'ChowChawgas', valor: valorChowChawgas, dist: info.chowChawgas.dist})

    // definindo melhor orçamento através da função criada
    const melhor = getMelhorBanho(orcamentos)
    console.log(`${melhor.nome} R$${melhor.valor}`);
}