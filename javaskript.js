function generateTable() { // funkce generateTable
    const tablediv = document.getElementById('tablediv'); // ziskani id divu ve kterem bude tabulka
    const table = document.createElement('table'); // vytvoreni tabulky
    for (let i = 1; i <= 10; i++) { //rows cyklus 1
        const row = document.createElement('tr');//row create
        for (let j = 1; j <= 10; j++) { //lines cyklus 2
            const cell = document.createElement('td');//cell create
            cell.textContent = i * j; // number calculate
            row.appendChild(cell); // pridani cell do row
        }
        table.appendChild(row); // pridani row do tabulky
    }

    tablediv.appendChild(table); // pridani cele tabulky do divu pro tabulku
}
window.onload = generateTable; // prio nacteni stranky zavolat funkci generateTable
