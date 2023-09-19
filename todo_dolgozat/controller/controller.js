import Model from "../model/model.js";
import Urlap from "../view/UrlapView.js";
import Megjelenit from "../view/megjelenit.js";


class Controller {
    constructor() {
        const szuloElem = $(".tarolo");
        const model = new Model;
        const megjelenit = new Megjelenit(model.getList(), szuloElem);
        $(window).on("ujAdat", (event) => {
            new Urlap(model.getList(), $(".ujadat"));
        });
        $(window).on("torles", (event) => {
            console.log(event.detail);
            model.torol(event.detail);
            szuloElem.empty();
            new Megjelenit(model.getList(), szuloElem);
        });
        $(window).on("kesz", (event) => {
            console.log(event.detail);
            model.sorValtoztatasKesz(event.detail)
            szuloElem.empty();
            new Megjelenit(model.getList(), szuloElem);
        });
        $(window).on("megse", (event) => {
            model.sorValtoztatasMegse(event.detail)
            szuloElem.empty();
            new Megjelenit(model.getList(), szuloElem);
        });

    }





}

export default Controller;