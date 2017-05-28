<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models\Sponsor;

class PartnerController extends BaseController
{
  public function index() {
    $lang = get_query_var('lang');
    $levels =  get_terms(['taxonomy' => 'sponsor_level', 'lang' => $lang]);

    return view('partners', [
      'levels' => $levels
    ]);
  }
}
