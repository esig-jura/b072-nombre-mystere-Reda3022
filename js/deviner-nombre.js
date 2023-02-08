/**
 * Jeu du nombre mystère
 * @author  Reda Saci
 * @version 1.0
 * @since   2023-02-08 (date de création)
 */

'use strict';
// TODO afficher les messages d'erreur en HTML et pas avec alert
// TODO panneau de config pour modifer MIN et MAX









/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}


const mini=1;
const maxi=100;

let nbEssai=1;

let stop=true;

let nbMistere=tireNombre(mini,maxi);

// juste pour voir cest quoi le numero secret
alert(nbMistere);

while (stop){

    let reponse= Number(prompt('entrer un nombre entre 1 et 100 :'));

    if (reponse<nbMistere){

        alert('plus petit');
    }else if (reponse>nbMistere){

        alert('plus grand');

    }else{

        alert('vous avez trouvé le bon numero apres '+nbEssai +' essai ');
        stop=false;

    }

    nbEssai++;


}




