<div class="4u 12u(mobile) indie-game__item partner__item">
  <section class="box">
    <a href="{{ $game->link() }}" target="_blank" class="image featured">
      <img src="{{ $game->media() }}" alt="{{ $game->post_title }}" />
    </a>
    <header>
      <h3>
        {{ $game->post_title }}
        <span class="indie-game__team-name">{{ $game->team() }}</span>
      </h3>
    </header>

    {!! $game->excerpt() !!}

    @if(!empty($game->video()))
    <footer>
      <a href="{{ $game->video() }}" target="_blank" class="button alt">{{ pll__('觀看影片') }}</a>
    </footer>
    @endif

  </section>
</div>
