
$(document).ready(function(){
    let codeMap = new CodeMap({
        charsMap: {
            '!': 'a',
            ')': 'b',
            '"': 'c',
            '(': 'd',
            '#': 'e',
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
    codeMap.addCharsPairToMap('m', 'x');
    codeMap.addCharsPairToMap('n', 'y');
    codeMap.addCharsPairToMap('o', 'z');
});
