<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models\Sponsor;
use Theme\Models\Post;

class HomeController extends BaseController
{
  public function index() {
    $lang = pll_current_language();
    $posts = Post::lang($lang)->orderBy('post_date', 'desc')->limit(9)->get()->chunk(3);
    $sponsors = $this->flatten_sponsors($lang)->chunk(6);

    return view('home', [
      'posts_in_group' => $posts,
      'sponsors_in_group' => $sponsors
    ]);
  }

  protected function flatten_sponsors($lang) {
    $levels =  get_terms(['taxonomy' => 'sponsor_level', 'lang' => $lang]);
    $sponsors = [];
    foreach($levels as $level) {
      array_push($sponsors, Sponsor::where('terms.term_id', $level->term_id)->get());
    }
    return collect($sponsors)->collapse();
  }
}
