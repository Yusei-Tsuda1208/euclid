document.getElementById("euclid").addEventListener("click",function (){
    let a = document.getElementById("warareru");
    let b = document.getElementById("waru");
    let r;
    
    (a,b)=>{
        while(a=0){
            a%b = a;
            if(a<b){
                let c;
                c=a;
                a=b;
                b=c;
            }
        }
        
    }
    document.write("aiueo");
    document.close();
    document.write('A');
    document.getElementById("ans").value += (x + "=" + y + "*" + q + "+" + r) + "\n";
});