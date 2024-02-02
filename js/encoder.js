
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
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
            let result = privateObject.content,
                contLen = privateObject.content.length;

            for(let i=0; i<contLen; i++) {
                if(privateObject.content[i] in privateObject.charsMap) {
                    result = result.replaceAt(i, privateObject.charsMap[privateObject.content[i]]);
                }
            }

            return result;
        }
    }

    return publicDynamicObject;
}
