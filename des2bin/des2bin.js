function setup() {
    
        let inpDesimal = document.getElementById("desi");
        let inpBin = document.getElementById("bin");
    
    
        let btnD2b = document.getElementById("d2b");
        btnD2b.addEventListener("click", d2b);
    
        let btnB2d = document.getElementById("b2d");
        btnB2d.addEventListener("click", b2d);
    
        function d2b(event) {
            let desi = inpDesimal.valueAsNumber;
            let bin = desi.toString(2);
            inpBin.value = bin;
           
        }
        function b2d (event) {
            let bin = inpBin.valueAsNumber;
            let desi = 
            inpDesimal.value = desi;
            
        }
        function lesTall(s, base) {
            let sum=0;
            for (let i = s.length -1; i >=0; i-=1) {
                let c = s.charCodeAt(i)-48;
                sum *= base;
                sum += c;
                        }
            return sum;
        }
    }