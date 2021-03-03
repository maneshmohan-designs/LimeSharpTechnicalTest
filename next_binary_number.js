function next_binary_number(binary) {
    const arrayLength = binary.length;
    var carry=0;
    
    for (i = arrayLength-1; i >= 0; i--) {
        if (i==arrayLength-1 && binary[i] == 0) {
            binary[i]=1;
        }
        else if(i==arrayLength-1 && binary[i] == 1)
        {
            binary[i]=0;
            carry=1;
        }
        else if(binary[i]==1 && carry==1)
        {
            binary[i]=0;
            carry=1;
        }
        else if(binary[i]==0 && carry==1)
        {
        binary[i]=1;
        carry=0;
        }
        else
        {
            break;
        }
    }
    if (carry==1)
    {
        binary.unshift(1);
    }
    
    console.log(binary);
}
eval( process.argv[ 2 ] )
