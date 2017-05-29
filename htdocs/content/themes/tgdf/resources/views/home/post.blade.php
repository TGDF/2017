<div class="4u 12u(mobile)">
  <section class="box">
    <a href="{{ $post->link() }}" class="image featured">
      <img src="{{ $post->thumbnail() }}" alt="{{ $post->post_title }}" />
    </a>
    <header><h3>{{ $post->post_title }}</h3></header>
    {!! $post->excerpt() !!}
    <footer>
      <a href="{{ $post->link() }}" class="button alt">{{ pll__('閱讀更多') }}</a>
    </footer>
  </section>
</div>
