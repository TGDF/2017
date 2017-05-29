<!DOCTYPE HTML>
<!--
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
    {{ wp_head() }}
	</head>
	<body class="homepage">
		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<div id="header">

            <!-- Logo -->
            <h1 class="logo">{{ bloginfo('name') }}</h1>

						<!-- Nav -->
							<nav id="nav">
								<ul>
									<li class="{{ is_home() ? 'current' : ''}}"><a href="{{ home_url('/') }}">{{ pll__('首頁') }}</a></li>
                  <li class="{{ is_page('schedule') ? 'current' : '' }}"><a href="{{ home_url('/schedule') }}">{{ pll__('議程表') }}</a></li>
                  <li class="{{ is_archive('speaker') || is_singular('speaker') ? 'current' : '' }}"><a href="{{ home_url('/speakers') }}">{{ pll__('講師陣容') }}</a></li>
                  <li class="{{ is_page('partners') ? 'current' : '' }}"><a href="{{ home_url('/partners') }}">{{ pll__('合作夥伴') }}</a></li>
                  <li class="{{ is_page('register') ? 'current' : '' }}"><a href="{{ home_url('/register') }}">{{ pll__('立即購票') }}</a></li>
                  <li class="{{ is_page('opportunities') ? 'current' : '' }}"><a href="{{ home_url('/opportunities') }}">{{ pll__('商業媒合') }}</a></li>
                  @if( pll_current_language() == 'zh')
                    <li><a href="?lang=en">{{ pll__('English') }}</a></li>
                  @else
                    <li><a href="?lang=zh">{{ pll__('繁體中文') }}</a></li>
                  @endif
                </ul>
							</nav>

              @yield('header')
					</div>
				</div>

			<!-- Main -->
				<div id="main-wrapper">
          <div class="container">
            @yield('content')
          </div>
				</div>

			<!-- Footer -->
      <footer id="footer" className="bg-inverse">
        &copy; 2017 {{ bloginfo('name') }} all rights reversed.
      </footer>

		</div>

    {{ wp_footer() }}
	</body>
</html>
