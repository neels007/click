function change(){
    var count = 0;
    let timerId = setInterval(function(){
        console.log("clicked")
         window.open('https://youtu.be/oGG-lBdCZtE')
         count++;

    },5000);

    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 15000);

    
console.log(count);
    
}




// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
