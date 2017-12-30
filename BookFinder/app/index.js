// // console.log("check if working ")

// // // function checkLet(){
// // // 	let x = 12;
// // // 	if(true){
// // // 		let x = 14;
// // // 		console.log(x)
// // // 	}
// // // 	console.log(x)
// // // }
// // // checkLet()
// // // // 14, 12 bo zakres jest klamrowy

// // // function checkVar(){
// // // 	var y = 10;
// // // 	if (true){
// // // 		var y = 13;
// // // 		console.log(y)
// // // 	}
// // // 	console.log(y)
// // // }
// // // checkVar()
// // // // 13,13 bo nastąpi nadpisanie zmiennej 
// // // function checkConst(){
// // // 	const z = 10;
// // // 	if ( true ){
// // // 		const z = 11;
// // // 		console.log(z)
// // // 	}
// // // 	console.log(z)
// // // }
// // // checkConst()
// // // // 11, 10 - tak jak z let, zakres blokowy i nie widzą się obie zmienne, więc można redeklarować

// // // const emails = ["frodo", "bilbo", "merry"]
// // // emails.push("pippin")
// // // console.log(emails)
// // // emails[0] = "gandalf"
// // // console.log(emails)



// // // function greet(){
// // // 	let message = "how do you do?"
// // // 	console.log(message)
// // // }
// // // function hello(){
// // // 	let message = "hello"
// // // 	console.log(message)
// // // }

// // // hello()
// // // greet()

// // // const a = `hello, bejbe`
// // // console.log(a)

// // // const name = "Ewa";
// // // const surname = "Trojanowska"
// // // const fullname = `${name} ${surname}`
// // // console.log(` my name is ${fullname}`)
// // // const arr = [1,2,3,4]
// // // const arr2 = [5,6,7]
// // // const arr3 = [...arr, ...arr2]
// // // console.log(arr3)
// // // // let ar = [2,3,4]
// // // // let ar1 = [1,...ar, 5]
// // // // console.log(ar1)

// // // function collect(...a){
// // // 	console.log(a);
// // // }
// // // collect(1,2,3,4,5)

// // let z = [4,5,6]
// // let [four, five ] = z
// // console.log(four, five)

// // let names = ["Ewa", "Maciej", "Miłosz"];
// // let [ewa, maciej] = names
// // console.log(ewa, maciej)
// // let moar = [10,20,30,40,50,60]
// // let [ten,,,forty,,] = moar 
// // console.log(ten, forty)

// // let king = {
// // 	name: "Mufasa",
// // 	kids: 1
// // }
// // let {name, kids} = king
// // console.log(name, kids)
// // let girl = {
// // 	firstname: "Ewa",
// // 	pretty: true
// // }

// // let {firstname, pretty} = girl
// // console.log(firstname, pretty)
// // // let {x,y} = girl;
// // // console.log(x,y)
// // let kid = {
// // 	surname: "Nowak",
// // 	age: 23
// // }
// // let surname, age;
// // ({surname, age} = kid)
// // console.log(surname, age)

// // let cheer = () =>{
// // 	console.log("yay!")
// // }
// // cheer()

// // //setTimeout(()=>{console.log("lalala")}, 2000)

// // let multiply = (n) => n**2
// // let tab = [3,4,5]
// // let tab2 = tab.map(el => multiply(el));
// // console.log(tab2)

// // let stringify = (n) => n+"stringified"

// // let tab3 = tab.map(stringify)
// // console.log(tab3)

// // let triple = tab.map(el => el*3)
// // console.log(triple)

// // let filtered = tab.filter(el => el %2 ==1)
// // console.log(filtered)

// // let points = [7,13,21,24,32,22,43];
// // let big_scores = points.filter( el => el>=20)
// // .sort((a,b)=> a>b? 1:-1)
// // console.log(big_scores)

// // let my_str = "woohoo"
// // let repeated = my_str.repeat(12);
// // console.log(repeated)

// // let str2 = `wow${"qqqq".repeat(30)}`
// // console.log(str2)

// // let insect = "butterfly"
// // let check = insect.startsWith("butter");
// // console.log(check)
// // let check2 = insect.endsWith("fly")
// // console.log(check2)
// // let check3 = insect.startsWith("yay")
// // console.log(check3)
// // let check4 = insect.endsWith("fuck")
// // console.log(check4)

// // console.log(insect.includes("tt"))
// // console.log(`wykomentowalam calosc`)

// // const addToCart = (item, number) => {
// // 	return Number.isSafeInteger(number)
// // }
// // console.log(addToCart('shirt', Math.pow(2,100)))
// import {fellowship, total} from "./fellowship.js"
// import { add } from "./math.js"
// import multiply from "./math.js"
// import Animal from "./animal.js"
// console.log(fellowship)
// console.log(total)
// // console.log(array_with_nums[1])
// const sum = add(3,4)
// console.log(`suma 3 i 4 to ${sum}`)
// const multi = multiply(3,4)
// console.log(multi)

// let king = new Animal("Mufasa", 190);
// console.log(king.height, king.name)
// king.hello()


// class Lion extends Animal {
// 	constructor(name, height, color){
// 		super(name, height)
// 		this.color = color
// 	}

// 	hello() {
// 		console.log(`Hi I am ${this.name} from Pride Rock`)
// 	}
// }

// let simba = new Lion("Simba", 186, "tawny")
// simba.hello()
// console.log(simba)


// class Calculator {
// 	static multiplication(a,b){
// 		return a * b;
// 	}

// 	static adding(a,b){
// 		return a + b;
// 	}
// }


// let m = Calculator.multiplication(5,7);
// console.log(m)

// let ad = Calculator.adding(2,4);
// console.log(ad)


// function Wizard(name, house, pet) {
// 	this.name = name;
// 	this.house = house;
// 	this.pet = pet

// 	this.greet = () => 
// 		`Hi, I am ${this.name} and I am from ${this.house}`
	
// }

// console.log(Wizard)
// Wizard.prototype.pet_name;
// Wizard.prototype.info = function(){ return `My pet's name is ${this.pet_name}`} 
// let harry = new Wizard ("Harry Potter", "Gryffindor", "owl")
// console.log(harry.greet())
// harry.pet_name = "Hedwig"
// console.log(harry)
// let ron = new Wizard("Ron Weasley", "Gryffindor", "rat");
// console.log(ron)
// console.log(harry.info())
// ron.pet_name = "Scabbers";
// console.log(ron.info())

// let set_a = new Set()
// console.log(set_a)

// set_a.add(5)
// set_a.add(45)
// set_a.add("hoohohh")
// set_a.add({x:23, y: "bla"})
// console.log(set_a)
// console.log(set_a.size)
// console.log(set_a.has(5))

// let tablica = [1,2,3,4,5,5,5,6,6,6,7,8,8,8];
// let tablica2 = new Set(tablica)
// console.log(tablica2)

// for ( let el of tablica2.values()) {
// 	console.log(el)
// }

// let rand = "qweweeooeptorlckjlvjflkhgrlhipotih[pfdopfdosd;lk;lvkj;lhlkjlkjcl;kd;og[phoh["
// let arrRand = rand.split("");
// let unique = new Set(arrRand);
// console.log(unique.has("q"))

// const contains = (word, letter) => {
// 	let letters = word.split("");
// 	let lettersSet = new Set(letters)
// 	return lettersSet.has(letter)
// }

// console.log(contains("mama", "m"))


// const mp = new Map()
// console.log(mp)
// let name = "key1"
// mp.set(name, "Ewa");
// console.log(mp)
// mp.set("key2", true)
// console.log(mp)
// let key3 = {name: "ewa"}
// mp.set(key3, "nice")
// console.log(mp)
// let key4 = function(){ return "lala"}
// mp.set(key4, "lala")
// console.log(mp)

// let numArr = [[1, "one"], [2, "two"], [3, "three"]]
// let mapArr = new Map(numArr)
// console.log(mapArr)

// for ( let [key, value] of mapArr.entries()){
// 	console.log(`${key} of ${value}`)
// }

// let str = "qwertyuioplkjhfdsazxcvbnmnbvcxzlkjhgdesaqwertyyuuujjkjdsdsrieriotoffhdhjkfgflkfkdskdk"
// let strMap = new Map();
// console.log(strMap)
// for (let i =0; i<str.length; i++){
// 	let letter = str[i]
// 	if ( !strMap.has(letter)) {
// 		strMap.set(letter, 1)
// 	} else {
// 		strMap.set(letter, strMap.get(letter)+1)
// 	}
// }
// console.log(strMap)

// let call = () => {
// 	let secret = "ES6 rocks"

// 	let reveal = () =>{
// 		console.log(secret)
// 	}
// 	return reveal;
// }


// let unveil = call()
// unveil()


// const addSuffix = (x) => {
// 	const concat = (y) =>{
// 		return y+x
// 	}
// 	return concat;
// }

// let add_full = addSuffix("full")
// console.log(add_full)
// let seen = add_full("beauty")
// console.log(seen)

// let add_less = addSuffix("less")
// console.log(add_less)
// console.log(add_less("shame"))


// const product = a => 
// 	 b =>  a *b


// let mult5 = product(5)
// console.log(mult5(8)) //40

// let double = product(2)
// console.log(double(5))

// const budget = () => {
// 	let balance = 0;
// 	let changeBal = (val) =>{
// 		return balance += val
// 	}
// 	const deposit20 = () => changeBal(20)
// 	const withdraw10= () => changeBal(-10)
// 	const check = () => balance
// 	return {
// 		deposit20,
// 		withdraw10,
// 		check
// 	}
// }

// let wallet = budget()
// console.log(wallet)
// wallet.deposit20()
// console.log(wallet.check())
// wallet.withdraw10()
// console.log(wallet.check())


// function* letterMaker(){
// 	yield 'a';
// 	yield 'b';
// 	yield 'c';
// }

// let letterGen = letterMaker()
// console.log(letterGen.next().value)
// console.log(letterGen.next().value)
// console.log(letterGen.next().value)


// function* countMaker() {
// 	let count =0;
// 	while ( count <3) {
// 		yield count +=1
// 	}
// }

// let countGen = countMaker();
// console.log(countGen.next().value)
// console.log(countGen.next().value)
// console.log(countGen.next().value)
// console.log(countGen.next().value)


// function* evens() {
// 	let counter = 0;
// 	while(true){
// 		counter +=2
// 		let reset = yield  counter
// 		if(reset){
// 			counter = 0;
// 		}
// 	}
// }

// let even = evens()
// console.log(even.next().value)
// console.log(even.next().value)
// console.log(even.next().value)
// console.log(even.next().value)
// console.log(even.next(true).value)
// console.log(even.next().value)

// // const arrayIterator = (array) => {
// // 	let index = 0
// // 	return {
// // 		next: ()=>{
// // 			if( index <array.length){
// // 				let next = array[index]
// // 				index +=1
// // 				return next
// // 			}
// // 		}
// // 	}
// // }

// // let it = arrayIterator([1,2,3,4])
// // console.log(it.next())


// function* arrayIterator(){
// 	yield* arguments
// }

// let it = arrayIterator(1,2,3)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)


// let p = new Promise((resolve, reject)=>{
// 	resolve("resolve promise data")
// })

// p.then( response => { console.log(response)} )

// let p2 = new Promise((resolve, reject) =>{
// 	reject("rejected promise data")
// })
// p2.then( response => {console.log(response)})
// .catch( error => {console.log(error)})

// let p3 = new Promise( (resolve, reject) => {
// 	setTimeout(()=> {
// 		resolve("resolved p3")
// 	}, 3000)
// })
// p3.then( response => { console.log(response)})
// .catch( error => { console.log(error)})
// console.log("after promise consumption")

// const root = "https://jsonplaceholder.typicode.com/posts/1"
// console.log(root)

// fetch(root, {method: "GET"})
// .then( response => response.json())
// .then(json => {console.log(json)})


// const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
// fetch(url, {method: "GET"})
// .then( response => response.json())
// .then(json => {console.log(json.items[0].saleInfo)})



// let a = Math.pow(2,5)
// console.log(`a is equal to ${a}`)
// let b = 2 ** 5
// console.log(`b is equal to ${b}`)

// let c = "wonderfull"
// console.log(c.includes("wonder"))
// let d = [1, 3, 5, 7, true, "Ewa", {name: "Ewa", age: 25}]
// console.log(d)
// console.log(d.includes("Ewa"))
// console.log(d.includes(2))

// let e = d.includes("Maciej")
// console.log( e, `e is equal to ${e}`)

// let obj = {a: 1, b:3, c: 5}
// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// let entries = Object.entries(obj)
// console.log(entries[0])

// for ( let el of entries){
// 	console.log(el)
// }

// async function async_one(){
// 	return "one"
// }
// async function async_two(){
// 	return "two"
// }
// // async_one().then(response => {console.log(response)})

// // async_two().catch(error => {console.log(error)})


// async function async_three(){
// 	const one = await async_one()
// 	console.log(one)
// 	const two = await async_two()
// 	console.log(two)
// }

// async_three()


// async function async_four(){
// 	const [res_one, res_two ] = await Promise.all([async_one(), async_two()])
// 	console.log(res_one, res_two)
// }
// async_four();

import React from 'react'
import ReactDOM from 'react-dom'
import Global from "./components/Global.js"
const target = document.getElementById("root")


ReactDOM.render(<Global/>, target)