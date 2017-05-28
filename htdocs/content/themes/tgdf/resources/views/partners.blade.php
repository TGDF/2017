@extends('layouts.app')

@section('content')
  @foreach($levels as $level)
    <section>
    <header class="major">
      <h2>{{ $level->name }}</h2>
    </header>
    @each('partner.partner', Theme\Models\Sponsor::where('terms.term_id', $level->term_id)->get(), 'sponsor')
    </section>
  @endforeach
@endsection
