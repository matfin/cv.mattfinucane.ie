<?php
    $portfolio_items = array(
        new portfolioitem('Test', 'http://www.test.com/image.png', 'A sample image for all to see'),
        new portfolioitem('Again', 'http://www.test.com/img2.png', 'Another sample image')
    );
    
    foreach($portfolio_items as $index => $portfolio_item)
    {
?>
<figure data-index="<?=$index?>">
    <img src="<?=$portfolio_item->get_image_path(); ?>" width="800" height="600" alt="<?=$portfolio_item->get_title(); ?>" />
    <figcaption>
        <?=$portfolio_item->get_caption(); ?>
    </figcaption>
</figure>
<?      
    }
?>
