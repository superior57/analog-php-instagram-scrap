var index = 1;
setInterval(() => {
    
    if($('#step_5').css('display') == "block") {
        var data = demoDatas.split('</li><li');
        var element = `<li${data[index]}</li><li${data[index+1]}</li><li${data[index+2]}</li>`;
        $('#commentsLoaderAnimation').css("display", "none");
            
        if(index == 1) {
            init(data);
        } 
        if(index == data.length - 1) {
            desctructure();
        } 
        
        $('#loader_bar').css('width', index)
        $('#comments_user').append(element); 
        
        index = index + 3;        
        scrollBottom($('#comments_user'));
    }    
    
}, 500);

function scrollBottom(element) {
    var wtf    = element;
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}

function init(data) {
    // alert(data.length);
    $('#advise').css('display', 'block');  
    $('#comments_user').empty();     
    $('#comments_user').css("display", "block");
    $('#wrap_loader_bar').css("display", "block");
    $('#loader_btnSortear').css("display", "block");
    $('#wrap_pre_load_opt').css("display", "block");
    $('#loader_bar').css('height', 35); 
    $('#advise').css('background', 'transparent'); 
    
}

function desctructure() {
    $('#advise').css('display', 'none');
    $('#commentsLoaderAnimation').css("display", "block");
    $('#comments_user').css("display", "none");  
    $('#btnSortear').css("display", "block");
    // $('#comments_user').empty();  
    clearInterval();
    index = 0;
}