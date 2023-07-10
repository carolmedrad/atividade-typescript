class Receita {
    nome: string;
    ingrediente:string[];
    instrucoes:string[];

    constructor(nome:string, ingrediente:string[], intrucoes:string[]){
        this.nome = nome;
        this.ingrediente = ingrediente;
        this.instrucoes = intrucoes;
    }

    imprimirReceita(){
        console.log(this.nome);
        console.log(this.ingrediente);
        console.log(this.instrucoes);
    }
}

const receita = new Receita ("Suco de uva", ["Água","Açucar","Uva"],["lave bem as uvas",
                            "coloque no liquidificador e bata por 30s",
                            "Misture tudo com 2L de água", "Por fim, adicione Açucar"]);

receita.imprimirReceita();