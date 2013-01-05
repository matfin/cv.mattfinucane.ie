<?php 
    $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    $base = $protocol . '://' . $_SERVER['HTTP_HOST'];
    include_once('classes/portfolioitem.php'); 
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Matt Finucane &ndash; Curriculum Vitae</title>
        <link rel="stylesheet" type="text/css" href="assets/css/stylesheets/screen.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="assets/css/stylesheets/print.css" media="print" />
        <script type="text/javascript" src="assets/js/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" src="assets/js/script.js"></script>
    </head>
    <body>
        <header>
            <h1>
                Matt Finucane &ndash; Curriculum Vitae
            </h1>
            <a href="mailto:matfin@gmail.com" title="Email Matt Fimucane">
                email: matfin@gmail.com
            </a>
            <a href="tel:+353861945324" title="Phone Matt Finucane">
                tel: +353 (0)86 1945324
            </a>
        </header>
        <section id="profile">
            <h2>
                Profile
            </h2>
            <p>
                I am a web and mobile application developer with over seven years industry experience working on a variety of projects in different settings both at home and abroad. 
            </p>
            <p>
                My passion lies in technology and I enjoy keeping up with and working with the latest technology and practices in the industry. I am self&ndash;taught in a lot of disciplines, a fast learner and produce work of excellent quality. 
            </p>
        </section>
        <section id="professional_experience">
            <h2>
                Professional Work Experience
            </h2>
            <!-- Company -->
            <h3>
                Maith&uacute; IT Solutions
            </h3>
            <h4>
                Dublin &ndash; Ireland. <time datetime="2012-01-16">January</time> to <time datetime="<?=date('Y-m-d')?>">Present</time>
            </h4>
            <h5 data-languages="java, objective C, javascript, html5">
                Mobile development
            </h5>
            <p>
                Worked on a variety of mobile apps using both native and cross platform frameworks for major clients such as Hutchison 3G Ireland, NewsWhip and The Irish Times.
            </p>
            <h5>
                Technical lead
            </h5>
            <p>
                As technical lead, I was responsible for making decisions on the best tools and frameworks to use when working on different projects. I also worked closely with other developers and designers internally and externally to provide advice and support throughout the course of our projects.
            </p>
            <h5>
                Web applications
            </h5>
            <p>
                I planned and implemented TV guide and video streaming software for a TV set top box. I also extended this project to work on HLS compliant devices, such as the Google TV box and Safari browser for Mac.
            </p>
            <p>
                I also worked on a video storage and retrieval solution for scanning and encoding several hours of recorded video. Both these projects were developed using the Microsoft MVC3 web application framework and deployed to IIS servers.
            </p>
            <!-- Company -->
            <h3>
                Paddy Power PLC
            </h3>
            <h4>
                Dublin &ndash; Ireland. <time datetime="2010-03-08">March 2010</time> to <time datetime="2012-01-16">January 2012</time>
            </h4>
            <h5 data-languages="php, javascript, html5">
                Payroll System
            </h5>
            <p>
                Worked with members of the Finance and HR team in developing a payroll web application for deployment to shops across the country.
            </p>
            <h5>
                Business channels
            </h5>
            <p>
                Worked on rebuilding the CMS and front end for Paddy Power Casino from scratch and was one of the original developers involved in the project from the beginning. I was also involved with working on the redesign and redevelopment of the Paddy Power Games website.
            </p>
            <h5>
                Paddy Power Mobile CMS
            </h5>
            <p>
                Redeveloped and extended the Paddy Power Mobile Games CMS to include support for games available on multiple platforms.
            </p>
            <!-- Company -->
            <h3>
                Self Employed
            </h3>
            <h4>
                Dublin &ndash; Ireland. <time datetime="2008-07-01">July 2008</time> to <time datetime="2010-03-08">March 2010</time>
            </h4>
            <h5 data-languages="php, javascript, html5">
                Clearweb
            </h5>
            <p>
                Founded my own web development and design business and worked with several clients, including a major Dublin based PR firm. For them, I created a content management system to allow them to post competitions to their clients Facebook page.
            </p>
            <h5>
                DCU Invent Center
            </h5>
            <p>
                Designed and built a news and communication tool to allow coaches to easily manage their teams and interact with their supporters. For this, we received support from the FCEB and Invent Center in DCU. 
            </p>
            <h5>
                Web Development
            </h5>
            <p>
                All websites and web applications were hand coded in HTML and CSS to W3C specifications and were designed to match industry standards and best practice in usability and accessibility. 
            </p>
             <!-- Company -->
            <h3>
                Net&ndash;&Aacute;&ndash;Porter
            </h3>
            <h4>
                London &ndash; UK. <time datetime="2007-07-01">July 2007</time> to <time datetime="2008-07-01">July 2008</time>
            </h4>
            <h5 data-languages="php, javascript, html5">
                Website redesign
            </h5>
            <p>
                Worked as part of a team of designers, developers and UX consultants to completely redesign and redevelop the website to facilitate SEO, content updates and front end usability. 
            </p>
            <h5>
                Web Applications
            </h5>
            <p>
                Designed and developed the comapny&#39;s internal corporate intranet for use by staff members in the UK and US. I also developed a WYSIWYG tool to allow the marketing team to build templated HTML emails.
            </p>
        </section>
        <section id="technical_skills">
            <h2>
                Technical Skills
            </h2>
            <dl>
                <dt>
                    Programming languages
                </dt>
                <dd>
                    Java
                </dd>
                <dd>
                    PHP
                </dd>
                <dd>
                    Objective C
                </dd>
                <dd>
                    Javascript
                </dd>
                <dd>
                    HTML5
                </dd>
                <dd>
                    C#
                </dd>
                <dd>
                    C++
                </dd>
            </dl>
            <dl>
                <dt>
                    Frameworks
                </dt>
                <dd>
                    Android
                </dd>
                <dd>
                    Cocoa UIKit (iOS)
                </dd>
                <dd>
                    Sencha Touch 2
                </dd>
                <dd>
                    PhoneGap
                </dd>
                <dd>
                    Compass SASS (CSS)
                </dd>
                <dd>
                    Razr
                </dd>
                <dd>
                    C# MVC3
                </dd>
                <dd>
                    jQuery
                </dd>
                <dd>
                    CodeIgniter PHP
                </dd>
            </dl>
            <dl>
                <dt>
                    Version Control
                </dt>
                <dd>
                    Git
                </dd>
                <dd>
                    Gitosis
                </dd>
                <dd>
                    Mercurial
                </dd>
                <dd>
                    SVN
                </dd>
                <dd>
                    SVK
                </dd>
                <dd>
                    CVS
                </dd>
            </dl>
            <dl>
                <dt>
                    Project management
                </dt>
                <dd>
                    Jira
                </dd>
                <dd>
                    Redmine
                </dd>
                <dd>
                    Assembla
                </dd>
                <dd>
                    BaseCamp
                </dd>
                <dd>
                    Google Docs
                </dd>
                <dd>
                    Scrum
                </dd>
            </dl>
            <dl>
                <dt>
                    IDEs
                </dt>
                <dd>
                    Xcode
                </dd>
                <dd>
                    Eclipse
                </dd>
                <dd>
                    Netbeans
                </dd>
                <dd>
                    Visual Studio 2010
                </dd>
                <dd>
                    IBM WebSphere Studio
                </dd>
            </dl>
            <dl>
                <dt>
                    Databases &amp; Infrastructure
                </dt>
                <dd>
                    Unix/Linux 
                </dd>
                <dd>
                    OSX
                </dd>
                <dd>
                    Apache
                </dd>
                <dd>
                    Microsoft IIS
                </dd>
                <dd>
                    Microsoft SQL Server 
                </dd>
                <dd>
                    Linq
                </dd>
                <dd>
                    MySQL
                </dd>
            </dl>
        </section>
        <section id="portfolio">
            <h2>
                Portfolio
            </h2>
            <button class="prev">Back</button>
            <button class="next">Next</button>
            <?php include_once('includes/portfolio.php'); ?>
        </section>             
        <section id="qualifications">
            <h2>
                Qualifications
            </h2>
            <h3>
                BSc (Hons) in Computer Applications
            </h3>
            <h4>
                Dublin City University. <time datetime="2001-09-26">September 2001</time> to <time datetime="2005-06-10">June 2005</time>
            </h4>
            <p>
                This four year degree course focuses on the fundamentals of computing and business. We learned the basics of programming, the software development life&ndash;cycle and how businesses interact with computers.
            </p>
            <p>
                My final year project was a 2D scrolling platform video game for mobile phones, developed using J2ME and run on entry level Nokia phones.
            </p>
            <ol>
                <li>
                    <a href="http://www.mattfinucane.ie/docs/Ero-Technical-Manual.pdf" title="Project Technical Manual">Technical Manual</a>
                </li>
                <li>
                    <a href="http://www.mattfinucane.ie/docs/Ero-User-Manual.pdf" title="Project User Manual">User Manual</a>
                </li>
                <li>
                    <a href="http://www.mattfinucane.ie/docs/animation_example.java" title="Project Source Manual">Source code</a>
                </li>
            </ol>
        </section>
        <section id="interests">
            <h2>
                Interests
            </h2>
            <p>
                My main interests lie in technology, the web, game development and how people interact with these. I am a self&ndash; taught iOS and Android developer and am working on a few of my own projects. My code can be seen on <a href="http://github.com/matfin" title="Matt Finucane on GitHub">GitHub</a>.
            </p>
            <p>
                I have also worked on several pro&ndash;bono websites and projects for individuals and organisations starting out. In 2011 I took part in the <a href="http://24theweb.com/about" title="24 The Web Design Challenge">24 The Web Design Challenge</a> and was lead developer in a team of seven people.
            </p>
        </section>
        <footer>
            <!-- empty  -->
        </footer>
    </body>
</html>
