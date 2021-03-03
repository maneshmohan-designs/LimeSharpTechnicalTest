function repeat(array) {
    let dummyArray = [];
    for(i=0;i<3;i++) {
        dummyArray.push(...array);
    }
    console.log(dummyArray);
}
eval( process.argv[ 2 ] )