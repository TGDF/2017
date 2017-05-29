@extends('layouts.app')

@section('header')
  <section id="banner">
    <div id="home-slider" class="home-slider">
      <div><div class="slider slider1"></div></div>
      <div><div class="slider slider2"></div></div>
    </div>
  </section>
  <section id="intro" class="container">
    <div class="row">
      <div class="12u 12u(mobile)">
        <section class="first">
          <i class="icon featured fa-gamepad"></i>
          <header>
            <h2>{{ bloginfo('name') }}</h2>
          </header>
          <div class="home__introduce">
            {!! pll__('INTRODUCE') !!}
          </div>
        </section>
      </div>
    </div>
  </section>
@endsection

@section('content')
  <section>
    <header class="major">
      <h2>{{ pll__('最新消息') }}</h2>
    </header>
    @foreach($posts_in_group as $group)
      <div class="row">
        @each('home.post', $group, 'post')
      </div>
    @endforeach
  </section>
  <section>
    <header class="major">
      <h2>{{ pll__('合作夥伴') }}</h2>
    </header>
    @foreach($sponsors_in_group as $group)
      <div class="row">
        @each('home.partner', $group, 'sponsor')
      </div>
    @endforeach
  </section>
@endsection
