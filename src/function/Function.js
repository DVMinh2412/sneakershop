Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};

function Function(cost) {
    let costCopy = cost.split('');
    let length = costCopy.length
    while(length - 3 > 0) {
        costCopy.insert(length - 3, '.')
        length -= 3
    }
    return (costCopy.join(''))
}

export default Function;