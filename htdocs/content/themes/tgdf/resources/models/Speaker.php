<?php

namespace Theme\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Speaker.
 * Help you retrieve data from your $prefix_posts table.
 *
 * @package Theme\Models
 */
class Speaker extends Model
{
  protected $table = 'posts';
  protected $primaryKey = 'ID';
  public $timestamps = false;

  static public function boot() {
    parent::boot();

    static::addGlobalScope('term', function (Builder $builder) {
      $builder
        ->join('term_relationships', 'ID', '=', 'term_relationships.object_id')
        ->join('term_taxonomy', 'term_taxonomy.term_taxonomy_id', '=', 'term_relationships.term_taxonomy_id')
        ->join('terms', 'terms.term_id', '=', 'term_taxonomy.term_id')
        ->where('post_type', 'speaker');
    });
  }

  public function excerpt() {
    return apply_filters('the_content', wp_trim_words($this->post_content));
  }

  public function scopeLang($query, $lang) {
    $availables = pll_languages_list();

    if(!in_array($lang, $availables)) {
      $lang = pll_default_language();
    }

    return $query->where('terms.slug', $lang);
  }

  public function sessions() {
    $session_ids = \Meta::get($this->ID, '_sessions', false);
    if(!is_array($session_ids)) {
      return;
    }

    $sessions = [];
    foreach($session_ids as $session) {
      $id = pll_get_post($session);
      if($id === false) { $id = $session; }
      if(empty($id)) { continue; }

      $session = get_post($id);
      array_push($sessions, $session);
    }

    return $sessions;
  }
}
