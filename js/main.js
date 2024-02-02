
$(document).ready(function(){
    let codeMap = new CodeMap({
        charsMap: {
            '!': 'a',
            ')': 'b',
            '"': 'c',
            '(': 'd',
            '£': 'e',
            '*': 'f',
            '%': 'g',
            '&': 'h',
            '>': 'i',
            '<': 'j',
            '@': 'k',
            'a': 'l',
            'b': 'm',
            'c': 'n',
            'd': 'o',
            'e': 'p',
            'f': 'q',
            'g': 'r',
            'h': 's',
            'i': 't',
            'j': 'u',
            'k': 'v',
            'l': 'w',
            // 'm': 'x',
            // 'n': 'y',
            // 'o': 'z',
        }
    });
    codeMap.run();
    codeMap.addCodeAsciiToMap('m', 'x');
    codeMap.addCodeAsciiToMap('n', 'y');
    codeMap.addCodeAsciiToMap('o', 'z');

    $('.coder button.action-decode').bind('click', function() {
        let encoder = new Encoder({
            content: $('.coder textarea[name="value_code"]').val(),
            charsMap: codeMap.getCodeAsciiMap()
        });

        let result = encoder.run();
        if(result !== null) {
            $('.coder textarea[name="value_ascii"]').val(result);
        }
    });

    $('.coder button.action-encode').bind('click', function() {
        let encoder = new Encoder({
            content: $('.coder textarea[name="value_ascii"]').val(),
            charsMap: codeMap.getAsciiCodeMap()
        });

        let result = encoder.run();
        if(result !== null) {
            $('.coder textarea[name="value_code"]').val(result);
        }
    });
});
