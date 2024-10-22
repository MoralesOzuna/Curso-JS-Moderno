//Fizz Buzz


// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
//15 30 45 ... FIZZBUZZ!

for(let i = 1; i <= 100; i++){

    if(i % 5 === 0 && i % 3=== 0){
        console.log('FIZZBUZZ!');
        continue;
    } else if(i % 3 === 0){
        console.log('Fizz');
        continue;
    } else if(i % 5 === 0){
        console.log('Buzz');
        continue;
    }
    console.log(i);
}