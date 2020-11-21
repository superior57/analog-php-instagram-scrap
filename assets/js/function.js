

setInterval(() => {
    if($('#step_5').css('display') == "block") {
        $('#commentsLoaderAnimation').css("display", "none");
        $('#comments_user').css("display", "block");
        $('#comments_user').append(`
            <li id="comment-673" class="commentList" data-userid="44436640635" data-username="yasmimvaledasilva" data-time="1604861032" data-commentid="17861565395213759" data-pic="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123218979_995669044232600_8028995411651125731_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&amp;_nc_ohc=ICAA05bRdqcAX_mrIfc&amp;tp=1&amp;oh=98616b700e54f1fabb4db759564f6f7b&amp;oe=5FE1AC2E"><span class="userBold" id="username-673">@yasmimvaledasilva</span>: <span id="caption-673">Kkkkkkkkkk Estou Passando Mal Aqui Kkk😂😂😂😂😂😂😂</span></li>
        `);
    }    
    
}, 100);