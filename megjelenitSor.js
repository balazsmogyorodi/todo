class MegjelelnitSor{
    #obj={};
    constructor(obj, szuloElem){
        this.#obj = obj;
      
        this.szuloelem = szuloElem;
        this.#sor();

        this.sorElem = this.szuloelem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.megseElem = this.sorElem.children("td").children(".megse");
        this.torElem = this.sorElem.children("td").children(".tor");
        console.log(this.keszElem);
      
        this.keszElem.on("click", () =>{
            this.esemenyTrigger("kesz")
        });
        this.megseElem.on("click", () =>{
            console.log("megse")
            this.esemenyTrigger("megse")
        });
        this.torElem.on("click", () =>{
            console.log("tor")
            this.esemenyTrigger("tor")
        });

    }

    #sor(){
        let txt = "<tr>";
        for (const key in this.#obj) {
            txt += `<td>${this.#obj[key]}</td>`;
        }
        txt +=  `<td> <spam class="kesz">efef</spam> <spam class="megse">X </spam> <spam class = "tor"> rgr</spam>`
        txt += "</tr>";
        this.szuloelem.append(txt);
    }

    esemenyTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {detail:this})
        window.dispatchEvent(esemeny);
    }

  




}
export default MegjelelnitSor;