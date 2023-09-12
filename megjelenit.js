import MegjelelnitSor from "./megjelenitSor.js";

class Megjelenit {
    #list = [];
    #tableElem;
    $hatarIdok = []


    constructor(lista, hatarIdok, szuloElem) {
        this.#list = lista;
        this.$hatarIdok = hatarIdok;
        szuloElem.append(`<table class="table"> <thead>  <tr>
        <th>Szakdolgozat határidők</th>  </thead> <tbody> </tbody> </table>`)
        this.#tableElem = szuloElem.children("tbody");
        this.#tableElem = $("tbody");
        this.#kiiras()




    }

    #kiiras() {

        for (let index = 0; index < this.#list.length; index++) {
           const adatok = [this.#list[index], this.$hatarIdok[index]]
            new MegjelelnitSor(adatok, this.#tableElem)
        }


    }


}

export default Megjelenit;