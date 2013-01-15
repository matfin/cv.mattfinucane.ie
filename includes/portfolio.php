<?php 
    $portfolio_items = array(
        /*
         *  Mobile work
         */
        new portfolioitem(
            'The Irish Times', 
            'http://tinyurl.com/bfg42q9',
            'mobile/irishtimes.jpg', 
            'The Irish Times - a major broadsheet newspaper in Ireland, gave us the task of overhauling their app for iPhone and Android platforms.',
            'As one of the lead developers on this project, I was responsible for smoothly integrating existing news infrastructure into a fast, feature rich and robust app.',
            'mobile',
            array(
                'As development lead I liased with other developers in planning app arhcitecture.',
                'Worked with client to ensure smooth integration of existing technologies into the app.',
                'Planned and developed major parts of the app in Objective C, such as the offline storage feature.',
                'Used a web based beta release platform with integrate crash reporting tools.',
                'Released periodic updates to the app for internal testing and bug fixing.',
                'Used CocoaPods to easily manage third party libraries and dependencies.'
            )
        ),
        new portfolioitem(
            'NewsWhip', 
            'http://tinyurl.com/aoqs6ps',
            'mobile/newswhip.jpg', 
            'NewsWhip are a Dublin based startup who have devised a system to deliver news stories to users based on their popularity.',
            'Using their existing feed infrastructure, I was able to create a cross platform app using html5 and javascript.',
            'mobile',
            array(
                'Worked as lead developer on this project and provided support to the front end designers.',
                'Used a cross platform Javascript MVC based framework along with html5 and Compass SCSS',
                'PhoneGap was used to leverage some native functionality vanilla Javascript cannot provide',
                'Deployed test versions of the app regularly using the BetaBuilder deployment tool.',
                'Released the app on the iTunes app store using iTunes Connect.'
            )
        ),
        new portfolioitem(
            'Three Football', 
            'http://tinyurl.com/apkyk34',
            'mobile/threefootball.jpg', 
            'As official Sponsors of the Irish soccer team, my company were asked by Three Mobile to create a cross platform app containing team news, fixtures and content generated by fans.',
            'We set about creating an app that would run on even the most simple Android based devices.',
            'mobile',
            array(
                'As lead developer I planned the app architecture with the rest of the team.',
                'The app was developed using a cross platform MVC framework.',
                'Communicated with Three to ensure smooth delivery of live match commentary data.',
                'Optimised the app so it would work on lower powered iOS and Android devices.',
                'Launched the app in the Summer of 2012'
            )
        ),
        new portfolioitem(
            'Photography', 
            false,
            'mobile/photography.jpg', 
            'Native app pulling my photos from flickr',
            'solution',
            'mobile',
            array(
                
            )
        ),
        
        /*
         *  Web work
         */
        new portfolioitem(
            'Angels Beacons of Hope', 
            false,
            'web/angels-beacons-of-hope.jpg', 
            'This site was created pro&ndash;bono as part of a collaborative team effort in late 2009.',
            'solution',
            'web',
            array(
                
            )
        ),
        new portfolioitem(
            'Dress For Success Dublin', 
            'http://www.dressforsuccessdublin.org',
            'web/dress-for-success-dublin.jpg', 
            'One of the entries for 24 The Web, a 24 hour design challenge for charities. Site uses Perch as a cms and CodeIgniter for storing and retrieving contact information.',
            'solution',
            'web',
            array(
                
            )
        ),
        new portfolioitem(
            'iBox streaming TV', 
            'http://www.ibox.ie',
            'web/ibox.jpg', 
            'Web based TV guide interface for a subscription based TV streaming service in Ireland.',
            'solution',
            'web',
            array(
                
            )
        ),
        new portfolioitem(
            'LittleGreen',
            false,
            'web/littlegreen.jpg', 
            'Wordpress based site for managing content. Integrated Facebook Connect for social sharing and Google Analytics for tracking.',
            'solution',
            'web',
            array(
                
            )
        ),
        new portfolioitem(
            'PaddyPower Casino', 
            'http://casino.paddypower.com',
            'web/paddypower-casino.jpg', 
            'Created with custom built CMS using CodeIgniter for front end and back end.',
            'solution',
            'web',
            array(
                
            )
        ),
        new portfolioitem(
            'PaddyPower Games', 
            'http://games.paddypower.com',
            'web/paddypower-games.jpg', 
            'Redesigned and integrated custom cms using CodeIgniter framework.',
            'solution',
            'web',    
            array(
                
            )
        ),
        new portfolioitem(
            'Rhendy Chartered Accountants', 
            'http://www.rhendy.ie',
            'web/rhendy.jpg', 
            'Content managed with Perch CMS and uses Facebook Connect and Twitter API for social sharing.',
            'solution',
            'web',
            array(
                
            )
        ),
        new portfolioitem(
            'Vantastival', 
            'http://www.vantastival.com',
            'web/vantastival.jpg', 
            'Content managed using wordpress with integrated Facebook and Twitter social plugins for sharing content.',
            'solution',
            'web',
            array(
                
            )
        )
    );
?>
<h2>
    Portfolio
</h2>
<button class="prev"></button>
<button class="next"></button>
<div style="width: <?= (count($portfolio_items) + 1) * 800; ?>px">
    <?php
        foreach($portfolio_items as $index => $portfolio_item)
        {
    ?>
    <figure data-index="<?=$index?>">
        <img src="<?=$base . '/assets/portfolio/' . $portfolio_item->get('image_path'); ?>" width="600" height="450" alt="<?=$portfolio_item->get('title'); ?>" />
        <figcaption data-showing=false>
            <h3>
                <?=$portfolio_item->get('title');?>
            </h3>
            <p>
                <?= $portfolio_item->get('brief'); ?>
            </p>
            <dl>
                <dt>
                
                </dt>
            </dl>
        </figcaption>
    </figure>
    <?      
        }
    ?>
</div>