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
        ->where('post_type', 'session');
    });
  }

  public function scopeLang($query, $lang) {
    $availables = pll_languages_list();

    if(!in_array($lang, $availables)) {
      $lang = pll_default_language();
    }

    return $query->where('terms.slug', $lang);
  }


  public function speaker() {
    $speaker_ids = \Meta::get($this->ID, '_speakers', false);
    if(!is_array($speaker_ids)) {
      return;
    }

    $names = [];
    foreach($speaker_ids as $speaker) {
      $id = pll_get_post($speaker);
      if($id == false) { $id = $speaker; }
      if(empty($id)) { continue; }
      $speaker = get_post($id);
      array_push($names, [pll_get_post($id, 'zh'), $speaker]);
    }

    return $names;
  }

  public function types() {
    $lang = get_query_var('lang');
    $availables = pll_languages_list();

    if(!in_array($lang, $availables)) {
      $lang = pll_default_language();
    }

    $types = wp_get_post_terms($this->ID, 'session_type', ['lang' => $lang]);

    $names = [];
    foreach($types as $type) {
      array_push($names, $type->name);
    }

    return $names;
  }

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
}
