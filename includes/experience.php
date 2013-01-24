<?php
    $jobs = array(
        new job(
            'Maith&uacute; IT Solutions',
            'Technical lead',
            'Dublin, Ireland',
            new DateTime('2012-01-16'),
            new DateTime(),
            array(
                'As technical lead, I am responsible for driving the planning and development efforts on a wide variety of apps.',
                'Working closely with our design team, the client, and external contractors, I drive development efforts to ensure the product is delivered on time and within budget.',
                'I am required to provide support and feedback to our internal developers and regularly communicate progress with the client',
                'I also use a variety of tools and methodologies to ensure fast delivery of a quality product.' 
            ) 
        ),
        new job(
            'Paddy Power PLC',
            'Senior PHP Developer',
            'Dublin, Ireland',
            new DateTime('2010-03-08'),
            new DateTime('2012-01-11'),
            array(
                'As senior web developer, I was responsible for delivering high performance web applications for the company&#39;s business channels (Games, Casino etc).',
                'I created standards compliant, cross browser compatible code to ensure maximum reach to users.',
                'I was responsible for planning and implementing bespoke content management systems for internal company use.',
                'I wrote a web based application for internal payroll processing which was deployed to all shops in the country.'
            )
        ),
        new job(
            'Clearweb',
            'Founder &amp; owner',
            'Dublin, Ireland',
            new DateTime('2008-07-01'),
            new DateTime('2010-03-08'),
            array(
                'Developed hand coded high quality websites and web applications adhering to industry standards in design and accessibility.',
                'My portfolio of work in Clearweb included several web applications across a variety of sectors, including e-commerce, self service applications and social media.',
                'Initiated, managed and maintained good client relationships.'
            )
        ),
        new job(
            'Net a Porter',
            'Java Web Developer',
            'London, UK',
            new DateTime('2007-07-01'),
            new DateTime('2008-06-28'),
            array(
                'Worked as a front and back end developer on a full redesign of their site.',
                'Created an internal WYSIWYG tool to author promotional emails and newsletter templates.',
                'Planned and implemented the front and back end for the company&#39s employee web portal.'
            )
        ),
        new job(
            'Find My Past',
            'Front end Web Developer',
            'London, UK',
            new DateTime('2006-09-12'),
            new DateTime('2007-06-30'),
            array(
                'Refactored the entire website html for improved performance, usability and accessibility.',
                'Provided regular internal training on web standards to the rest of the development team.',
                'Created html based templates for newsletter and promotional emails.',
                'Provided ongoing support and maintenance for the company website.'
            )
        ),
        new job(
            'AOL Technologies Ltd',
            'Associate Software Engineer',
            'Dublin, Ireland',
            new DateTime('2005-07-01'),
            new DateTime('2006-06-15'),
            array(
                'Created a web application to store and monitor information on incoming news RSS feeds.',
                'Worked on an XSLT framework to store formatted XML feeds to a common database schema.',
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
    <?=date_format($job->get('start_date'), 'F Y'); ?>
    &ndash; 
    <?=date_format($job->get('end_date'), 'F Y'); ?> 
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