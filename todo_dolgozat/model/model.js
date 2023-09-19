import { TODOLIST2 } from "./adatok.js"


class Model {
    #list = []
    constructor() {
        this.#list = TODOLIST2;
    }

    getList() {
        return this.#list;
    }

    torol(index) {
        this.#list.splice(index, 1);
    }

    sorValtoztatasKesz(index) {
        this.#list[index].allapot = true;
    }

    sorValtoztatasMegse(index){
        this.#list[index].allapot = false;
    }





}
export default Model;