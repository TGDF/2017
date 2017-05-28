<div class="3u 12u(mobile) partner__item">
  <section class="box">
    <a href="{{ get_permalink(pll_get_post($speaker->ID, 'zh')) }}" class="image featured">
      <img src="{{ get_the_post_thumbnail_url( $speaker->ID, 'speaker-small' ) }}" alt="{{ $speaker->post_title }}" />
    </a>
    <header>
      <h3>{{ $speaker->post_title }}</h3>
    </header>

    {!! $speaker->excerpt() !!}

    <footer>
      <a href="{{ get_permalink(pll_get_post($speaker->ID, 'zh')) }}" class="button alt">{{ pll__('閱讀更多') }}</a>
    </footer>
  </section>
</div>
