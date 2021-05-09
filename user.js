function fibonacci(x) {
    let massive = [1, 1];
    for (let i = 1; i <= x; i++) {
        let a = massive[i] + massive[i - 1];
        if (a < 4000000) {
            massive.push(a);
        } else {
            break;
        }
    }
    console.log(massive);
    return massive.filter(i => i % 2 == 0).reduce((a, b) => a + b);
}
  
