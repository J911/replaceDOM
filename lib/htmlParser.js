var htmlParser = function(){
    this.version = '1.0.1';
}

htmlParser.prototype = {
    nodeParse: function(node, callback){
        return callback(
            this.htmlParserLoop([], node)
        );
    },
    documentParse: function(callback){
        return callback(
            this.htmlParserLoop([], [document])
        );
    },
    htmlParserLoop: function(arr, currentNodes){
        var lastNodes = [];    
        for(i=0;i<currentNodes.length;i++){
            currentNodes[i].childNodes.forEach(function(node){
                arr.push(node);
                lastNodes.push(node);
            });
        }
        if(lastNodes.length == 0) return arr;
        return this.htmlParserLoop(arr, lastNodes);
    }
}