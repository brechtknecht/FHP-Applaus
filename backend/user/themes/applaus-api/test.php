<?php
// require_once "spyc.php";
// $data = spyc_load_file('../../pages/01.applaus2018/04._absolventen/_absolventen.md');

	$data = json_decode(file_get_contents('http://backend.test/applaus2018'));

	$absolventen_liste = array ();
	foreach($data->pages->Absolventen->body as $kategorie => $absolventen) {
		// print_r($kategorie);
		// print_r($absolventen);

		foreach($absolventen as $absolvent => $attribute) {
			$absolventen_liste[] = array('text' => $attribute->forename.' '.$attribute->lastname.' — '.$attribute->category, 'value' => $absolvent);

			// print_r($attribute->forename.$attribute->lastname);

			foreach($attribute as $attribut => $value) {
				// print_r($attribute->forename);
				// print_r($value);
			}
		}
	}
	return($absolventen_liste);
	// print_r($data->pages->Absolventen->body);
?>