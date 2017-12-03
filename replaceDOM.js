var replaceDOM = function(){
    this.version = '1.0.0';
}

replaceDOM.prototype = {
    replaceDocument: function(regExp, to, tag=false){
        this.replaceDOMLoop([document], regExp, to, tag);
    },
    replaceNode: function(regExp, to, tag=false){
        this.replaceDOMLoop(node, regExp, to, tag);
    },
    replaceDOMLoop: function(node, regExp, to, tag){
        htmlParser.prototype.nodeParse(
            node,
            function(nodes){
                nodes.forEach(function(node){
                    if(node.nodeName == '#text' && node.parentNode.nodeName !== 'STYLE' && node.data.match(regExp)){
                        if(tag){
                            var span = document.createElement(tag);   
                            span.innerHTML = node.data.replace(regExp, to);
                            node.parentNode.replaceChild(span, node); 
                        }
                        else{
                            node.data = node.data.replace(regExp, to);
                        }
                    }
                });
            }
        )
    }
}



