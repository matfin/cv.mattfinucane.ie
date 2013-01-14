<?php
    $jobs = array(
        new job(
            'Maith&uacute; IT Solutions',
            'Technical lead',
            'Dublin, Ireland',
            new DateTime('2012-01-16'),
            new DateTime(),
            array(
                'Technical lead responsibilities included coordinating work between internal and external developers, also providing them with support and direction.',
                'Advised the team on most appropriate tools and framewoks to use for projects based on in-depth research and prior experience.',
                'Lead a team of developers working on a variety of native and cross platform mobile apps for clients including The Irish Times, Three Mobile and NewsWhip.',
                'Created TV Guide software to run on a digital set tob box, Google TV and the web.'
            ) 
        ),
        new job(
            'Paddy Power PLC',
            'Senior PHP Developer',
            'Dublin, Ireland',
            new DateTime('2010-03-08'),
            new DateTime('2012-01-11'),
            array(
                'Involved in long-term projects from planning to completion and them maintenance.',
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
                'Founded a web consultancy, working on websites and web applications which were hand coded to adhere to industry standards in design and accessibility.',
                'Consulted with clients to deliver cost effective and practical solutions for their needs.',
                'Projects included several websites for small businesses, a sport social media platform and a CMS to update content on Facebook for a PR firm.'
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
                'Created an internal WYSIWYG tool to author promotional emails and newsletter templates.',
                'Created the front and back end for the internal employee web portal.'
            )
        ),
        new job(
            'Find My Past',
            'Front end Web Developer',
            'London, UK',
            new DateTime('2006-09-12'),
            new DateTime('2007-06-30'),
            array(
                'Refactored website html for improved performance, usability and accessibility.',
                'Created html based templates for newsletter and promotional emails.',
                'Hand coded microsites including Ancestors On Board.',
                'Provided ongoing support and maintenance for the main website.'
            )
        ),
        new job(
            'AOL Technologies Ltd',
            'Associate Software Engineer',
            'Dublin, Ireland',
            new DateTime('2005-07-01'),
            new DateTime('2006-06-15'),
            array(
                'Worked on an XSLT framework to store formatted XML feeds to a common database schema.',
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