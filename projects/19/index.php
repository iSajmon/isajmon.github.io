<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zaproszenie</title>
    <link rel="stylesheet" href="style.css" media="screen and (min-width: 600px)">
    <link rel="stylesheet" href="styleMobile.css" media="screen and (max-width: 600px)">
    <script src="script.js"></script>
    <script src="/script.js"></script>
</head>
<body>
    <div class="loginBox" id="loginBox">
        <h1>ZAPROSZENIE</h1>
        <input type="text" class="name" placeholder="Imię">
        <input type="text" class="lastName" placeholder="Nazwisko">
        <button onclick="approved()">WEJDŹ</button>
    </div>
    <main class="mainPart" style="display: none;"> 
        <div class="firstPart">
            <div class="invitation">
                <p>Zapraszam <!--php imie i nazwisko--> na moje dziewiętnaste urodziny które odbędą się w dniach 14-15 czerwca 2024 </p>
            </div>
            <div class="yourIp">
            <?php
                    $ip = $_SERVER['REMOTE_ADDR'];
                    echo "<p>Twoje IP: $ip</p>";
            ?>
            </div>
        </div>
        
        <div class="location">
            <div class="maps">
                <div class="biala" style="transition: 1s; display: block;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.3924497916005!2d19.911150000000003!3d51.285501599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719ed09b4ed8da1%3A0x381173fe2664fb37!2sO%C5%9Brodek%20Wczasowo-Kolonijny%20BIA%C5%81A!5e0!3m2!1spl!2spl!4v1716395221553!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="namioty namiotyHide" style="transition: 1s; display: none;">
                <img src="assets/Zrzut ekranu 2024-05-23 174825.png" alt="">
            </div>
            </div>
            
            <div class="btns">
                <div class="btn btnActive" id="btnBiala" onclick="changeLocation('Domki Biała')" style="transition: 1.5s;"></div>
                <div class="btn" id="btnNamioty" onclick="changeLocation('Namioty')" style="transition: 1.5s;"></div>
            </div>
                <h1 id="locationText">Domki Biała</h1>
            
        </div>
    </main>
   
</body>
</html>