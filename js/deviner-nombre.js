/**
 * Jeu du nombre mystère
 * @author  Reda Saci
 * @version 1.0
 * @since   2023-02-08 (date de création)
 */

'use strict';

/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}
// TODO Attention jamais plus de 2 lignes vides à la suite


const MINI = 1; // TODO Nom des constantes de valeur en majuscule mini => MINI.
const MAXI = 100; // TODO Ajouter des espaces avant et après le signe =

let nbEssai = 0;
// let stop=true; // TODO Supprimer
let nbMistere = tireNombre(MINI, MAXI);
let message  = ' entrer un nombre entre '+ MINI +' et '+ MAXI ;
let reponse = null;

// TODO Déclarer réponse et mettre à null
// juste pour voir cest quoi le numero secret
alert(nbMistere);

// while (stop){ // TODO do..while
//
//     let reponse= Number(prompt('entrer un nombre entre 1 et 100 :'));
//
//     if (reponse<nbMistere){
//
//         alert('plus petit');
//     } else if (reponse > nbMistere){
//
//         alert('plus grand');
//
//     } else {
//
//         alert('vous avez trouvé le bon numero apres '+nbEssai +' essai ');
//         stop=false;
//
//     }
//
//     nbEssai++;
// }

do {
    reponse= Number(prompt(message));

    if (reponse < nbMistere){
        message = 'le numero entrer il est plus petit ! ';
    } else {
        message = 'le numero entrer il est plus grand ! ';
    }

    nbEssai++;
} while (reponse !== nbMistere);

alert('vous avez trouvé le bon numero apres '+ nbEssai + ' essai ');




