// Faite une boucle qui affiche dans la console 5 fois le message suivant
// 'Je suis une boucle'
let message = "Je suis une boucle";
for(let i = 0; i < 5; i++){
    console.log(message);
}

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for(i = 1; i < 11; i++){
    console.log(i);
}
// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
 // number = prompt("Entrez un nombre de votre choix");
 //for(i = 0; i <= number; i++){
 //   console.log(i);
 //}
// Faire une boucle qui affiche dans la console la table de multiplication de ce nombre
 /* let multi = prompt("Choisissez le nombre de votre choix");
for(i = 0; i < 11; i++){
    console.log(`${multi} * ${i} = ${multi * i}`);
} */

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre

// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 7 en parametre
// Appeler la fonction en lui passant le nombre 9 en parametre
 function afficherTable(x){
    for(i = 0; i < 11; i++){
        console.log(`${x} * ${i} = ${x * i}`);
    }
 }
 afficherTable(5);
 afficherTable(7);
 afficherTable(9);

 // Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre
function modulo(x){
    if(x%2 == 0){
        console.log(`${x} est un nombre pair`);
    } else {
        console.log(`${x} est un nombre impair`);
    }
}
modulo(5);
modulo(256);

// Déclarer un tableau contenant le nom des mois
// Afficher dans la console le mois de janvier
// Afficher dans la console le mois de mars
// Afficher dans la console le mois de avril
// Afficher dans la console le mois de aout
// Afficher dans la console le mois de octobre

// Faire une boucle qui affiche dans la console les mois de l'année

// Creer une fonction qui affiche dans la console les mois de l'année
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
console.log(mois[0]);
console.log(mois[2]);
console.log(mois[3]);
console.log(mois[7]);
console.log(mois[9]);
mois.forEach(element => console.log(element));
function afficherMois(){
    mois.forEach(element => console.log(element));
}
afficherMois();

// Déclarer une variable qui contient un nombre
// Si le nombre est divisible par 3 afficher dans un alert 'Fizz'
// Si le nombre est divisible par 5 afficher dans un alert 'Buzz'
// Si le nombre est divisible par 3 et 5 afficher dans un alert 'FizzBuzz'
// Sinon afficher dans un alert le nombre
let numero;
if(numero%3 == 0){
    alert("Fizz");
} else if(numero%5 == 0) {
    alert("Buzz");
} else if(numero%3 == 0 && numero%5 == 0){
    alert("FizzBuzz");
} else {
    alert(numero);
}
function fizzbuzz(numero){
    if(numero%3 == 0){
        alert("Fizz");
    } else if(numero%5 == 0) {
        alert("Buzz");
    } else if(numero%3 == 0 && numero%5 == 0){
        alert("FizzBuzz");
    } else {
        alert(numero);
    }
}
fizzbuzz(30);

// Déclarer 3 variables qui contiennent les notes de l'utilisateur
// Calculer la moyenne de l'utilisateur

let var1 = 12;
let var2 = 20;
let var3 = 13;
moyenne = (var1 + var2 + var3) / 3;
console.log(moyenne);

// Creer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Afficher dans la console la note de l'utilisateur à l'indice 1
// Calculer la moyenne de l'utilisateur :
let notes = [10, 15, 20];
console.log(notes[1]);
let sum = notes.reduce((acc, value) => acc + value);
let average = sum / notes.length;
console.log(average);
// Déclarer une fonction qui prend en parametre un tableau, qui calcule la moyenne de l'utilisateur et qui retourne la moyenne
// Appeler la fonction en lui passant le tableau en parametre
function getAverage(array){
    sum = array.reduce((acc, value)=> acc + value);
    average = sum / array.length;
    return average;
}
console.log(getAverage(notes));

// Algorithme pour savoir si l'utilisateur est reçu ou non
// Elle prend en parametre une moyenne
// Retourner true si la moyenne est supérieure ou égale à 10 et false sinon
function estAdmis(average){
    if(average >= 10){
        return true;
    } else {
        return false;
    }
}
console.log(estAdmis(average));

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"

function mention(average){
    if(average == 20){
        console.log("mention très bien");
    } else if(average >= 18){
        console.log("mention bien");
    } else if(average >= 16){
        console.log("mention assez bien");
    } else if(average >= 14){
        console.log("Passable");
    } else if(average <= 10){
        console.log("Insuffisant");
    }
}
mention(average);

// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention
 function admission(notes, name){
    let sum = notes.reduce((acc, value) => acc + value);
    let avg = sum / notes.length;
    if(avg > 10){
         admis = true
    } else {
        admis = false
    }
    if(average == 20){
        let commentaire = "Parfait"
    } else if(average >= 18){
        commentaire = "Très bien"
    } else if(average >= 16){
        commentaire = "Bien"
    } else if(average >= 14){
        commentaire = "Passable"
    } else if(average <= 12){
        commentaire = "Tout juste"
    }
    if(admis == true){
        console.log(`${name} a une moyenne de ${avg}. Il a donc été admis avec la mention ${commentaire}`);
    } else {
        console.log(`${name} a eu une moyenne de ${avg}. Il n'a donc pas été admis.`);
    }
 }
let admis;
let prenom = "Gabriel"
let note = [15, 18, 12, 17, 14]
admission(note, prenom);

const Voitures = {
    marque : "Renault",
    modele : "Clio",
    couleur : "rouge",
    portes : 5,
    vitesses : 5,
    options : ["climatisation", "vitres électriques", "gps", "sièges chauffants", "bluetooth"],
    decrire : () => "La voiture est une renault clio rouge de 5 portes et 5 vitesses.",
    decrireOptions : () => "La voiture est équipée d'une climatisation, de vitres électriques, d'un gps, de sièges chauffant ainsi que du bletooth",
}
console.log(Voitures.marque);
console.log(Voitures.modele);
console.log(Voitures.couleur);
console.log(Voitures.decrire());
console.log(Voitures.decrireOptions());
for(i = 0; i < Voitures.options.length; i++){
    console.log(Voitures.options[i]);
    
}
Voitures.options.forEach(element => console.log(element));
for(element of Voitures.options){
    console.log(element);
}
console.log(Voitures.decrireOptions());

// Demander à l'utilisateur de saisir son prénom
// Demander à l'utilisateur de saisir son nom
// Demander à l'utilisateur de saisir son age
// Demander à l'utilisateur de saisir son sexe
// Demander à l'utilisateur de saisir son animal préféré

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"

// Afficher dans la console la description de l'utilisateur
let firstName = prompt("Quel est votre prénom ?");
let lastName = prompt("Quel est votre nom de famille");
let age = prompt("Quel est votre âge ?");
let sexe = prompt("Quel est votre sexe ?");
let animal = prompt("Quel est ton animal préféré ?");

const User = {
    prenom : firstName,
    nom : lastName,
    age : age,
    sex : sexe,
    animalPrefere : animal,
    description : () => `Je m'appelle ${firstName} ${lastName}, j'ai ${age} et j'adore les ${animal}.`
}
console.log(User.description());

// Voici un tableau qui contient 6 objets utilisateurs
let users = [
    { prenom: 'Alice', nom: 'Dupont', age: 28, sexe: 'Femme', animauxPreferes: ['chat', 'chien'], description: function () { return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animauxPreferes.join(', ')}.`; }, },
    { prenom: 'Bob', nom: 'Martin', age: 35, sexe: 'Homme', animauxPreferes: ['poisson', 'oiseau'], description: function () { return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animauxPreferes.join(', ')}.`; }, },
    { prenom: 'Claire', nom: 'Rousseau', age: 42, sexe: 'Femme', animauxPreferes: ['cheval', 'lapin'], description: function () { return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animauxPreferes.join(', ')}.`; }, },
    { prenom: 'David', nom: 'Lefebvre', age: 22, sexe: 'Homme', animauxPreferes: ['chat', 'chien'], description: function () { return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animauxPreferes.join(', ')}.`; }, },
    { prenom: 'Emma', nom: 'Garcia', age: 29, sexe: 'Femme', animauxPreferes: ['chien', 'hamster'], description: function () { return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animauxPreferes.join(', ')}.`; }, },
    { prenom: 'François', nom: 'Moreau', age: 46, sexe: 'Homme', animauxPreferes: ['chat', 'oiseau'], description: function () { return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animauxPreferes.join(', ')}.`; }, },
];
// Faire une boucle :
users.forEach(element => console.log(element));
// Afficher dans la console la description de chaque utilisateur
users.forEach(element => console.log(element.description()));

// Boucler sur chaque utilisateur pour afficher toutes les informations de l'utilisateur
for(user of users){
    for(const key in user){
        console.log(key, user[key]);
    }
}

const students = [
    { nom: "Dupont", prenom: "Alice", cours: ["Maths", "Anglais", "Histoire"], notes: [14, 16, 18] },
    { nom: "Martin", prenom: "Bob", cours: ["Physique", "Espagnol", "Géographie"], notes: [12, 13, 15] },
    { nom: "Lefebvre", prenom: "Claire", cours: ["Chimie", "Allemand", "SVT"], notes: [9, 10, 11] },
    { nom: "Girard", prenom: "David", cours: ["Français", "Arts plastiques", "Philosophie"], notes: [17, 19, 14] },
    { nom: "Petit", prenom: "Emma", cours: ["Latin", "Musique", "Sciences économiques"], notes: [16, 11, 12] },
    { nom: "Moreau", prenom: "François", cours: ["Sport", "Théâtre", "Informatique"], notes: [11, 13, 15] },
    { nom: "Dubois", prenom: "Marc", cours: ["Géométrie", "Latin", "Marketing"], notes: [15, 12, 10] },
    { nom: "Garcia", prenom: "Hugo", cours: ["Littérature", "Musique", "Droit"], notes: [14, 17, 18] },
    { nom: "Roux", prenom: "Inès", cours: ["Sociologie", "Japonais", "Chimie"], notes: [10, 9, 12] },
    { nom: "Berger", prenom: "Jules", cours: ["Géographie", "Théâtre", "Espagnol"], notes: [13, 16, 14] },
    { nom: "Moulin", prenom: "Karine", cours: ["Histoire de l'art", "Anglais", "Physique"], notes: [17, 15, 18] },
    { nom: "David", prenom: "Lucie", cours: ["Chinois", "Marketing", "SVT"], notes: [12, 11, 9] },
    { nom: "Mercier", prenom: "Marc", cours: ["Philosophie", "Sport", "Français"], notes: [18, 13, 16] },
    { nom: "Fournier", prenom: "Nina", cours: ["Informatique", "Littérature", "Musique"], notes: [15, 14, 17] },
    { nom: "Morel", prenom: "Olivier", cours: ["Espagnol", "Chimie", "Théâtre"], notes: [13, 11, 16] }
];

// Itérer sur le tableau students avec la méthode forEach()

// 1. Afficher dans la console le nom et le prénom de chaque élève
students.forEach(element => console.log(element.nom))
students.forEach(element => console.log(element.prenom))
// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"
for(student of students){
    if(student.cours.includes("Français") || student.cours.includes("Maths")){
        console.log(student.nom, student.prenom);
    }
}
// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)
for(student of students){
    admission(student.notes, student.prenom)
}
// 4. Afficher dans la console le nom et la moyenne de chaque élève
for(student of students){
    console.log(student.getAverage(student.notes));
}