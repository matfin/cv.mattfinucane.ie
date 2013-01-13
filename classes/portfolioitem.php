<?php
class portfolioitem
{
    private $title;
    private $image_path;
    private $caption;
    private $points;
    
    public function portfolioitem($the_title, $the_image_path, $the_caption, $the_points)
    {
        $this->title = $the_title;
        $this->image_path = $the_image_path;
        $this->caption = $the_caption;
        $this->points = $the_points;
    }
    
    public function get($attr){
        if(!empty($this->{$attr}))
        {
            return $this->{$attr};
        }
        else
        {
            return 'Undefined';
        }
    }
}
?>
