/* 
 * A little bit of Object Oriented Javascript
 * to render a dropdown for mobile devices to 
 * allow quick jumping to different sections.
 * Written by Matthew Finucane, January 2013.
 */

function SectionHeading(heading_node){
    this.title = heading_node.innerHTML.replace(/^\s+|\s+$/g, "");;
    //this.position = heading_node.offsetTop;
    var top = 0;
    if(heading_node.offsetParent){
        do{
            top += heading_node.offsetTop;
        }
        while(heading_node = heading_node.offsetParent);
    }
    this.position = top;
}

function Option(label, value){
    this.label = label; 
    this.value = value;
}

Option.prototype.returnrendered = function(){
    var node = document.createElement('option');
    node.setAttribute('value', this.value);
    node.appendChild(document.createTextNode(this.label));
    return node;
}


function Select(){
    this.options = Array();
}

Select.prototype.populate = function(){
    var headings = document.getElementsByTagName('h2');
    for(i = 0; i < headings.length; i++){
        var heading = new SectionHeading(headings[i]);
        var option_node = new Option(heading.title, heading.position);
        this.options.push(option_node.returnrendered());
    }
}

Select.prototype.returnrendered = function(){
    var selectnode = document.createElement('select');
    this.populate();
    for(i = 0; i < this.options.length; i++){
        selectnode.appendChild(this.options[i]);
    }
    return selectnode;
}
