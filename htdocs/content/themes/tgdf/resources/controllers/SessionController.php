<?php

namespace Theme\Controllers;

use Themosis\Route\BaseController;

use Theme\Models;

class SessionController extends BaseController
{
    public function index($page, $query, Models\Session $session) {
      $lang = pll_current_language();
      $page = get_post(pll_get_post($page->ID));
      $sessions = Models\Session::lang($lang)->get();

      return view('sessions', [
        'page' => $page,
        'sessions' => $this->group_session($sessions),
        'times' => $session->group_by_days(),
        'rooms' => $session->rooms()
      ]);
    }

    protected function group_session($sessions) {
      $group = [];
      foreach($sessions as $session) {
        $times = wp_get_post_terms( $session->ID, 'session_time' );
        $time = array_shift($times);
        if(empty($time)) {
          continue;
        }

        if(empty($group[$time->term_id])) {
          $group[$time->term_id] = [];
        }

        $rooms = wp_get_post_terms( $session->ID, 'session_room' );
        $room = array_shift($rooms);

        if(empty($room)) {
          $group[$time->term_id] = $session;
          continue;
        }

        if(empty($group[$time->term_id][$room->term_id])) {
          $group[$time->term_id][$room->term_id] = [];
        }

        array_push($group[$time->term_id][$room->term_id], $session);
      }

      return $group;
    }
}
