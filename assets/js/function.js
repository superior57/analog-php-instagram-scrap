var index = 1;

setInterval(() => {
    
    if($('#step_5').css('display') == "block") {
        var data = demoDatas.split('</li><li');
        if(index == data.length - 1) {
            clearInterval();
            index = 0;
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
    
}, 100);

function scrollBottom(element) {
    var wtf    = element;
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}