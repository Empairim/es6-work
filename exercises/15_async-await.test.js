// Rewrite all of these from promises to async/await
// tip: you can turn the `it` callbacks to async functions by adding `async` to them :)
test('should work with resolved promises', async () => {
    const result = await doAsync();

    expect(result).toBe('resolved')
    return true;
})

test('should throw an error with a rejected promise', async () => {

    try {
        doAsync(true);
    } catch(error) {
        expect(error.message).toBe('rejected')
    }
    return true;
})

function doAsync(rejectPromise = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rejectPromise) {
                reject('rejected')
            } else {
                resolve('resolved')
            }
        })
    })
}

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Async/Await&em=
*/
test('I submitted my elaboration and feedback', () => {
    const submitted = true // change this when you've submitted!
    expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
