var index = 1;
var popup = false;
var selectedDown = false;
var popupInterval = setInterval(() => {
    if (popup) {
        $('.popupFullscreen').css('display', 'block');
        if(!selectedDown) {
            var posts = document.getElementsByClassName('mediaThumbnails');
            var users =  document.getElementsByClassName('commentList');
            var max = posts.length;
            var key = getRndInteger(0, max);
            var image = $(posts[key]).css('background-image');
            var user = $(users[key]).children('.userBold'); 
            $('#vencedor_pic').css('background-image', image);
            $('#vencedor_username').text(user[0].textContent); 
            selectedDown = true;
        }            
    }
}, 100);
var interval = setInterval(() => {    
    if($('#step_5').css('display') == "block") {        
        var data = demoDatas.split('</li><li');
        var max = data.length;
        var index_1 = getRndInteger(1, max);
        var index_2 = getRndInteger(1, max);
        var index_3 = getRndInteger(1, max);
        // alert(`${index_1}, ${index_2}, ${index_3}`);
        var element = `<li${data[index_1]}</li><li${data[index_2]}</li><li${data[index_3]}</li>`;      
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
    
}, 10);

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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$(function() {
    $('#btnSortear').on('click', function() {
        $('#sortearEffect').css('display', 'block'); 
        setTimeout(() => {
            $('#sortearEffect').css('display', 'none');         
            popup = true;                
        }, 5000);
    });
    $('#closeVencedor').on('click', function() {
        popup = false;
    });
})()