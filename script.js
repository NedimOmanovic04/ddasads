// Funkcija za prebacivanje stanja stabla (proširiti/skupiti)
function toggleTreeItem(node) {
    // Pronalazimo roditeljski tree-item element
    const treeItem = node.parentElement;
    
    // Pronalazimo tree-children element (subtree) koristeći DOM
    const children = treeItem.querySelector('.tree-children');
    
    // Pronalazimo toggle-icon (znak + ili -) koristeći DOM
    const icon = node.querySelector('.toggle-icon');
    
    // Provjeravamo je li trenutno prošireno ili skupjeno
    if (children.classList.contains('expanded')) {
        // Skupiti - sakriti podstablo
        children.classList.remove('expanded');
        icon.textContent = '+';
    } else {
        // Proširiti - prikazati podstablo
        children.classList.add('expanded');
        icon.textContent = '-';
    }
}

// Inicijalizacija kada se DOM učita
document.addEventListener('DOMContentLoaded', function() {
    // Pronalazimo sve tree-node elemente koristeći DOM
    const treeNodes = document.querySelectorAll('.tree-node');
    
    // Dodajemo event listener na svaki tree-node koristeći DOM
    treeNodes.forEach(function(node) {
        node.addEventListener('click', function() {
            toggleTreeItem(this);
        });
    });
});

