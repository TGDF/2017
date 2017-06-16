<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;
use Theme\Models;

class IndieSpaceController extends BaseController
{
  public function index($page) {
    $id = pll_get_post($page->ID);
    if($id !== false) {
      $page = get_post($id);
    }

    $lang = pll_current_language();
    $chunks = Models\IndieGame::lang($lang)->orderBy('post_date', 'desc')->get()->chunk(3);

    return view('indie_space', [
      'page' => $page,
      'chunks' => $chunks
    ]);
  }
}
