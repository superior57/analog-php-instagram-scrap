<?php
  $html_response = "
    <div align='right'>
      <i class='fa fa-times' aria-hidden='true' style='margin-right: 20px;cursor:pointer;margin-top:5px;font-size:30px;opacity: 0.4;' onclick='closePreLoad()'></i>
    </div>

    <div style='padding-top:20px;'>
      <h2>Pré-carregamento</h2>
      <div style='width: 93%;text-align: left;padding: 20px; overflow: auto;'>
        <br />
        <span>Essa é uma função que você pode carregar os comentários antes da hora do sorteio sem perder novos comentários.<br />
        <br />Basta desativar o pré-carregamento no momento do sorteio que todos os comentários serão carregados imediatamente. Assim você poderá sortear com segurança e rapidez!
        </span>
        <br /><br />
        <center>
          <div class='slider-container'>
            <label class='switch' for='pre_load_checkbox'>
              <input type='checkbox' id='pre_load_checkbox' class='pre_load_checkbox' onchange='checkPreLoad()'/>
              <div class='slider round'></div>
              <div class='slider-title title-preload'> Pré-carregamento ativo</div>
            </label>
          </div>
        </center>
        <br />
      </div>
    </div>

    <script>
      if(PRE_LOAD) {
        $('.pre_load_checkbox').prop('checked', true);
        $('.title-preload').text('Pré-carregamento ativo');
      } else { 
        $('.pre_load_checkbox').prop('checked',false);
        $('.title-preload').text('Pré-carregamento desativado');
        
      }
      $('body').keyup(function(e){

          if(e.key == 'Escape'){
            closePreLoad();
        }
      });
    </script>
  ";

  echo $html_response;
?>