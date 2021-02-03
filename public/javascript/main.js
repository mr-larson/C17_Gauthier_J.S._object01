// Les Objets
//Présentation
/* 
let string = "Hello"
let number = 5
let boolean = true || false
let tableau = ["Hello", 5, false, ["Helloo", 55, true]]
console.log (typeof tableau)
 */
// EXO 1
//-----------------------
//1.1
let a = {
    nom: "Skywalker",
    prenom: "Luke",
    age: 20,
    taille: 170,
}
console.log (a .age)
//-----------------------
//1.2
let b = {
    nom: "San",
    prenom: "Goku",
    age: 30,
    taille: 180,
}

//----------------------
//1.3
let c = {
    nom: a.nom,
    age: b.age,
    taille: 185,
}
console.log (c)
//-----------------------
//1.4
let d = {
    saluer(){
        console.log (`coucou ${b.nom}`)
    }
}
d.saluer()
//----------------------
//1.5
let e = {
    nom: "Maclay",
    prenom: "John",
    age: 40,
    taille: 175,
}
let voleur ={
    
}
voleur = (`Le nom est ${e.nom} \n et l'age est ${a.age} ans`)
console.log (voleur)
//------------------------
