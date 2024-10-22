function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('dataTable');
    const tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those that don't match the search query
    for (let i = 1; i < tr.length; i++) {
        const tdArray = tr[i].getElementsByTagName('td');
        let rowContainsFilterText = false;

        // Loop through all columns in the row
        for (let j = 0; j < tdArray.length; j++) {
            const td = tdArray[j];
            if (td) {
                if (td.innerText.toUpperCase().indexOf(filter) > -1) {
                    rowContainsFilterText = true;
                    break;
                }
            }
        }
        
        if (rowContainsFilterText) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}
