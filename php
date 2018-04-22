

//通过 ip 获取位置 demo

<?php
if(isset($_GET['ip']) || $_GET['ip'] != ''){
$ip = $_GET['ip'];
}else{
$ip = $_SERVER["REMOTE_ADDR"];
}
$ipurl = "http://ip.taobao.com/service/getIpInfo.php?ip={$ip}";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $ipurl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_POST, 0);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
$output = curl_exec($ch);
curl_close($ch);
$IPArr = json_decode($output);
//print_r($IPArr);
$city = $IPArr->data->city;//地区
echo $city;
