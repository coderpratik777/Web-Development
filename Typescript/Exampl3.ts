//basic generics in typescript

function display<S,T>(param1:S,param2:T):[S,T]{
    return [param1,param2];
}

console.log(display<string,number>("pratik",23));