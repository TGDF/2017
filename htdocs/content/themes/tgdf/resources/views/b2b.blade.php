@extends('layouts.app')

@section('content')
  <article class="box post opportunities__description">
    <div id="b2b-slider" class="image featured opportunities__slider">
      <div><div class="slider slider1"></div></div>
      <div><div class="slider slider2"></div></div>
    </div>
    <header>
      <h2>{{ $page->post_title }}</h2>
    </header>
    {!! apply_filters('the_content', $page->post_content) !!}
  </article>
@endsection
