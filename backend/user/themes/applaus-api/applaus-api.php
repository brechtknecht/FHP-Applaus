<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class ApplausApi extends Theme
{
    // Access plugin events in this class
    
    public static function uniqueid() {
        return uniqid();
    }
    public static function absolventen() 
    {
        $data = json_decode(file_get_contents('http://backend.test/applaus2018'));

        $absolventen_liste = array ();
        foreach($data->pages->absolventen->body->list as $absolvent) {
            if($absolvent->forename AND $absolvent->lastname AND $absolvent->category AND $absolvent->id) {
                $absolventen_liste[] = array('text' => $absolvent->forename.' '.$absolvent->lastname.' — '.$absolvent->category, 'value' => $absolvent->id);
            }

        }
        return($absolventen_liste);
    }
    public static function betreuer()
    
    {
        $betreuer = array (
            'Lina Wassong',
            'Prof. Hermann Weizenegger',
            'Prof. Reto Wettach',
            'Felix Walser',
            'Prof. Volker von Kardorff',
            'Dr. Katrin von Kap-herr',
            'Sven Völker',
            'Prof. Vicky Tiegelkamp',
            'Thomas Senff',
            'Jan Schütze',
            'Torsten Schöbel',
            'Prof. Detlef Saalfeld',
            'Prof. Anne Quirynen',
            'Eva Niemann',
            'Prof. Betina Müller',
            'Prof. Boris Müller',
            'Prof. Franziska Morlok',
            'Lorena Odesa Monsalve Camargo',
            'Jörg Misch',
            'Prof. Myriel Milicevic',
            'Anouk Meissner',
            'Prof. Alexandra Martini',
            'Christine Mangelsdorf',
            'Prof. Wiebke Loeper',
            'Julia Läufer',
            'Prof. Constanze Langer',
            'Prof. Matthias Krohn',
            'Prof. Hans-Jörg Kotulla',
            'Sabine Klaperski',
            'Peter Kerscher',
            'Prof. Klaus Keller',
            'Kathrin Katzek',
            'Prof. Holger Jahn',
            'Prof. Jörg Hundertpfund',
            'Katrin Holst',
            'Prof. Karsten Henze',
            'Prof. Dr. Nico Heise',
            'Prof. Dr. Frank Heidmann',
            'Marion Hardel',
            'Frank Gottsmann',
            'Friederike Goll',
            'Prof. Marion Godau',
            'Prof. Winfried Gerling',
            'Prof. Dr. Rainer Funke',
            'Prof. Friedrich Forssman',
            'Thomas Foitzik',
            'Prof. Lutz Engelke',
            'Sophie Ehrmanntraut',
            'Prof. Klaus Dufke',
            'Prof. Dr. Marian Dörk',
            'Prof. Dr. Jan Distelmeyer',
            'Prof. Lucas de Groot',
            'Johannes Cremer',
            'Prof. Gillian Crampton Smith',
            'Birgit Bröse',
            'Anne Boenisch',
            'Prof. Matthias Beyrow',
            'Frank Rausch',
            'Tim Kekeritz'
        );
        $parsed_list = array();

        foreach($betreuer as $key => $person) {
            $new_person = array('text' => $person, 'value' => $person);
            $parsed_list[$key] = $new_person;
        }
        return $parsed_list;
    }
}
