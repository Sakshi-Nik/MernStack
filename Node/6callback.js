function display(name,callback){
    console.log("Hello,"+name)

callback();
}

function msg(){
    console.log("welcome to node.js")
}

display("sakshi",msg)


// Remember:
// - display() – Main function.
// - message() – Callback function.
// - callback() – Calls the callback function.