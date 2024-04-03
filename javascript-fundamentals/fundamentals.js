// console

console.log('Esse é o método log')
console.warn('Esse é o ambiente de desenvolvimento')
console.error('Esse é seu erro')
console.table('Coloque um array aqui')
console.info('Essa é uma informação')
// console.clear()

// variáveis

var banana = 10
let maçã = 15
const uva = 20

console.log(banana)
console.log(maçã)
console.log(uva)

// Tipos de dados   

const name = 'Charles Fioravante Naressi Freire'
let qtd = 5
const isApproved = false
let lastNamee = null
let age 
const languages = ['JavaScript', 'PHP', 'Python']
const user = { email: 'chfnf@teste.com', password: 'teste123', name: 'Charles'}

console.log(name)
console.log(typeof name)

let num = [1, 2, 3, 4 , 5]
console.table(num)
console.log(num[1])

let obj = [
    {id: 'g', name: 'greice', age: 45},
    {id: 'j', name: 'jose', age: 15}
]

// métodos de string

const fullName = 'Charles Fioravante Naressi Freire'

console.log(fullName, 'nome completo')

const stringToArray = fullName.split(' ') 

console.table(stringToArray)

const firstName = stringToArray[0]

const lastName = stringToArray[3]

let userName = `Bem vindo, ${firstName} ${lastName}`

console.log(userName)

// minusculo
console.log(fullName.toLowerCase())

//maiusculo
console.log(fullName.toUpperCase())

// traz o tamanho da string
const teacherName = 'Charles'
console.log(teacherName.length)

// retorna o indice do valor mensionado
console.log(fullName.indexOf('Naressi'))

// busca um palavra através do indice que voce selecionou (inicio, fim)
console.log(fullName.slice(6, 14))

// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']


// length faz a contagem desde o prmeiro elemento
console.log(list.length, 'array')
console.log(list[4])

list[5] = 'f'
console.log(list)

list.push('g')
console.log(list, 'push')

console.log(list[list.length -1], 'aqui')


// pop remove o último elemento
list.pop()
console.log(list, 'pop')


// shift remove o primeiro elemento
list.shift()
console.log(list)


// UNSHIFT adiciona um novo elemento
list.unshift('a')
console.log(list, 'unshift')

// Start do slice = vaçpr dp çenght anterior
// end = valor do real

console.log(list.slice(2, 4))


// OBJETOS
const product = {
    name: 'Regata',
    price: 49.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
}

console.log(product.name)
console.log(product.price)
console.log(product.inStock)
console.log(product.sizes)


// Objeto
product.color = 'red'
console.log(product)

// destructuring
const {price, inStock } = product

console.log(price)
console.log(inStock)

// Json
const dog = {
    name: 'shark',
    age: 5,
    breed: 'caramelo'
}

// transforma dados em json
const jsonSt = JSON.stringify(dog)
const jsonReset = JSON.parse(jsonSt)

console.log(jsonSt)
console.log(jsonReset)

