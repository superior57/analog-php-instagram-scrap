var index = 1;

var interval = setInterval(() => {
    
    if($('#step_5').css('display') == "block") {        
        var data = demoDatas.split('</li><li');
        var element = `<li${data[index]}</li><li${data[index+1]}</li><li${data[index+2]}</li>`;      
        var percent = index / 1;

        setStyles();            
        if(index == 1) {
            init(data);
        }      

        $('#loader_bar').css('width', `${percent}%` )
        $('#comments_user').append(element); 
        
        index = index + 3;        
        scrollBottom($('#comments_user'));
        if(index == data.length - 1 || percent > 100) {
            desctructure();
        } 
    }    
    
}, 300);

function scrollBottom(element) {
    var wtf    = element;
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}

function setStyles() {
    $('#advise').css('display', 'block'); 
    $('#commentsLoaderAnimation').css("display", "none");
    $('#comments_user').css("display", "block");
    $('#wrap_loader_bar').css("display", "block");
    $('#loader_btnSortear').css("display", "block");
    $('#wrap_pre_load_opt').css("display", "block");
    $('#loader_bar').css('height', 35); 
    $('#advise').css('background', 'transparent');       
    $('#wrap_loader_bar').css('overflow', 'hidden');
}

function init(data) {
    $('#comments_user').empty();            
}

function desctructure() {
    $('#btnSortear').css("display", "block");
    $('#btnSortear').removeClass("btn-disabled");
    $('#btnSortear').addClass("btn-red pulse");
    $('#loader_btnSortear').css("display", "none");
    clearInterval(interval);
    index = 0;
}