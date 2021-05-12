document.getElementById("euclid").addEventListener("click",function (){
    let a = document.getElementById("warareru").value;
    let b = document.getElementById("waru").value;
    let r;
    document.getElementById("ans").value += (a + b) + "\n";
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
    document.getElementById("ans").value += (a + b) + "\n";
});