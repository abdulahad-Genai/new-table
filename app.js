alert("Welcome to my page")

confirm("Do  you want to set the Table of any number")

var num= prompt("Enter the Number")

document.write(`Table of ${num}` + "<br>")

if (num <= 20) {

    for(num; num<=20; num++){


        for (i=1 ; i<=10 ; i++){
            document.write( `${num} x${i} = ` , num*i + "<br>");
        }
    }
}
    else{
        document.write (`The Number is greater then 20`)
    }
