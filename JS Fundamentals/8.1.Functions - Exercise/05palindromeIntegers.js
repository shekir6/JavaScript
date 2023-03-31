function palindromeIntegers(array){

    function isPalindrome(number){         
        let reversedNum = Number(number.toString().split("").reverse().join(""))
        
        if (number === reversedNum){  
            return true;            
        } else {
            return false             
        }
    }

    for (let i = 0; i < array.length; i++) {    
        let currentNum = array[i]                
        console.log(isPalindrome(currentNum))   
        
    }
}

//another solution
//(array) => array.forEach(num => num === Number(String(num).split("").reverse().join("")) ? console.log('true') : console.log('false'))
palindromeIntegers([123,323,421,121])
console.log('------------------------------');
palindromeIntegers([32,2,232,1010])

