<?php
    $jobs = array(
        new job(
            'Maith&uacute; IT Solutions',
            'Technical lead',
            'Dublin, Ireland',
            new DateTime('2012-01-16'),
            'Present',
            array(
                'Drove the development of multiple mobile applications.',
                'Developed TV guide software in HTML5 for set top boxes, smart TVs and web.',
                'Overhauled the Irish Times News app (iOS, Android), integrating to their existing web infrastructure.',
                'Responsible for client satisfaction by delivering quality products on time and within budget.',
                'Responsible for reviewing CVs, creating recruitment exercises and interviewing candidates for development roles.'
            ) 
        ),
        new job(
            'Paddy Power PLC',
            'Senior PHP Developer',
            'Dublin, Ireland',
            new DateTime('2010-03-08'),
            new DateTime('2012-01-11'),
            array(
                'Our scrum approach to development ensured timely delivery of product phases and stakeholders were kept up to date with development on large projects.',
                'Maintained high performance websites under heavy server load.',
                'Upgraded the in-house CMS for Paddy Power Games and Casino to enable targeted content delivery for different user groups.',
                'Built a staff rostering and payroll processing system used by shop managers for all Paddy Power retail outlets.'
            )
        ),
        new job(
            'Clearweb',
            'Founder &amp; owner',
            'Dublin, Ireland',
            new DateTime('2008-07-01'),
            new DateTime('2010-03-08'),
            array(
                'Created several bespoke content managed websites for clients using hand-coded html and php.',
                'Leveraged Twitter and Facebook APIs, to optimise the clients&#39; online offering.',
                'Provided web content strategy guidance to clients.',
                'Practiced excellent standards in web development to ensure organic SEO performance and accessibility.',
                'Initiated, managed and maintained long-lasting professional client relationships.'
            )
        ),
        new job(
            'Net a Porter',
            'Java Web Developer',
            'London, UK',
            new DateTime('2007-07-01'),
            new DateTime('2008-06-28'),
            array(
                'Redeveloped all of the HTML and CSS during a complete overhaul of the company website.',
                'Created an internal WYSIWYG tool to author promotional emails and newsletter templates.',
                'Designed and built the in house intranet portal, tying it into existing LDAP servers. This enabled seamless integration with existing user logins.',
                'Provided ongoing maintenance to website product pages to optimise the eCommerce purchase flows.'
            )
        ),
        new job(
            'FindMyPast.com',
            'Front end Web Developer',
            'London, UK',
            new DateTime('2006-09-12'),
            new DateTime('2007-06-30'),
            array(
                'Upgraded site standards compliancy in XHTML and CSS.',
                'Coordinated internal knowledge sharing through regular web standards training.',
                'Remodeled html email templates for all marketing campaigns.',
                'Provided ongoing maintenance and enhancements for the company website.'
            )
        ),
        new job(
            'AOL Technologies Ltd',
            'Associate Software Engineer',
            'Dublin, Ireland',
            new DateTime('2005-07-01'),
            new DateTime('2006-06-15'),
            array(
                'Created a web app to monitor RSS feeds from news providers.',
                'Built an XSLT processor to populate XML feeds to databases.',
                'Upgraded servers and software from HPUX to Linux and authored the associated technical documentation.'
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
    <?=date_format($job->get('start_date'), 'F Y'); ?>
    &ndash; 
    <?=$job->get('end_date') === 'Present' ? 'Present':date_format($job->get('end_date'), 'F Y'); ?> 
</h3>
<h4>
    <?=$job->get('company');?>
    as 
    <?=$job->get('position');?>
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