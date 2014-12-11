<?php
$data = $_POST['data'];

$data = json_decode($data);

$file = "products.json";

$json = json_decode(file_get_contents($file), true);

//echo $data->id;
//var_dump($data); die;

foreach ($json as $k => $j)
{
	if ($j['id'] == $data->id)
	{
		if (isset($data->price))
			$json[$k]["price"] = $data->price;
		if (isset($data->quantity))
			$json[$k]["quantity"] = $data->quantity;
	}
}

file_put_contents($file, json_encode($json));
?>