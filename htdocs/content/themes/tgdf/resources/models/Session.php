<?php

namespace Theme\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Session.
 * Help you retrieve data from your $prefix_posts table.
 *
 * @package Theme\Models
 */
class Session extends Model
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
        ->where('terms.slug', '=', self::lang());
    });
  }

  public function speaker() {
    $speaker_ids = \Meta::get($this->ID, '_speakers');
    if(!is_array($speaker_ids)) {
      return;
    }

    $speakers = get_posts([
      'include' => $speaker_ids,
      'post_type' => 'speaker',
      'lang' => Session::lang(),
    ]);

    $names = '';
    foreach($speakers as $speaker) {
      $names .= $speaker->post_title;
    }

    return $names;
  }

  public function types() {
    $types = wp_get_post_terms($this->ID, 'session_type', ['lang' => Session::lang()]);

    $names = [];
    foreach($types as $type) {
      array_push($names, $type->name);
    }

    return $names;
  }

  /*
  public function all() {
    $query = new \WP_Query([
      'post_type' => 'session',
      'posts_per_page' => -1,
      'lang' => $this->lang(),
      'post_status' => 'publish'
    ]);

    return $query->get_posts();
  }
 */

  public function days() {
   return get_terms(
     'session_time',
     [
       'parent' => 0
     ]
   );
  }

  public function times(\WP_Term $day) {
    return get_terms(
      'session_time',
      [
        'parent' => $day->term_id
      ]
    );
  }

  public function rooms() {
    return get_terms(
      'session_room'
    );
  }

  public function group_by_days() {
    $group = [];
    $days = $this->days();

    foreach($days as $day) {
      array_push($group, [$day, $this->times($day)]);
    }

    return $group;
  }

  static public function lang() {
    $lang = get_query_var('lang');
    $availables = pll_languages_list();

    if(in_array($lang, $availables)) {
      return $lang;
    }

    return pll_default_language();
  }
}
