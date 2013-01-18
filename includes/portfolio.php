<?php 
    $portfolio_items = array(
        /*
         *  Mobile work
         */
        new portfolioitem(
            'The Irish Times iOS/Android', 
            'https://itunes.apple.com/ie/app/id365544593?mt=8&affId=1736887',
            'http://is.gd/ZrU6cB',
            'web/irishtimes.jpg', 
            'printlogos/irishtimes.png',
            'qrcodes/irishtimes.png',
            'The Irish Times - a major broadsheet newspaper in Ireland, gave us the task of overhauling their app for iPhone and Android platforms.',
            'As one of the lead developers on this project, I was responsible for smoothly integrating existing news infrastructure into a fast, feature rich and robust app.',
            array(
                'Developed natively in Objective C and Java.',
                'Downloads and caches content concurrently to ensure smooth user interface.',
                'Used a web based beta testing and crash reporting tool to pinpoint problems.'
            )
        ),
        new portfolioitem(
            'NewsWhip', 
            'https://itunes.apple.com/ie/app/id569523615?mt=8&affId=1736887',
            'http://is.gd/yXEvbw',
            'web/newswhip.jpg', 
            'printlogos/newswhip.png',
            'qrcodes/newswhip.png',
            'NewsWhip are a Dublin based startup who have devised a system to deliver news stories to users based on their popularity.',
            'Using their existing feed infrastructure, I was able to create a cross platform app using html5 and javascript.',
            array(
                'Developed cross platform for easier portability to other devices.',
                'Makes use of most existing infrastructure to minimise back end development effort.',
                'Content cached to minimise impact on server infrastructure and device bandwidth.'
            )
        ),
        new portfolioitem(
            'Three Football', 
            'https://itunes.apple.com/ie/app/id525701972?mt=8&affId=1736887',
            'http://is.gd/AnVBKS',
            'web/threefootball.jpg', 
            'printlogos/threefootball.png',
            'qrcodes/threefootball.png',
            'As official Sponsors of the Irish soccer team, my company were asked by Three Mobile to create a cross platform app containing team news, fixtures and content generated by fans.',
            'We set about creating an app that would run on even the most simple Android based devices.',
            array(
                'App downloads and caches fixtures, match results live match commentary.',
                'For maximum reach this app is optimised to run on low powered devices.',
                'Content is populated using a widely used content management system.'
            )
        ),
        
        /*
         *  Web work
         */
        new portfolioitem(
            'Dress For Success Dublin', 
            'http://www.dressforsuccessdublin.org',
            'http://is.gd/RgLjdm',
            'web/dress-for-success-dublin.jpg', 
            'printlogos/dress-for-success-dublin.png',
            'qrcodes/dress-for-success-dublin.png',
            'This site for an international charity was one of three developed by a team of seven people as part of the 24 The Web design challenge.',
            'I worked as lead developer within a team of six other people. My responsibility was to set up the server and content management infrastructure and integrate the final design.',
            array(
                'Site comes integrated with Perch, a lightweight content management system.',
                'CRM allows site owners to easily access volunteers information.'
            )
        ),
        new portfolioitem(
            'iBox streaming TV', 
            'http://www.ibox.ie',
            'http://is.gd/4M5BoS',
            'web/ibox.jpg', 
            'printlogos/ibox.png',
            'qrcodes/ibox.png',
            'iBox are a new internet based subscription TV streaming service launched in 2012 in Ireland. My task was to develop their TV guide interface for deployment across multiple devices.',
            'I designed and created the server infrastructure needed to load channel and video data. I also created the front end TV guide interface.',
            array(
                'High performing web based interface optimised to work on devices with limited capacity.',
                'Fresh TV channel data downloads in the background and is unobtrusive to the user.',
                'Interface created using jQuery and html5 for easy portability to new TV technologies.'
            )
        ),
        new portfolioitem(
            'PaddyPower Casino', 
            'http://casino.paddypower.com',
            'http://is.gd/0SRZoj',
            'web/paddypower-casino.jpg', 
            'printlogos/paddypower-casino.png',
            'qrcodes/paddypower-casino.png',
            'An overhaul was needed for the The Paddy Power Casino website to deliver a wider selection of games and customised content to the customer.',
            'The site was redeveloped and redesigned with a custom built CMS and access to a wider variety of games.',
            array(
                'Optimised delivery of images, CSS and Javascript to minimise load on servers.',
                'CMS developed to allow content owners to deliver custom content to customer groups.',
                'Smooth and secure integration of website with existing infrastructure.'
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
        <img class="img-screen" src="<?=$base . '/assets/portfolio/' . $portfolio_item->get('image_path'); ?>" width="600" height="450" alt="<?=$portfolio_item->get('title'); ?>" />
        <img class="img-print" src="<?=$base . '/assets/portfolio/' . $portfolio_item->get('logo_path'); ?>" width="150" height="100" alt="<?=$portfolio_item->get('title');?>" />
        <img class="img-qrcode" src="<?=$base . '/assets/portfolio/' . $portfolio_item->get('qr_code'); ?>" width="100" height="100" alt="<?=$portfolio_item->get('title');?>" />
        <figcaption data-showing=false>
            <h3>
                <?=$portfolio_item->get('title');?>
            </h3>
            <p>
                <?= $portfolio_item->get('brief'); ?>
            </p>
            <p>
                <?= $portfolio_item->get('solution'); ?>
            </p>
            <ol>
                <?php
                    $features = $portfolio_item->get('i_did');
                    foreach($features as $feature)
                    {
                ?>
                <li>
                    <?= $feature; ?>
                </li>
                <?php
                    }
                ?>
            </ol>
            <a class="link-full" rel="external" href="<?=$portfolio_item->get('url');?>" title="<?=$portfolio_item->get('title');?>">
                <?=$portfolio_item->get('title');?>
            </a>
            <a class="link-short" rel="external" href="<?=$portfolio_item->get('tinyurl');?>" title="<?=$portfolio_item->get('title');?>">
                <?=$portfolio_item->get('tinyurl');?>
            </a>
            
        </figcaption>
    </figure>
    <?      
        }
    ?>
</div>