<?php 
    $portfolio_items = array(
        /*
         * Web work
         */
        new portfolioitem(
            'Angels Beacons of Hope', 
            'angels-beacons-of-hope.jpg', 
            'This site was created pro&ndash;bono as part of a collaborative team effort in late 2009.'
        ),
        new portfolioitem(
            'Dress For Success Dublin', 
            'dress-for-success-dublin.jpg', 
            'One of the entries for 24 The Web, a 24 hour design challenge for charities. Site uses Perch as a cms and CodeIgniter for storing and retrieving contact information.'
        ),
        new portfolioitem(
            'iBox streaming TV', 
            'ibox.jpg', 
            'Web based TV guide interface for a subscription based TV streaming service in Ireland.'
        ),
        new portfolioitem(
            'LittleGreen', 
            'littlegreen.jpg', 
            'Wordpress based site for managing content. Integrated Facebook Connect for social sharing and Google Analytics for tracking.'
        ),
        new portfolioitem(
            'PaddyPower Casino', 
            'paddypower-casino.jpg', 
            'Created with custom built CMS using CodeIgniter for front end and back end.'
        ),
        new portfolioitem(
            'PaddyPower Games', 
            'paddypower-games.jpg', 
            'Redesigned and integrated custom cms using CodeIgniter framework.'
        ),
        new portfolioitem(
            'Rhendy Chartered Accountants', 
            'rhendy.jpg', 
            'Content managed with Perch CMS and uses Facebook Connect and Twitter API for social sharing.'
        ),
        new portfolioitem(
            'Vantastival', 
            'vantastival.jpg', 
            'Content managed using wordpress with integrated Facebook and Twitter social plugins for sharing content.'
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
        <img src="<?=$base . '/assets/portfolio/web/' . $portfolio_item->get_image_path(); ?>" width="800" height="600" alt="<?=$portfolio_item->get_title(); ?>" />
        <figcaption data-showing=false>
            <h6>
                <?=$portfolio_item->get_title();?>
            </h6>
        </figcaption>
    </figure>
    <?      
        }
    ?>
</div>