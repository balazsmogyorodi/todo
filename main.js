import { TODOLIST, TODOLIST2 } from "./adatok.js";
import Megjelenit from "./megjelenit.js";


const adatok = TODOLIST
const osszesadat = TODOLIST2;

$(function () {
    const hatarido = []
    for (let index = 0; index < osszesadat.length; index++) {
        hatarido.push(osszesadat[index].hatarido);
    }

    console.log(adatok)
    console.log(hatarido)
    const articleElem = $("article");
    new Megjelenit(adatok, hatarido, articleElem);

});