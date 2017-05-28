<div class="row">
  <div class="12u 12u(mobile) partner__item">
    <section class="box">
      <div class="row">
        <div class="3u 12u(mobile)">
          <a href="{{ $sponsor->link() }}" class="image">
            <img src="{{ $sponsor->logo() }}" alt="{{ $sponsor->post_title }}" />
          </a>
        </div>
        <div class="9u 12u(mobile)">
          <header>
            <h3>{{ $sponsor->post_title }}</h3>
          </header>
          {!! apply_filters('the_excerpt', $sponsor->post_excerpt) !!}
        </div>
      </div>
    </section>
  </div>
</div>
