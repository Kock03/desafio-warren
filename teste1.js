var sum;

for (sum = 1; sum < 1000000; sum++) {
    if (sum % 2 == 1) {
        function reverseNum() {
            return (
                parseFloat(
                    sum
                        .toString()
                        .split('')
                        .reverse()
                        .join('')
                ) * Math.sign(sum)
            )
        }
        var result = sum + reverseNum()

        if(result % 2 == 1 && result < 1000000){
            
            console.log(sum)
            
        }
    }

}