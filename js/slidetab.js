
var sld,sli;
$(function(){
	sld = Math.ceil(sldchd.length-1);
	sldbox.width(boxwid*sldchd.length);
	if(sld > 1){
		sli = 0;
		
		next.click(function(){
			slidemove(1);
		})
		prev.click(function(){
			slidemove(-1);	
		})
	}	
})
function slidemove(a){
	if(a>0&&sli<(sld-1))
		sli++;	
	else if(a<0&&sli>0)
		sli--;
	else
		return;	
	sldbox.animate({left:-600*sli},600);	
}
