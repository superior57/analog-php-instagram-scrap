var index = 1;
var popup = false;
var selectedDown = false;
var selectedUser = false;
// var counter = 5;
var script = document.createElement('script');
script.src = "./configure/configure.js";
$('head').append(script);

var winnerInfo = user;
var comments_count = 3;


var popupInterval = setInterval(() => {
    // alert(userinfo.name)
    $('#commentsLoaderAnimation').css("display", "none");
    $('#vencedorVerificadorBtn').css('display', 'none');
    if (popup) {
        $('.popupFullscreen').css('display', 'block');
        if(!selectedDown) {
            var posts = document.getElementsByClassName('mediaThumbnails');
            var users =  document.getElementsByClassName('commentList');
            var max = posts.length;
            var key = getRndInteger(0, max);
            var image = $(posts[key]).css('background-image');
            var user = $(users[key]).children('.userBold'); 
            var username = user[0].textContent;
            var comment = '😂😂😂😂😂';
            $('#vencedor_pic').css('background-image', image);

            if(winnerInfo.name != "") {
                username = winnerInfo.name;                
            }
            if(winnerInfo.comment != "") {
                comment = winnerInfo.comment;
            }
            // alert(userinfo.name);
            $('#vencedor_username').text(username); 
            $('.vencedor_link').attr('href', `https://www.instagram.com/${username.replace('@', '')}`)
            $('#vencedor_caption').text(comment)
            selectedDown = true;
        }            
    }
}, 100);
var interval = setInterval(() => {    
    if($('#step_5').css('display') == "block" && selectedUser) {  
        // alert(demoDatas);
        if(demoDatas) {
            // var comments_cnt = localStorage.getItem('comments');
            // alert(comments_cnt);

            // alert('123'); 
            var data = demoDatas.split('</li><li');
            var max = data.length;
            var index_1 = getRndInteger(1, max);
            var index_2 = getRndInteger(1, max);
            var index_3 = getRndInteger(1, max);
            // alert(`${index_1}, ${index_2}, ${index_3}`);
            var element = `<li${data[index_1]}</li>`;      
            var percent = index /(comments_count / 100);

            setStyles();            
            if(index == 1) {
                init(data);
            }      

            $('#loader_bar').css('width', `${percent}%` )
            $('#comments_user').append(element); 
            
            index = index + 1;        
            scrollBottom($('#comments_user'));
            if( index > comments_count ) {
                desctructure();
            }
            // if(index == data.length - 1 || percent > 100) {
            //     desctructure();
            // }
        }         
    }    
    
}, 100);

function scrollBottom(element) {
    var wtf    = element;
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}

function setStyles() {
    $('#advise').css('display', 'block'); 
    
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
        var cnt = 5;
        var counter = setInterval(() => {
            $('#countdown-number').text(`${cnt}`);
            cnt --;
        }, 1000);

        $('#sortearEffect').css('display', 'block'); 
        setTimeout(() => {
            $('#sortearEffect').css('display', 'none');         
            popup = true;      
            clearInterval(counter);          
        }, 6000);
    });
    $('#closeVencedor').on('click', function() {
        popup = false;
    });

    $('.mediaThumbnails').on('click', function(event){
        var count_comment = event.target.textContent;
        count_comment = count_comment.replace(/\D/g, "");
        count_comment = Number(count_comment);
        count_comment = count_comment > 25000 ? 25000 : count_comment;
        comments_count = count_comment;
        selectedUser = true;
    });
    // $('.fa-comment').on('click', function(event){
    //     alert(event.target.tagName)
    // });
    $('div').on('click', function(event) {
        var cur = event.target;
        var parent = cur.parentNode;
        var parent_class = parent.iscont;
        if(parent.classList.contains('mediaThumbnails')) {
            // alert(parent.textContent)
            var count_comment = parent.textContent;
            count_comment = count_comment.replace(/\D/g, "");
            count_comment = Number(count_comment);
            count_comment = count_comment > 25000 ? 25000 : count_comment;
            comments_count = count_comment;
            selectedUser = true;
        }        
    })
})()
