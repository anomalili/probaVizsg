class NemAdminSzakdogaView {
    #elem;

    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log(elem);
        szuloElem.append(`

                   

                <tr>
                
                <td>${elem.szakdoga_nev}</td>
                <td>${elem.tagokneve}</td>
                <td>${elem.githublink}</td>
                <td>${elem.oldallink}</td>
                
                </tr>

                

                        `);
    }
}

class NemAdminSzakdogakView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        this.divElem = szuloElem.children("div");

        szuloElem.append(`
        <table id="hozzaszolasTable">   
        <th>Szakdolgozat címe</th>  
        <th>Készítők neve</th>  
        <th>Github link</th>  
        <th>Szakdolgozat elérhetősége</th>  
        </table>     
        `
        );




        if (Array.isArray(elem)) {
            this.#elem.forEach(elemem => {
                new NemAdminSzakdogaView(elemem, szuloElem);
            });
        }
    }
}



export default NemAdminSzakdogakView;