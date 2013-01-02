<?php
class portfolioitem
{
    private $title;
    private $image_path;
    private $caption;
    
    public function portfolioitem($the_title, $the_image_path, $the_caption)
    {
        $this->title = $the_title;
        $this->image_path = $the_image_path;
        $this->caption = $the_caption;
    }
    
    public function get_title()
    {
        return $this->title;
    }
    
    public function get_image_path()
    {
        return $this->image_path;
    }
    
    public function get_caption()
    {
        return $this->caption;
    }
}
?>
