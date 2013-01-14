<?php
class portfolioitem
{
    private $title;
    private $url;
    private $image_path;
    private $brief;
    private $solution;
    private $technologies;
    private $type;
    
    public function portfolioitem($the_title, $the_url, $the_image_path, $the_brief, $the_solution, $the_technologies, $the_type)
    {
        $this->title = $the_title;
        $this->url = $the_url;
        $this->image_path = $the_image_path;
        $this->brief = $the_brief;
        $this->solution = $the_solution;
        $this->type = $the_type;
        $this->technologies = $the_technologies;
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
