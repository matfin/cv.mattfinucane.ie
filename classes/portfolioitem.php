<?php
class portfolioitem
{
    private $title;
    private $url;
    private $tinyurl;
    private $image_path;
    private $logo_path;
    private $qr_code;
    private $brief;
    private $solution;
    private $i_did;
    
    public function portfolioitem($the_title, $the_url, $the_tinyurl, $the_image_path, $the_logo_path, $the_qr_code, $the_brief, $the_solution, $the_i_did)
    {
        $this->title = $the_title;
        $this->url = $the_url;
        $this->tinyurl = $the_tinyurl;
        $this->image_path = $the_image_path;
        $this->logo_path = $the_logo_path;
        $this->qr_code = $the_qr_code;
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
