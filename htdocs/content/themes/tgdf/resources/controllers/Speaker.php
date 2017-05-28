<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models;

class Speaker extends BaseController
{
    public function show($speaker, $query) {
      $speaker = get_post(pll_get_post($speaker->ID));

      return view('speaker.show', [
        'speaker' => $speaker
      ]);
    }
}
