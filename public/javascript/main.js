// Les Objets
//-----------------------
//Présentation
/* 
let string = "Hello"
let number = 5
let boolean = true || false
let tableau = ["Hello", 5, false, ["Helloo", 55, true]]
console.log (typeof tableau)
 */
// EXO_01
//-----------------------
//1.1
/* let a = {
    nom: "Skywalker",
    prenom: "Luke",
    age: 20,
    taille: 170,
}
console.log (a .age) */
//-----------------------
//1.2
/* let b = {
    nom: "San",
    prenom: "Goku",
    age: 30,
    taille: 180,
} */
/* let c = {

} */
//----------------------
//1.3
/* let c = {
    nom: a.nom,
    age: b.age,
    taille: 185,
}

console.log (c)

//bis
c.nom = a.nom
c.age = a.age
c.taille = 185

console.log (c) */
//-----------------------
//1.4
/* let d = {
    saluer(){
        console.log (`coucou ${b.nom}`)
    }
}
d.saluer() */
//----------------------
//1.5
/* let e = {
    nom: "Maclay",
    prenom: "John",
    age: 40,
    taille: 175,
}
let voleur ={
    usurpation(personne){
        this.nom = personne.nom
        this.age = presonne.age
    }
}
voleur.usurpation(b)

console.log (voleur)
 */
//------------------------
//EXO_02
//2.1
/* 
let a = {
    nom: "Skywalker",
    prenom: "Luke",
    sePresenter (){
        console.log (`Bonjour je m'appelle ${this.nom} \n ${this.prenom}`)
    }
}
a.sePresenter()
 */
//----------------------------
//2.2
/* let objet = {
    nom: "Onizuka",
    b(){
        this.age = parseInt (prompt("introduire un age"))
        alert (`${this.nom} à ${this.age} ans`)
    }
}
Object.b() */
//------------------------------
//3.1
/* 
let François = {
    derober (personne){
        this.panier.push (personne.panier.shift())
        this.panier.push (personne.panier.shift())
    },
    panier : [
        "sel",
        "poivre",
        "curcuma",
    ]
    
}

let Sergio = {
    panier : [
        "tomate",
        "poulet",
        "pain",
    ]
}
console.log (François.panier)
console.log (Sergio.panier)

François.derober(Sergio.panier)

console.log (François.panier)
console.log (Sergio.panier)
 */
//----------------------------------
//4.1
/* let vieille_dame = {
    age: 67,
    nom:{
        prenom: "Germaine",
        nomDeFamille: "Elmemere",
    },
    moral: "mal",
    objet: "Vibromasseur",
    action: "frappe",
    parler (vieille_homme){
        if (this.moral == "mal") {
            alert (`${this.nom.prenom} ${this.nom.nomDeFamille} dit : Vous me dérangez!!! ${this.action} avec ${this.objet} dans la bouche`)
        }
        else if (this.moral == "bien"){
            alert (`Bonjour ${vieille_homme.nom.prenom} ${vieille_homme.nom.nomDeFamille}`)
        }
    }
}


let vieille_homme = {
    nom:{
        prenom: "Jean",
        nomDeFamille: "laSaucisse",
    },
    adoucir () {
        vieille_dame.moral = "bien"
    }
}

vieille_dame.parler(vieille_homme)
vieille_homme.adoucir(vieille_dame)
vieille_dame.parler(vieille_homme) 
*/
//----------------------------------