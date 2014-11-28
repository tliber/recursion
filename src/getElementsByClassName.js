// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// /You should use document.body, element.childNodes, and element.classList
// But instead we're going to implement it from scratch:

  // '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
var getElementsByClassName = function(className, elms, node){

    if (arguments[1] === undefined){
        var elms = []; 
    }

    
    if ((arguments[2] === undefined) && (elms.length === 0)){
        var node = document.body; }


    if ((node.classList) && (node.classList.contains(className))){;
            elms.push(node);
    }
    
    for (var i in node.childNodes){
         getElementsByClassName(className, elms, node.childNodes[i]);
     }
    
    return elms;

};

