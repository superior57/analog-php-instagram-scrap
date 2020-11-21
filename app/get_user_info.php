<?php
  include('header.php');
  $email = $_GET['email'];
  $username = $_GET['username'];
  $time = $_GET['time'];
  $register = $_GET['register'];

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_URL, "https://sorteiogram.com/ajax/get_user_info.php?email=$email&username=$username&time=$time&register=$register");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
  $result = curl_exec($ch);
  var_dump(  $result);
  exit;
  curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

  // REMOVE SSL
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

  $headers = array();
  $headers[] = 'Authority: sorteiogram.com';
  $headers[] = 'Accept: */*';
  $headers[] = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';
  $headers[] = 'X-Requested-With: XMLHttpRequest';
  $headers[] = 'Sec-Fetch-Site: same-origin';
  $headers[] = 'Sec-Fetch-Mode: cors';
  $headers[] = 'Sec-Fetch-Dest: empty';
  $headers[] = 'Referer: https://sorteiogram.com/';
  $headers[] = 'Accept-Language: pt-BR,pt;q=0.9,en;q=0.8';
  $headers[] = 'Cookie: __cfduid=df98287e345539e5a01a5800a4cfb8cf51594473047; _ga=GA1.2.999024225.1594473048; _gid=GA1.2.471426412.1594473048; _fbp=fb.1.1594473047864.1031358921';
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  $result = curl_exec($ch);
  if (curl_errno($ch)) {
      echo 'Error:' . curl_error($ch);
  }
  curl_close ($ch);
  
  echo $result;
?>