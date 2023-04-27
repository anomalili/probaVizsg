class AdminSzakdogaView {
    #elem;

    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log(elem);
        szuloElem.append(`

                   

                <tr>
                
                <td>${elem.szakdoga_nev}</td>
                <td>${elem.tagokneve}</td>
                <td><a href="${elem.githublink}">${elem.githublink}</a></td>
                <td><a href="${elem.oldallink}">${elem.oldallink}</a></td>
                <td><button id="mod" class="Modosit-button" data-idMod=${elem.id}>módosít</button></td>
                <td><button id="tor" class="Torles-button" data-idTor=${elem.id}>töröl</button></td>
                
                </tr>

                

                        `);
    }
}

class AdminSzakdogakView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        this.divElem = szuloElem.children("div");

        szuloElem.append(`
        <table id="tabla">   
        <th>Szakdolgozat címe</th>  
        <th>Készítők neve</th>  
        <th>Github link</th>  
        <th>Szakdolgozat elérhetősége</th>
        <th></th>
        <th></th>


        </table>     
        `
        );



      const szuloElemem = $('#tabla');
        if (Array.isArray(elem)) {
            this.#elem.forEach(elemem => {
                new AdminSzakdogaView(elemem, szuloElemem);
            });
        }
    }
}



export default AdminSzakdogakView;