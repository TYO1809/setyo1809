const tableBody = document.getElementById('tableBody');
const totalAmountDisplay = document.getElementById('totalAmount');
let total = 0;

// Membuat tabel dari nomor 1 sampai 54
for (let i = 1; i <= 54; i++) {
    const row = document.createElement('tr');

    const cellNo = document.createElement('td');
    const cellAmount = document.createElement('td');

    cellNo.innerText = i;

    // Input untuk jumlah uang
    const inputAmount = document.createElement('input');
    inputAmount.type = 'number';
    inputAmount.placeholder = 'Isi jumlah uang';
    inputAmount.value = '0';
    inputAmount.oninput = function() {
        calculateTotal();
    };

    cellAmount.appendChild(inputAmount);
    row.appendChild(cellNo);
    row.appendChild(cellAmount);
    tableBody.appendChild(row);
}

// Fungsi untuk menghitung total uang
function calculateTotal() {
    total = 0;
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0; // Menambahkan jumlah uang
    });
    totalAmountDisplay.innerText = total.toLocaleString('id-ID'); // Format Rp
}
