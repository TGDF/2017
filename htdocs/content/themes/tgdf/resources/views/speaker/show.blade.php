@extends('layouts.app')

@section('og')
  <meta property="og:description"        content="{{ wp_trim_words(wp_strip_all_tags($speaker->post_content, true), 150 ) }}" />
  <meta property="og:image"              content="{{ get_the_post_thumbnail_url( $speaker->ID, 'speaker-full' ) }}" />
@show

@section('content')
<section class="container">
  <article class="box post">
    <div class="row">
      <div class="4u 12u(mobile)">
        <a href="" class="image"><img src="{{ get_the_post_thumbnail_url( $speaker->ID, 'speaker-full' ) }}" alt="{{ $speaker->post_title }}" /></a>
      </div>
      <div class="8u 12u(mobile)">
        <header>
          <h2>{{ $speaker->post_title }}</h2>
        </header>
        {!! apply_filters('the_content', $speaker->post_content) !!}
        @if(count($speaker->sessions()) > 0)
          <hr />
          @each('speaker.session', $speaker->sessions(), 'session')
        @endif
        </div>
      </div>
  </article>
</section>
@endsection
