var index = 1;
setInterval(() => {
    
    if($('#step_5').css('display') == "block") {
        $('#advise').css('display', 'block');

        var data = demoDatas.split('</li><li');
        if(index == data.length - 1) {
            $('#advise').css('display', 'none');
            $('#commentsLoaderAnimation').css("display", "block");
            $('#comments_user').css("display", "none");  
            // $('#comments_user').empty();  
            clearInterval();
            index = 0;
        }     
        if(index == 1) {
            $('#comments_user').empty(); 
        }

        $('#commentsLoaderAnimation').css("display", "none");
        $('#comments_user').css("display", "block");    
        
        $('#comments_user').append(`<li
        ${
            data[index]
        }</li>
        `); 
        // alert(demoDatas.split('</li><li')[3]);
        index ++;        
        scrollBottom($('#comments_user'));
    }    
    
}, 10);

function scrollBottom(element) {
    var wtf    = element;
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}