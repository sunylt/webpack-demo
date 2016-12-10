<?php

  class Loader {
    
    function __construct($mapUrl) {
    
      if (file_exists($mapUrl)) {
        $map = file_get_contents($mapUrl);
        $this->map = json_decode($map);
      } else {
        echo 'map.json file not found.';
      }
    }
    
    function loadCss($entry) {
      $map = $this->map;
      if ($map->$entry && $map->$entry->css) {
        echo '<link rel="stylesheet" href=".' . $map->$entry->css . '">';
      }
    }
    
    function loadJs($entry) {
      $map = $this->map;
      if ($map->$entry && $map->$entry->js) {
        echo '<script src=".' . $map->$entry->js . '"></script>';
      }
    }
  }
  
?>