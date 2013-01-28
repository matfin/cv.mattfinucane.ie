/* 
 * A little bit of Object Oriented Javascript
 * to render a dropdown for mobile devices to 
 * allow quick jumping to different sections.
 * Written by Matthew Finucane, January 2013.
 */

function Section(section_node){
    this.title = section_node.getElementsByTagName('h2')[0].innerHTML.replace(/^\s+|\s+$/g, "");;
    var top = 0;
    if(section_node.offsetParent){
        do{
            top += section_node.offsetTop;
        }
        while(section_node = section_node.offsetParent);
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
    var sections = document.getElementsByTagName('section');
    this.options.push(new Option('Jump to...', 0).returnrendered());
    for(i = 0; i < sections.length; i++){
        var section = new Section(sections[i]);
        var option_node = new Option(section.title, section.position);
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
