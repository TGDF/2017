<?php

namespace Theme\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Sponsor.
 * Help you retrieve data from your $prefix_posts table.
 *
 * @package Theme\Models
 */
class Sponsor extends Model
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
        ->where('post_status', 'publish')
        ->where('post_type', 'sponsor');
    });
  }

  public function link() {
    return \Meta::get($this->ID, 'sponsor-link');
  }

  public function logo($size = 'sponsor-logo') {
    return get_the_post_thumbnail_url( $this->ID, $size );
  }

  public function scopeLang($query, $lang) {
    $availables = pll_languages_list();

    if(!in_array($lang, $availables)) {
      $lang = pll_default_language();
    }

    return $query->where('terms.slug', $lang);
  }
}
