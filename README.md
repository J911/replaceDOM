# replaceDOM
change a part of the DOM

## use

```
<script src='./lib/htmlParser.js'></script>
<script src='./replaceDOM.js'></script>  
```
** https://github.com/J911/htmlParser
```
var replacer = new replceDOM();
```

#### replaceDOM.prototype.replaceDocument(regExp,to, tag=false)

```
replacer.replaceDocument(/hi/gi, 'hello');
```
or
```
replacer.replaceDocument(/hi/gi, 'hello', 'span');
```
   
#### replaceDOM.prototype.replaceNode(nodes ,regExp,to, tag=false)
 
** nodes is array
```
replacer.replaceNode(document.childNodes, /hi/gi, 'hello');
```
or
```
replacer.replaceNode(document.childNodes, /hi/gi, 'hello', 'span');
```
    
