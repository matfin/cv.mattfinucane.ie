<?php 
    $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    $base = $protocol . '://' . $_SERVER['HTTP_HOST'];
    include_once('classes/portfolioitem.php'); 
    include_once('classes/job.php'); 
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Matthew Finucane &ndash; Curriculum Vitae</title>
        <link rel="stylesheet" type="text/css" href="assets/css/stylesheets/screen.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="assets/css/stylesheets/print.css" media="print" />
        <script type="text/javascript" src="assets/js/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" src="assets/js/script.js"></script>
    </head>
    <body>
        <header>
            <h1>
                Matthew Finucane &ndash; Curriculum Vitae
            </h1>
            <a href="mailto:matfin@gmail.com" title="Email Matt Fimucane">
                email: matfin@gmail.com
            </a>
            <a href="tel:+353861945324" title="Phone Matt Finucane">
                tel: +353 (0)86 1945324
            </a>
        </header>
        <section id="profile">
            <?php include_once('includes/profile.php'); ?>
        </section>
        <section id="professional_experience">
            <?php include_once('includes/experience.php'); ?>
        </section>
        <section id="technical_skills">
            <?php include_once('includes/skills.php'); ?>
        </section>
        <section id="portfolio">
            <?php include_once('includes/portfolio.php'); ?>
        </section>             
        <section id="qualifications">
            <?php include_once('includes/qualifications.php'); ?>
        </section>
        <section id="interests">
            <?php include_once('includes/interests.php'); ?>
        </section>
        <footer>
            <!-- empty  -->
        </footer>
    </body>
</html>
