const { randomInt } = require('crypto');
const fs = require('fs');
const filepath = './bee\ movie\ script'
const text = fs.readFileSync(filepath);
const lines = text.toString().split('\n');

const get_line = (line) => {
    return lines[line]
}

const get_random_line = () => {
    const line = randomInt(lines.length)
    return get_line(line)
}

const get_random_line_with_word_count = (min_l,max_l,max_tries) => {
    if(min_l == undefined) min_l = 1;
    if(max_l == undefined) max_l = Number.MAX_SAFE_INTEGER;
    if(max_tries == undefined) max_tries = 400;
    while(max_tries --> 0){
        const line = get_random_line();
        const words = line.match('/\w/g') + 1;
        if(words >= min_l && words <= max_l) return line;
    }
    return get_line(2);

}



module.exports = {'get_line':get_line,'get_random_line':get_random_line,'get_random_line_with_word_count':get_random_line_with_word_count,};
