<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabel Jumlah Uang</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        table {
            width: 60%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        #total {
            font-weight: bold;
            font-size: 1.2em;
        }
    </style>
</head>
<body>

    <h2>Tabel Jumlah Uang</h2>
    <table>
        <thead>
            <tr>
                <th>NO</th>
                <th>Jumlah Uang (Rp)</th>
            </tr>
        </thead>
        <tbody id="tableBody">
            <!-- Baris Tabel Akan Ditambahkan Oleh JavaScript -->
        </tbody>
    </table>
    <div id="total">Total Uang: Rp <span id="totalAmount">0</span></div>

    <script>
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
    </script>

</body>
</html>

