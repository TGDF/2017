<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models;

class Speaker extends BaseController
{
    public function show($speaker, $query) {
      $id = $speaker->ID;
      $speaker = Models\Speaker::find(pll_get_post($id));

      if(empty($speaker)) {
        $speaker = Models\Speaker::withoutGlobalScopes()->find($id);
      }

      return view('speaker.show', [
        'speaker' => $speaker
      ]);
    }
}
