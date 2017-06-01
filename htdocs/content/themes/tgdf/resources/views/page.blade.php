@extends('layouts.app')

@section('content')
  <article class="box post">
    <header>
      <h2>{{ $page->post_title }}</h2>
    </header>
    {!! apply_filters('the_content', $page->post_content) !!}
  </article>
@endsection
