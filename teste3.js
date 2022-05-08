function knapsack(items, capacity) {
    
    var memo = [];

    
    for (var i = 0; i < items.length; i++) {
       
        var row = [];
        for (var cap = 1; cap <= capacity; cap++) {
            row.push(getSolution(i, cap));
        }
        memo.push(row);
    }

    
    return (getLast());

    function getLast() {
        var lastRow = memo[memo.length - 1];
        return lastRow[lastRow.length - 1];
    }

    function getSolution(row, cap) {
        const NO_SOLUTION = { maxValue: 0, subset: [] };
        
        var col = cap - 1;
        var lastItem = items[row];
        
        var remaining = cap - lastItem.w;

        
        var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
        
        var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

        
        if (remaining < 0) {
            return lastSolution;
        }

        
        var lastValue = lastSolution.maxValue;
        var lastSubValue = lastSubSolution.maxValue;

        var newValue = lastSubValue + lastItem.v;
        if (newValue >= lastValue) {
           
            var _lastSubSet = lastSubSolution.subset.slice();
            _lastSubSet.push(lastItem);
            return { maxValue: newValue, subset: _lastSubSet };
        } else {
            return lastSolution;
        }
    }
}


var items = [
    { w: 70, v: 135 },
    { w: 73, v: 139 },
    { w: 77, v: 149 },
    { w: 80, v: 150 },
    { w: 82, v: 156 },
    { w: 87, v: 163 },
    { w: 90, v: 173 },
    { w: 94, v: 184 },
    { w: 98, v: 192 },
    { w: 106, v: 201 },
    { w: 110, v: 210 },
    { w: 113, v: 214 },
    { w: 115, v: 221 },
    { w: 118, v: 229 },
    { w: 120, v: 240 },
];

var capacity = 1000;
console.log(knapsack(items, capacity));
