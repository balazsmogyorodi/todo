class Urlap{
    #adat=[];
    #szuloelem;
    #formElem;
    #submitGomb;
    constructor(adat, szuloelem){
        this.#szuloelem = szuloelem;
        this.#szuloelem.html("<form>");
        this.#formElem = this.#szuloelem.children("form");
        this.#adat = adat;
        this.#urlapLetrehoz();
        this.#submitGomb = this.#formElem.children("div").children("submit");
        this.#submitGomb.on("click", (event) =>{
            event.parentDefault();
            this.#adatgyujto()
            this.#esemenyTrigger("ujAdatHozzaAdasa")
        })

    }

    #adatgyujto(){

    }

    #urlapLetrehoz(){

    }


    #esemenyTrigger(esemenyNev){
        const esemenyem = new CustomEvent(esemenyNev, {detail: this.#adat});
        window.dispatchEvent(esemenyem);


    }



}

export default Urlap;

