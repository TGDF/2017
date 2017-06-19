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
  <section id="map" class="container">
    <div class="row">
      <div class="6u 12u(mobile)">
        <h2>{!! pll__('交通資訊') !!}</h2>
        <div>
          {!! pll__('MAPINFO') !!}

        </div>
      </div>
      <div class="6u 12u(mobile)">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.690461312514!2d121.55908131500651!3d25.04457668396741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18365043482713a4!2z6Ie65YyX5paH5Ym15aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1497889168972" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
