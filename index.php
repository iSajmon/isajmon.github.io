<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta property="og:title" content="SONE|PROJECTS">
    <meta property="og:image" itemprop="image" content="https://soneprojects.com/assets/img/S1ProjectsLinkLogo.jpg">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://soneprojects.com/">
    <link itemprop="thumbnailUrl" href="https://soneprojects.com/assets/img/S1ProjectsLinkLogo.jpg">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" id="style" media="screen and (min-width: 600px)"/>
    <link rel="stylesheet" href="styleMobile.css" id="styleMobile" media="screen and (max-width: 600px)"/>
    <link rel="stylesheet" href="styleFont.css">
    <link
      rel="icon"
      type="image/x-icon"
      href="/assets/img/S1ProjectsLogo.png"
    />
    
    <script defer src="script.js"></script>
    <title>S1PROJECTS</title>
  </head>
  <body onload="scrollAnimation()" style="margin: 0">
    <div class="load">
      <div class="loader" id="loader"></div>
      <p>ŁADOWANIE STRONY</p>
    </div>
    <div class="main">
      <div class="menu_blur" id="menub">
        <div class="menu" id="menu">
          <img src="assets/img/S1v3.png" alt="logo" />
          <div class="modeSlider"> 
            <div class="sliderCircle" onclick="changeStyle()"></div>
          </div>
          <p style="font-size: 30px;"><b>PROJECTS</b></p>
          <p class="whatsNew" onclick="showPage('whatsNew.html')">what's new?</p>
        </div>
      </div>
      
      <div class="spaceSlide">
        <div class="space">
                    <div class="projekt">
            <img src="assets/img/p18.jpg" alt="p18.jpg"/>
            <div class="przycisk">
              <button onclick="showPage('projects/18')">
                18
              </button>
            </div>
          </div>
          <div class="projekt">
            <img src="assets/img/pportal.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('projects/portal')">
                PORTAL
                <div class="warningBadge" style="border-color: rgb(223, 39, 14); color:rgb(223, 39, 14);">
                  <div class="circle" style="background-color: rgb(223, 39, 14);"></div> PC ONLY
                </div>
              </button>
            </div>
          </div>
          <div class="projekt">
            <img src="assets/img/ka.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('/projects/kalkulatorArgusow')">Kalkulator Argusów
                <div class="warningBadge">
                  <div class="circle"></div> NEW
                </div>
              </button>
            </div>
          </div>
          <div class="projekt">
            <img src="assets/img/MULTIVERSE.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('/projects/multiverse')">
                MULTIVERSE
                <div class="warningBadge" style="border-color: rgb(223, 39, 14); color:rgb(223, 39, 14);">
                  <div class="circle" style="background-color: rgb(223, 39, 14);"></div> PC ONLY
                </div>
              </button>
            </div>
          </div>

          <div class="projekt">
            <img src="assets/img/kp.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('/projects/spalaniePaliwa')">
                Kalkulator Paliwa
              </button>
            </div>
          </div>

          <!--Nieuzywane

        <div class="projekt">
          <img src="TEMPLATETEMPLATE.jpg" alt="TEMPLATETEMPLATE" />
          <div class="przycisk">
            <button onclick="showPage('#')">PROJEKT</button>
          </div>
        </div>
        --></div>
        <div class="space">
          <div class="projekt">
            <img src="assets/img/p18.jpg" alt="p18.jpg" />
            <div class="przycisk">
              <button onclick="showPage('projects/18')">
                18
              </button>
            </div>
          </div>
          <div class="projekt">
            <img src="assets/img/pportal.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('projects/portal')">
                PORTAL
                <div class="warningBadge" style="border-color: rgb(223, 39, 14); color:rgb(223, 39, 14);">
                  <div class="circle" style="background-color: rgb(223, 39, 14);"></div> PC ONLY
                </div>
              </button>
            </div>
          </div>
          <div class="projekt">
            <img src="assets/img/ka.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('/projects/kalkulatorArgusow')">Kalkulator Argusów
                <div class="warningBadge">
                  <div class="circle"></div> NEW
                </div>
              </button>
            </div>
          </div>
          <div class="projekt">
            <img src="assets/img/MULTIVERSE.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('/projects/multiverse')">
                MULTIVERSE
                <div class="warningBadge" style="border-color: rgb(223, 39, 14); color:rgb(223, 39, 14);">
                  <div class="circle" style="background-color: rgb(223, 39, 14);"></div> PC ONLY
                </div>
              </button>
            </div>
          </div>

          <div class="projekt">
            <img src="assets/img/kp.jpg" alt="TEMPLATETEMPLATE" />
            <div class="przycisk">
              <button onclick="showPage('/projects/spalaniePaliwa')">
                Kalkulator Paliwa
              </button>
            </div>
          </div>

          <!--Nieuzywane

        <div class="projekt">
          <img src="TEMPLATETEMPLATE.jpg" alt="TEMPLATETEMPLATE" />
          <div class="przycisk">
            <button onclick="showPage('#')">PROJEKT</button>
          </div>
        </div>
        --></div>
      </div>
      
      <div class="rest">
        <h1>WSZYSTKIE PROJEKTY</h1>
        <div class="restProjects">
          <?php
              
              include 'dbcon.php';

            
              $sql = "SELECT * FROM projects";
              $result = $conn->query($sql);

           
              if ($result->num_rows > 0) {
              
                  $projects = $result->fetch_all(MYSQLI_ASSOC);

              
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
                
              } else {
                  echo "Brak wyników";
              }
              $conn->close();
          ?>
      </div>
  
    
      <footer>
      <div class="logo">
          <img src="assets/img/S1ProjectsLogoTransparent.png" alt="S1ProjectsLogoTransparent">
      </div>
      <div class="links">
        <ul>
          <li><a href="whatsThis.html">what is this?</a></li>
          <li><a href="whatsNew.html">what's new?</a></li>
          <li><a href="mailto:simon@soneprojects.com">send me a mail</a></li>
          <li><a href="plans.html">plans</a></li>
        </ul>        
      </div>
      <div class="copy">
        <p>copyright &copy; 2024 soneprojects</p>
      </div>
    </footer>

    <div class="cookiesWarningHide" id="cookiesWarning">
      <div>
        <p>Strona używa pliki cookies(ciasteczka) do prawidłowego działania </p>
      <p style="font-size: 15px; color: gray; font-weight: normal; margin-top: -20px;">Ten komunikat zostanie ukryty na zawsze po kliknięciu przycisku</p>
      </div>
      <button id="cookiesAccept" onclick="cookiesAccept()">ROZUMIEM</button>
    </div>
  </body>
</html>
