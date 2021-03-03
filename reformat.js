function reformat(string) {
    vowelsRemovedString = string.replace( /[aeiou]/gi, '' );
    console.log( vowelsRemovedString.charAt(0).toUpperCase() + vowelsRemovedString.slice(1).toLowerCase());
}

eval( process.argv[ 2 ] )