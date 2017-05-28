<div>
  <h3>{{ $session->post_title }}</h3>
  {!! apply_filters('the_content', $session->post_content) !!}
</div>
