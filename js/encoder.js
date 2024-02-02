
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + Math.max(replacement.length, 1));
}

function Encoder(confObj) {
    if(!('content' in confObj) || !confObj.content.length) {
        setTimeout(function() {
            window.alert('Treść jest pusta');
        }, 5);

        return null;
    }

    var privateObject = {
        content: confObj.content,
        charsMap: confObj.charsMap,
    }

    var publicDynamicObject = {
        run: function () {
            let j=0, result = privateObject.content,
                contLen = privateObject.content.length;

            for(let i=0; i<contLen; i++) {
                if(privateObject.content[i] in privateObject.charsMap) {
                    result = result.replaceAt(j, privateObject.charsMap[privateObject.content[i]]);
                    j += privateObject.charsMap[privateObject.content[i]].length;
                } else {
                    result = result.replaceAt(j, privateObject.content[i]);
                    j++;
                }
            }

            return result;
        }
    }

    return publicDynamicObject;
}
