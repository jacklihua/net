window.onload = function(){
	var lik = document.getElementsByTagName("li");

	function fun(i,j){
		lik[i].style.opacity = 1;
		lik[j].style.opacity = 0;
	}
    fun(6,7);
    var i = 6;
    setInterval(function(){
    	if(++i >= 11){
    		i = 6;
    		fun(6,10);
    	}
        else fun(i,i-1);
    },2000);
}