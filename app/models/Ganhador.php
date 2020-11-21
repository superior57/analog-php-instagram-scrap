<?php
  class Ganhador {
    private $id;
    private $fotoPerfil;
    private $nomeUsuario;
    private $textoComentario;
    private $codigoMidia;
    private $ganharPosicao;

    function getId() {
      return $this->id;
    }

    function setId($id) {
      $this->id = $id;
    }

    function getFotoPerfil() {
      return $this->fotoPerfil;
    }

    function setFotoPerfil($fotoPerfil) {
      $this->fotoPerfil = $fotoPerfil;
    }

    function getNomeUsuario() {
      return $this->nomeUsuario;
    }

    function setNomeUsuario($nomeUsuario) {
      $this->nomeUsuario = $nomeUsuario;
    }

    function getTextoComentario() {
      return $this->textoComentario;
    }

    function setTextoComentario($textoComentario) {
      $this->textoComentario = $textoComentario;
    }

    function getCodigoMidia() {
      return $this->codigoMidia;
    }

    function setCodigoMidia($codigoMidia) {
      $this->codigoMidia = $codigoMidia;
    }

    function getGanharPosicao() {
      return $this->ganharPosicao;
    }

    function setGanharPosicao($ganharPosicao) {
      $this->ganharPosicao = $ganharPosicao;
    }

    function podeGanhar($codigoMidia, $qtdGanhadores) {
      $qtdGanhadores++;
      return $codigoMidia == $this->getCodigoMidia() && $qtdGanhadores == $this->getGanharPosicao();
    }
  }
?>