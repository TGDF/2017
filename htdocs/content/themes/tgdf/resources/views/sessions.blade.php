@extends('layouts.app')

@section('content')
  <div class="box">
  @foreach($times as $day)
    <div class="schedule">
      <h2 class="schedule__day">{{ $day[0]->name }}</h2>
      <table class="schedule__table">
        <thead class="schedule__header">
          <tr class="schedule__table-row">
            <th className="schedule__table-col" />
            @foreach($rooms as $room)
              <th class="schedule__table-col">{{ $room->name }}</th>
            @endforeach
          </tr>
        </thead>
        <tbody class"schedule__body">
          @foreach($day[1] as $time)
            <tr class="schedule__table-row">
              <th class="schedule__table-col schedule__table-col--header">{{ $time->name }}</th>
              @if(array_key_exists($time->term_id, $sessions))
                @if(is_array($sessions[$time->term_id]))
                  @foreach($rooms as $room)
                  <td class="schedule__table-col">
                    @if(array_key_exists($room->term_id, $sessions[$time->term_id]))
                      @foreach($sessions[$time->term_id][$room->term_id] as $session)
                        <div class="schedule__session">
                          <div class="schedule__session-name">{{ $session->post_title }}</div>
                          <div class="schedule__session-speaker">
                            @each('session.speaker', $session->speaker(), 'speaker')
                          </div>
                          @each('session.type', $session->types(), 'type')
                        </div>
                      @endforeach
                    @endif
                  </td>
                  @endforeach
                @else
                  <td class="schedule__table-col" colspan="4">
                    <div class="schedule__session">
                      <div class="schedule__session-name">{{ $sessions[$time->term_id]->post_title }}</div>
                      <div class="schedule__session-speaker">
                        @each('session.speaker', $sessions[$time->term_id]->speaker(), 'speaker')
                      </div>
                      @each('session.type', $sessions[$time->term_id]->types(), 'type')
                    </div>
                  </td>
                @endif
              @else
                <td class="schedule__table-col" colspan="4"></td>
              @endif
            </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  @endforeach
  </div>
@endsection
