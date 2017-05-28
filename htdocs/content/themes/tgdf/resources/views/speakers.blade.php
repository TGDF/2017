@extends('layouts.app')

@section('content')
  @foreach($chunks as $speakers)
    <div class="row">
      @each('speaker.speaker', $speakers, 'speaker')
    </div>
  @endforeach
@endsection
