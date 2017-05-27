<?php

namespace Theme\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Language.
 * Help you retrieve data from your $prefix_posts table.
 *
 * @package Theme\Models
 */
class Language extends Model
{
  protected $table = 'term_taxonomy';
  protected $primaryKey = 'term_taxonomy_id';
  public $timestamps = false;

  static public function boot() {
    parent::boot();

    static::addGlobalScope('term', function (Builder $builder) {
      $builder->join('terms', 'terms.term_id', '=', 'term_taxonomy.term_id')
              ->where('taxonomy', '=', 'language');
    });
  }
}
