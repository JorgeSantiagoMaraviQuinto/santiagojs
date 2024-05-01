<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios a la oficina de reparto</title>
    <!-- Incluir Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            max-width: 500px;
            margin: auto;
            padding: 20px;
        }
        
        h1 {
            color: red;
        }
    </style>
</head>
<body>
    <img src="https://eloutput.com/productos/hogar/frigorifico-nevera-inteligente/" alt="Frigorífico inteligente">
    <h1>Órdenes recibidas para el despacho</h1>
    <!-- Agregar clases de Bootstrap a la tabla -->
    <table class="table table-bordered table-striped">
        <thead class="thead-dark">
            <tr>
                <th>número</th>
                <th>fecha</th>
                <th>nevera</th>
                <th>producto</th>
                <th>cantidad</th>
                <th>pesos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2023-09-27 6:16:38</td>
                <td>neveraChachones</td>
                <td>huevos</td>
                <td>10</td>
                <td>30000</td>
            </tr>
        </tbody>
    </table>
    <!-- Agregar el hipervínculo -->
    <a href="https://docs.google.com/spreadsheets/d/1hpbIyZX6wrUl_EOqo0g5oa-0nEndDNKhAJFc6kAYpXQ/edit#gid=0">Haz click aquí para ver tabla de datos</a>
    <!-- Embeber el iframe -->
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBmMuLOIjDO-wAJt69TTZbJQ4INzdUjoG5yP8ZXsr_xpSUIOKv9ZBI5zIp-uVwD-PiEL1Is1fDI--j/pubhtml?widget=true&amp;headers=false" width="250%"></iframe>
    <!-- Incluir Bootstrap JS (opcional, si necesitas funcionalidad de Bootstrap) -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
