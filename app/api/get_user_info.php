<?php
  include('../header.php');
  $email = $_GET['email'];
  $username = $_GET['username'];
  $time = $_GET['time'];
  $register = $_GET['register'];
  $tryAgainServer = $_GET['tryAgainServer'];

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_URL, "https://api.sorteiogram.com/ajax/get_user_info.php?email=$email&username=$username&time=$time&register=$register&tryAgainServer=$tryAgainServer");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

  curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

  // REMOVE SSL
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

  $headers = array();
  $headers[] = 'Connection: keep-alive';
  $headers[] = 'Accept: */*';
  $headers[] = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';
  $headers[] = 'Origin: https://sorteiogram.com';
  $headers[] = 'Sec-Fetch-Site: same-site';
  $headers[] = 'Sec-Fetch-Mode: cors';
  $headers[] = 'Sec-Fetch-Dest: empty';
  $headers[] = 'Referer: https://sorteiogram.com/';
  $headers[] = 'Accept-Language: pt-BR,pt;q=0.9,en;q=0.8';
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  $result = curl_exec($ch);
  if (curl_errno($ch)) {
      echo 'Error:' . curl_error($ch);
  }
  curl_close ($ch);
  
  echo $result;
?>