@extends('layouts.app')

@section('header')
  <section id="intro" class="register__header container">
    <div class="row">
      <div class="4u 12u(mobile)">
        <section class="first">
          <a href="{{ pll__('BUY_TICKET_LINK') }}" target="_blank" rel="noopener noreferrer">
            <i class="icon featured fa-user"></i>
          </a>
          <header>
            <h2>{{ pll__('一般票') }}</h2>
            <h3>{{ pll__('TWD 2,500') }}</h3>
          </header>
          <p>{{ pll__('單人購票方案。') }}</p>
          <br />
          <p><a href="{{ pll__('BUY_TICKET_LINK') }}" target="_blank" rel="noopener noreferrer" class="button">{{ pll__('立即購票') }}</a></p>
        </section>
      </div>
      <div class="4u 12u(mobile)">
        <section class="middle">
          <a href="{{ pll__('BUY_TICKET_LINK') }}" target="_blank" rel="noopener noreferrer">
            <i class="icon featured fa-users"></i>
          </a>
          <header>
            <h2>{{ pll__('團體票') }}</h2>
            <h3>{{ pll__('TWD 1,800') }}</h3>
          </header>
          <p>{{ pll__('兩人或兩人以上團體，可透過此方案購票。') }}</p>
          <br />
          <p><a href="{{ pll__('BUY_TICKET_LINK') }}" target="_blank" rel="noopener noreferrer" class="button">{{ pll__('立即購票') }}</a></p>
        </section>
      </div>
      <div class="4u 12u(mobile)">
        <section class="last">
          <a href="{{ pll__('BUY_TICKET_LINK') }}" target="_blank" rel="noopener noreferrer">
            <i class="icon featured fa-graduation-cap"></i>
          </a>
          <header>
            <h2>{{ pll__('學生票') }}</h2>
            <h3>{{ pll__('TWD 1,000') }}</h3>
          </header>
          <p>{{ pll__('學生購票方案，報到時須出示學生證。')}}</p>
          <br />
          <p><a href="{{ pll__('BUY_TICKET_LINK') }}" target="_blank" rel="noopener noreferrer" class="button">{{ pll__('立即購票') }}</a></p>
        </section>
      </div>
    </div>
  </section>
@endsection

@section('content')
  <article class="box post register__description">
    {!! apply_filters('the_content', $page->post_content) !!}
  </article>
@endsection
