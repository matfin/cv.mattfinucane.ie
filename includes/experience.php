<?php
    $jobs = array(
        new job(
            'Maith&uacute; IT Solutions',
            'Lead Developer',
            'Dublin, Ireland',
            new DateTime('2012-01-16'),
            new DateTime(),
            array(
                'Worked on a variety of native and cross platform mobile apps.',
                'Created TV Guide software to run on an STB, Google TV and the web.',
                'Coordinated project workload and tasks with internal and external developers.',
                'Researched and used a wide variety of tools and platforms.',
                'Provided support to internal developers and front end designers as technical lead.'
            ) 
        ),
        new job(
            'Paddy Power PLC',
            'Senior PHP Developer',
            'Dublin, Ireland',
            new DateTime('2010-03-08'),
            new DateTime('2012-01-11'),
            array(
                'Worked as a PHP and front end developer creating robust cross browser compatible code.',
                'Developed a web based payroll application for use in the shops across the country.',
                'Developed the CMS and front end for Paddy Power Games and Casino.',
                'Redeveloped the Paddy Power mobile games CMS to include support for multiple platforms.',
                'Configured web services to deliver optimal performance for large numbers of visitors.'
            )
        ),
        new job(
            'Clearweb',
            'Owner (self employed)',
            'Dublin, Ireland',
            new DateTime('2008-07-01'),
            new DateTime('2010-03-08'),
            array(
                'Founded my own business working freelance on web sites and web applications.',
                'Created a webapp to create and manage competitions on Facebook for a PR firm.',
                'Created a web based sport social media platform in the DCU Invent Center.',
                'Hand coded websites to adhere to industry standards in design and accessibility.'
            )
        ),
        new job(
            'Net a Porter',
            'Java Web Developer',
            'London, UK',
            new DateTime('2007-07-01'),
            new DateTime('2008-06-28'),
            array(
                'Worked as a font and back end developer on a complete design overhaul of the site.',
                'Created an internal WYSIWYG tool to create promotional emails and newsletter templates.',
                'Created the front and back end for the internal employee web portal.'
            )
        ),
        new job(
            'AOL Technologies Ltd',
            'Associate Software Engineer',
            'Dublin, Ireland',
            new DateTime('2005-07-01'),
            new DateTime('2006-06-15'),
            array(
                'Worked on an XSLT framework to store formatted news RSS feeds to a common database schema.',
                'Created a web application to store and monitor information on incoming news RSS feeds.',
                'Created and installed an issue tracking and ticketing system for internal developers.',
                'Ported feed processing infrastructure from HPUX to Red Hat Linux.' 
            )
        )
    );
?>

<h2>
    Work Experience
</h2>
<?php
     /*
     * company, 
     * position,
     * location,
     * start_date,
     * end_date,
     * roles
     */
    foreach($jobs as $job){
?>
<h3>
    <?= $job->get('company') . ' &ndash; ' . $job->get('position'); ?>
</h3>
<h4>
    <?= $job->get('location'); ?>. <time datetime="<?= date_format($job->get('start_date'), 'Y-m-d'); ?>"><?= date_format($job->get('start_date'), 'F Y'); ?></time> to <time datetime="<?= date_format($job->get('end_date'), 'Y-m-d'); ?>"><?= date_format($job->get('end_date'), 'F Y'); ?></time>
</h4>
<ol>
<?php
    foreach($job->get('roles') as $role){
?>
<li>
    <?= $role; ?>
</li>
<?php
    }
?>
</ol>
<?php
    }
?>


<!-- Company -->

<? /* ?>

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
  
<? */ ?>
 