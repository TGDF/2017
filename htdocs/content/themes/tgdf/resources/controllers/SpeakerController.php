<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models;

class SpeakerController extends BaseController
{
    public function index($speakers, $query) {
      $lang = pll_current_language();
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
