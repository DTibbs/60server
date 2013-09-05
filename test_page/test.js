function limitChars(textid, limit, infodiv) {
    var text = $('#'+textid).val();
    var textlength = text.length;
    if(textlength > limit) {
        $('#' + infodiv).html('You cannot write more then '+limit+' characters!');
        $('#'+textid).val(text.substr(0,limit));
        return false;
    }
    else {
        $('#' + infodiv).html('You have '+ (limit - textlength) +' characters left.');
        return true;
    }
}

// Bind the function to ready event of document. 
$(function(){
    $('#comment').keyup(function(){
        limitChars('comment', 60, 'charlimitinfo');
    });
//    $('#submit').click(function(){
//        var msg = $('#comment').val();
//        $.post("http://127.0.0.1:3000/",
//                { req.body.msg: msg },
//                function() { alert("Thanks!"); },
//                "json");
//    });
});

