<?php
class job
{
    private $comapny;
    private $position;
    private $location;
    private $start_date;
    private $end_date;
    private $roles;
    
    public function job($the_company, $the_position, $the_location, $the_start_date, $the_end_date, $the_roles){
        $this->company = $the_company;
        $this->position = $the_position;
        $this->location = $the_location;
        $this->start_date = $the_start_date;
        $this->end_date = $the_end_date;
        $this->roles = $the_roles;
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
    
    public function addRole($role){
        $this->roles[] = $role;
    }
}
?>
