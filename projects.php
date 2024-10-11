<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php

// Zapytanie SQL do pobrania projektów
$sql = "SELECT nazwa, url, photo, badge, description FROM projects";
$result = $conn->query($sql);

// Tworzymy pustą tablicę do przechowywania wyników
$projects = [];

if ($result->num_rows > 0) {
    // Pobieramy wszystkie wyniki jako tablicę asocjacyjną
    $projects = $result->fetch_all(MYSQLI_ASSOC);
}

$conn->close();

// Pętla foreach dla każdego projektu
foreach ($projects as $project) {
    ?>
    <div class="projektv2" onclick="showPage('<?php echo $project['url']; ?>')">
        <img src="assets/img/<?php echo $project['photo']; ?>" alt="<?php echo $project['nazwa']; ?>" />
        <div class="text">
            <h2>
                <?php echo $project['nazwa']; ?>
                <?php if (!empty($project['badge'])): ?>
                    <?php echo $project['badge']; ?>
                <?php endif; ?>
            </h2>
            <p><?php echo $project['description']; ?></p>
        </div>
    </div>
    <?php
}
?>

</body>
</html>

