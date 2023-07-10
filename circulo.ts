class Circulo{
    raio:number;


    constructor(raio:number){
        this.raio = raio;
    }

    calcularDiametro():number{
        const resultado = this.raio * 2;
        return resultado;
    }

    calcularCircuferencia():number{
           const pi:number = 3.14159;
           const resultado:number = 2 * pi * this.raio;
           return resultado;
    }

    calcularArea():number{
        const pi:number = 3.14159;
        return this.raio * this.raio * pi;
    }
}

const circulo = new Circulo (3);

console.log(circulo);

console.log(circulo.calcularDiametro() + "\n");
console.log(circulo.calcularCircuferencia() + "\n");
console.log(circulo.calcularArea() + "\n");