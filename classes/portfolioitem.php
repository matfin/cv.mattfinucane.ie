<?php
class portfolioitem
{
    private $title;
    private $url;
    private $image_path;
    private $brief;
    private $solution;
    private $i_did;
    
    public function portfolioitem($the_title, $the_url, $the_image_path, $the_brief, $the_solution, $the_i_did)
    {
        $this->title = $the_title;
        $this->url = $the_url;
        $this->image_path = $the_image_path;
        $this->brief = $the_brief;
        $this->solution = $the_solution;
        $this->i_did = $the_i_did;
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
