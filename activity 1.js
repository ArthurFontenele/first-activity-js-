// 1. Declare uma variavel de nome 

let weight; // pode ser com ou sem ponto e virgula (Comentario)

// 2. Que tipo de dado é a variável acima ?

console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valore para cada
    um dos dados:
        * name: String
        * age: number (integer)
        * stars: nunber (float)
        * isSubscribed: boolean
        
*/

// R:
//let name = "Arthur"
//let age = 23
//let stars = 4.8
//let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo dados?

    4.1 Atribua a ela as mesmas propriedades e valores.

        <name> de idade <age> pesa <weight> kg.
        
        atenção, substitua <name><age> e <weight>
        valores de cada propriedade do objeto
*/

let student = {
    name: "Arthur",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
}



console.log(`${student.name} de idade ${student.age}
pesa ${student.weight} kg.`)

/*
    5. Declare uma variavel do tipo Array, de nome 
    students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio
*/

let students = []

/*  
    6. Reatriua valor para a variavel acima, colocando
    dentro dela o objeto student da questão 4, (Não copior e colar,
    mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)


