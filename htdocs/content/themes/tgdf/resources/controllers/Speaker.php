<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models;

class Speaker extends BaseController
{
    public function index($speakers, $query) {
      $lang = get_query_var('lang');
      $chunks = Models\Speaker::lang($lang)->orderBy('post_date', 'desc')->get()->chunk(4);

      return view('speakers', [
        'chunks' => $chunks
      ]);
    }

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
