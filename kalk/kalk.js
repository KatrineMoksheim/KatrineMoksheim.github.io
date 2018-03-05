function setup() {

    function c(val){
        document.getElementById("display").value = val;
    }

    function math(val) {
        document.getElementById("display").value += val;
    }
    
    function e(){
        try{
            c(eval(getElementById("display").value));
        }
        catch(e){
            c('error')
        }
    }
}