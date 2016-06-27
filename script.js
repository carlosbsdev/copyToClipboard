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
	
