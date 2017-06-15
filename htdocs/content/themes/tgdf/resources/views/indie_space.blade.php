@extends('layouts.app')

@section('header')
  <section id="banner">
    <div class="indie-space__banner">
      <div><img src="{{ themosis_theme_assets() . '/images/indie_space.png' }}" /></div>
    </div>
  </section>
@endsection

@section('content')
  <article class="box post">
    {!! apply_filters('the_content', $page->post_content) !!}
  </article>
  @foreach($chunks as $games)
    <div class="row">
      @each('indie.game', $games, 'game')
    </div>
  @endforeach
@endsection
