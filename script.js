/* 
	With jQuery 
*/
function copyToClipboard(elemento) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($.trim($(elemento).text())).select();
    document.execCommand("copy");
    $temp.remove();
}

$("#copiar").click(function(){
    copyToClipboard($(elemento));
}

	
		   
/*
	Without jQuery
	
<input type="text" id="link" />
<button> copy </button>
	
*/
const copyToClipboard = (input) => {
	input.select();
	document.execCommand('copy');
}
document.querySelector('button').addEventListener('click', ()=> {
	copyToClipboard(document.querySelector('#link'))
});
