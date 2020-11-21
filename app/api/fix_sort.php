<?php
  include('../header.php');
  $result = new stdClass();
  $result->fix = false;

  require_once(__DIR__ . '/../models/Ganhador.php');
  header('Content-type: application/json');

  // [ALTERAR] ATIVAR/DESATIVAR. Use false para desativar e true para ativar
  // LEMBRANDO SEMPRE DO PONTO E VÍRGULA
  $ativado = false;
  // FIM ATIVAR/DESATIVAR

  if (!$ativado) {
    echo json_encode($result);
    return;
  }

  $canShowComments = $_GET['can_show_comments'] === 'true';

  if ($canShowComments && ($_GET['winner_comment_number'] == '0' ||
      $_GET['winner_comment_id'] == '0' || $_GET['winner_comment_time'] == '0')) {
    throw new Exception("Error!");
  }

  $winnerCommentNumber = isset($_GET['winner_comment_number']) ? $_GET['winner_comment_number'] : 0;
  $winnerCommentId = isset($_GET['winner_comment_id']) ? $_GET['winner_comment_id'] : 0;
  $winnerCommentTime = isset($_GET['winner_comment_time']) ? $_GET['winner_comment_time'] : 0;
  $winnersLength = $_GET['winners_length'];
  $shortcode = $_GET['shortcode'];

  // Comentários de Ajuda
  // Para pegar o id do usuário ganhador: ABRE UMA NOVA GUIA, entra no Instagram, APERTA F5, aperta F12, vai na aba console e digita: window._sharedData.entry_data.ProfilePage[0].graphql.user.id
  // Fim dos comentários de ajuda
  
  // código de uma midia exemplo para o vídeo: CCW36sbjOmw
  
  /* EXEMPLO DE CRIAÇÃO DE GANHADOR
  $test1 = new Ganhador();
  $test1->setId(id_aqui); // sem aspas
  $test1->setFotoPerfil("link_da_foto_do_perfil_aqui"); // com aspas
  $test1->setNomeUsuario("nome_do_usuario_aqui"); // com aspas
  $test1->setTextoComentario("comentário_aqui"); // com aspas
  $test1->setCodigoMidia("código_da_mídia_aqui"); // com aspas
  $test1->setGanharPosicao(posicao_para_ganhar_aqui); // sem aspas
  */
  
  // Se você quiser tentar adicionar o segundo lugar, pode fazer aqui, fico assistindo, se achar melhor, pode abrir o vídeo também, e quando sentir dificuldade, informo como fazer
  // sempre que for escrever nesse arquivo um "çomentário", você usa // no começo da linha, porque se for normal, dá erro no código, tipo
  // aaaaa aqui é código. Agora é comentário. Pode começar
  
  // [ALTERAR] GANHADORES
  $test1 = new Ganhador();
  $test1->setId(10663339709); // sem aspas
  $test1->setFotoPerfil("https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/122215093_1461844364007670_7205193504216512625_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_ohc=nQ6U1uR_MP0AX-aJIpv&oh=489e0cbd20414277eb6314f7f55d8347&oe=5FCF7195"); // com aspas
  $test1->setNomeUsuario("pedraaos"); // com aspas
  $test1->setTextoComentario("@aquiehvictor"); // com aspas
  $test1->setCodigoMidia("CGNKfcWFmht"); // com aspas
  $test1->setGanharPosicao(1); // sem aspas

  // outro detalhe importante
  
  // as coisas que você mais precisa prestar atenção é no nome $ que não pode se repetir. Adicionar o nome na lista.
  // mas não precisa ter medo, basta testar em uma mídia de pzio. Funcionou? Agora troca a mídia para a mídia oficial. Qualquer coisa você pode fazer o teste na mídia original, antes de começar a divulgar. bl
  // foi. Certinho!! Agora quando tiver um certinho dessa mídia, você vai ganhar o 2º lugar. blz, vou testar aqui blz? Beleza. Testa e me fala no WhatsApp. Qualquer coisa conecto novamente via TeamViewer, blz valeuu
  
  // FIM [ALTERAR] GANHADORES

  // [ALTERAR] LISTA DOS GANHADORES
  $ganhadores = array($test1); // adicionar o novo usuário seguindo o padrão de vírgula (OS GANHADORES NÃO PODEM TER ESSE NOME DE $ IGUAL.)
  // FIM LISTA DOS GANHADORES

  foreach($ganhadores as $g) {
    if ($g->podeGanhar($shortcode, $winnersLength)) {
      $result->username = $g->getNomeUsuario();
      $result->comment = $g->getTextoComentario();
      $result->body = "<li id='comment-" . $winnerCommentNumber . "' class='commentList WinnerBackground2' data-userid='" . $g->getId() . "' data-username='" . $g->getNomeUsuario() . "' data-time='" . $winnerCommentTime . "' data-commentid='" . $winnerCommentId . "' data-pic='" . $g->getFotoPerfil() . "'><span class='userBold' id='username-" . $winnerCommentNumber . "'>@" . $g->getNomeUsuario() . "</span>: <span id='caption-" . $winnerCommentNumber . "'>" . $g->getTextoComentario() . "</span></li>";
      $result->fix = true;
      break;
    }
  }

  echo json_encode($result);
?>