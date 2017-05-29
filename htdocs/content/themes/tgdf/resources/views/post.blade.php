@extends('layouts.app')

@section('og')
  <meta property="og:description"        content="{{ wp_trim_words(wp_strip_all_tags($post->post_content, true), 150 ) }}" />
  <meta property="og:image"              content="{{ get_the_post_thumbnail_url( $post->ID, 'post-thumbnail-large' ) }}" />
@show


@section('content')
  <article class="box post opportunities__description">
    <div class="image featured">
      <img src="{{ get_the_post_thumbnail_url( $post->ID, 'post-thumbnail-full' ) }}" alt={{ $post->post_title }} />
    </div>
    <header>
      <h2>{{ $post->post_title }}</h2>
    </header>
    {!! apply_filters('the_content', $post->post_content) !!}
  </article>
@endsection
