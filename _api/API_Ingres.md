<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link crossorigin="anonymous" media="all" integrity="sha512-XkdvnY4XAps/ohU58xyeZCv2463I3ZTnOhwzle5VPdwFw9Eh/ZfNvhlTgf4H9K7RPiRXW3oGu7CuNk9QiENAFQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-b003e0a30d85cc60f5920a4b6ff04123.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-+EeonPFJPOixSBlN5rTxrzh6vdTLNhknT6HivFp5j4d25wXRkAV0J5LtGSOnUvDdYd5M4r+WcOfulwVw0yLa+Q==" rel="stylesheet" href="https://github.githubassets.com/assets/github-69306aac5d15cf59cad51421acb1bc7d.css" />
  <meta name="viewport" content="width=device-width">
  
  <title>api.gouv.fr/API_Ingres.md at master · betagouv/api.gouv.fr</title>
    <meta name="description" content="Liste les API disponibles au sein de l&#39;administration française - betagouv/api.gouv.fr">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/7874148?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="betagouv/api.gouv.fr" /><meta name="twitter:description" content="Liste les API disponibles au sein de l&#39;administration française - betagouv/api.gouv.fr" />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/7874148?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="betagouv/api.gouv.fr" /><meta property="og:url" content="https://github.com/betagouv/api.gouv.fr" /><meta property="og:description" content="Liste les API disponibles au sein de l&#39;administration française - betagouv/api.gouv.fr" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDQ4NjIxNDQ5Ojc1ODAyNzM3ZTMyZjU2MWIzNTY4M2UxYjNiNzhkOWVmYTIwZDdkYWJkYjNjNTVhYTQ5MjUzNDgyOGJhMzAxOTc=--68646f2cc99f77128808a61f7113ade865a162de">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="20BD:1A704:C696435:1305F1C5:5D8894C2" data-pjax-transient>
  <meta name="selected-link" value="repo_source" data-pjax-transient>
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="20BD:1A704:C696435:1305F1C5:5D8894C2" /><meta name="octolytics-dimension-region_edge" content="ams" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="3613758155543987680" /><meta name="octolytics-actor-id" content="55691316" /><meta name="octolytics-actor-login" content="Nico-Cisirh" /><meta name="octolytics-actor-hash" content="12c776808b20fad719217d8d79351e37bf3363ee4b12050a43e63f685cc735da" />
  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />
  <meta name="google-analytics" content="UA-3769691-2">
  <meta class="js-ga-set" name="userId" content="28f21b4244cc6a9134d7ca660b173d60">
  <meta class="js-ga-set" name="dimension1" content="Logged In">
  <meta name="hostname" content="github.com">
  <meta name="user-login" content="Nico-Cisirh">
  <meta name="expected-hostname" content="github.com">
  <meta name="js-proxy-site-detection-payload" content="ZWEyZjEzMjc0YWZiODc5MjBmYzU5YjYyZjEyZTRkNGVmZmYxY2I2YmU5N2M5ZGExYWExMjUxZTAxYzViNDk5OHx7InJlbW90ZV9hZGRyZXNzIjoiMTg1LjI0LjE4Ni41IiwicmVxdWVzdF9pZCI6IjIwQkQ6MUE3MDQ6QzY5NjQzNToxMzA1RjFDNTo1RDg4OTRDMiIsInRpbWVzdGFtcCI6MTU2OTIzMjA3OCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">
  <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">
  <meta name="html-safe-nonce" content="87fb563825895131e6a563e2ff202ed2854d1919">
  <meta http-equiv="x-pjax-version" content="3b02fa1e5aa38bd2ff8205d7c128dcc7">
  <link href="https://github.com/betagouv/api.gouv.fr/commits/master.atom" rel="alternate" title="Recent Commits to api.gouv.fr:master" type="application/atom+xml">
  <meta name="go-import" content="github.com/betagouv/api.gouv.fr git https://github.com/betagouv/api.gouv.fr.git">
  <meta name="octolytics-dimension-user_id" content="7874148" /><meta name="octolytics-dimension-user_login" content="betagouv" /><meta name="octolytics-dimension-repository_id" content="52606753" /><meta name="octolytics-dimension-repository_nwo" content="betagouv/api.gouv.fr" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="52606753" /><meta name="octolytics-dimension-repository_network_root_nwo" content="betagouv/api.gouv.fr" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />
  <link rel="canonical" href="https://github.com/betagouv/api.gouv.fr/blob/master/_api/API_Ingres.md" data-pjax-transient>
  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">
  <meta name="theme-color" content="#1e2327">
  <meta name="webauthn-auth-enabled" content="true">
  <meta name="webauthn-registration-enabled" content="true">
  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">
</head>

<body class="logged-in env-production page-responsive page-blob">
  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
       <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">
    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="52606753" data-scoped-search-url="/betagouv/api.gouv.fr/search" data-unscoped-search-url="/search" action="/betagouv/api.gouv.fr/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=8bnQG4IsEfTt/SKK8dfyI2e/FmZi6i+X1nnDivjM8v6E12t1d2L1sGXQIZcwTQUvPGlab7z9CYLa0l/P6nFKTA=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/Nico-Cisirh">
      <img class="avatar" height="20" width="20" alt="@Nico-Cisirh" src="https://avatars0.githubusercontent.com/u/55691316?s=60&amp;v=4" />
      Nico-Cisirh
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="i1AodQSQMeqq9Y8aeDGrps1iDc2IVphmvSc3o0XOPGHvBLIETKmfW1XE0ukbRAITgwQC/wm+4CY9+ZLwQpd/bA==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/betagouv">betagouv</a>
    /
    <a class="Header-link" href="/betagouv/api.gouv.fr">api.gouv.fr</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:55691316" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="betagouv/api.gouv.fr">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/betagouv/api.gouv.fr/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
<details class="details-overlay details-reset">
  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@Nico-Cisirh" class="avatar" src="https://avatars3.githubusercontent.com/u/55691316?s=40&amp;v=4" height="20" width="20">
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/Nico-Cisirh" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">Nico-Cisirh</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:7874148,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:55691316,&quot;client_id&quot;:&quot;841393637.1566492128&quot;,&quot;originating_request_id&quot;:&quot;20BD:1A704:C696435:1305F1C5:5D8894C2&quot;,&quot;originating_url&quot;:&quot;https://github.com/betagouv/api.gouv.fr/blob/master/_api/API_Ingres.md&quot;,&quot;referrer&quot;:&quot;https://github.com/betagouv/api.gouv.fr/tree/master/_api&quot;}}" data-hydro-click-hmac="33175260ca07e386c9487aa6fab7ad9755869363ef8604866ecfc20f410a274e">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="0Kn/X06VP6u63tCZJqGpB3SiY6Lq3rt9OmtHZpc6yfZA7OCsUv7YxT9H7pD76fsx1nl1xGnnw1/vqG/9Wp3D4w==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-09-23T12:17:58+02:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-09-23T12:47:58+02:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-09-23T15:47:58+02:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-09-23T23:59:59+02:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-09-29T23:59:59+02:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/Nico-Cisirh" data-ga-click="Header, go to profile, text:your profile">Your profile</a>


    <a role="menuitem" class="dropdown-item" href="/Nico-Cisirh?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/Nico-Cisirh?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/Nico-Cisirh?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>


    <div role="none" class="dropdown-divider"></div>
    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="VI36UoXPzuGZoDI53pwTSLtpmkbYCcUhAgKLEpC54ksw2WAjzfZgUGaRb8q96br99Q+VdFnhvWGC3C5Bl+ChRg==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  

      <div class="border-bottom shelf intro-shelf js-notice mb-0 pb-4">
  <div class="width-full container">
    <div class="width-full mx-auto shelf-content">
      <h2 class="shelf-title">Learn Git and GitHub without any code!</h2>
      <p class="shelf-lead">
          Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
      </p>
      <a class="btn btn-primary shelf-cta" target="_blank" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;READ_GUIDE&quot;,&quot;repository_id&quot;:52606753,&quot;client_id&quot;:&quot;841393637.1566492128&quot;,&quot;originating_request_id&quot;:&quot;20BD:1A704:C696435:1305F1C5:5D8894C2&quot;,&quot;originating_url&quot;:&quot;https://github.com/betagouv/api.gouv.fr/blob/master/_api/API_Ingres.md&quot;,&quot;referrer&quot;:&quot;https://github.com/betagouv/api.gouv.fr/tree/master/_api&quot;,&quot;user_id&quot;:55691316}}" data-hydro-click-hmac="85bd1c155366f77e0b9cbd89ee934646503013cdfe97f925a2dcaad1f8364b6a" href="https://guides.github.com/activities/hello-world/">Read the guide</a>
    </div>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="shelf-dismiss js-notice-dismiss" action="/dashboard/dismiss_bootcamp" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="WZt1bVbdq1//z2Y9Ejuc0xXhXm/9n7AstMJ1TekPXCd9y6dyxM0Y5yHIsUnPEtz6YcY+LE1X9i5ekZO3s+iK+A==" />
      <button name="button" type="submit" class="mr-1 close-button tooltipped tooltipped-w" aria-label="Hide this notice forever" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;DISMISS_BANNER&quot;,&quot;repository_id&quot;:52606753,&quot;client_id&quot;:&quot;841393637.1566492128&quot;,&quot;originating_request_id&quot;:&quot;20BD:1A704:C696435:1305F1C5:5D8894C2&quot;,&quot;originating_url&quot;:&quot;https://github.com/betagouv/api.gouv.fr/blob/master/_api/API_Ingres.md&quot;,&quot;referrer&quot;:&quot;https://github.com/betagouv/api.gouv.fr/tree/master/_api&quot;,&quot;user_id&quot;:55691316}}" data-hydro-click-hmac="708b72c509da3492a099f4b3bc437ad210b3d499c2f5113476cedbdb8cb2a0d6">
        <svg aria-label="Hide this notice forever" class="octicon octicon-x v-align-text-top" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
</button></form>  </div>
</div>

  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">
  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="XmGMP8tBrlK0E6QArrvsYEHzJA1nc10t0Yuv7bZRf2gD5spz1oYCvalwVr39Y6s5lelPq7TbYk/pVfKv+d2a1A==" />      <input type="hidden" name="repository_id" value="52606753">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:52606753,&quot;client_id&quot;:&quot;841393637.1566492128&quot;,&quot;originating_request_id&quot;:&quot;20BD:1A704:C696435:1305F1C5:5D8894C2&quot;,&quot;originating_url&quot;:&quot;https://github.com/betagouv/api.gouv.fr/blob/master/_api/API_Ingres.md&quot;,&quot;referrer&quot;:&quot;https://github.com/betagouv/api.gouv.fr/tree/master/_api&quot;,&quot;user_id&quot;:55691316}}" data-hydro-click-hmac="26c55cc984d879f64e1c63ebffb96103ed2ab2fa14059a6a78993a623635b135" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/betagouv/api.gouv.fr/watchers"
          aria-label="19 users are watching this repository">
          19
        </a>
</form>
  </li>

  <li>
        <span class="btn btn-sm btn-with-count disabled tooltipped tooltipped-s"
          aria-label="You can't star at this time">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
    </span>

    <a class="social-count js-social-count" href="/betagouv/api.gouv.fr/stargazers"
      aria-label="139 users starred this repository">
      139
    </a>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/betagouv/api.gouv.fr/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="sKf01kMOdiHlNzijC5NWqKNYzB8U7BJCZNEdFaygosA6EaIMYKKvgVZJa3r7NoKlLK5DTcFMRSlj31x2GxzRoA==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:52606753,&quot;client_id&quot;:&quot;841393637.1566492128&quot;,&quot;originating_request_id&quot;:&quot;20BD:1A704:C696435:1305F1C5:5D8894C2&quot;,&quot;originating_url&quot;:&quot;https://github.com/betagouv/api.gouv.fr/blob/master/_api/API_Ingres.md&quot;,&quot;referrer&quot;:&quot;https://github.com/betagouv/api.gouv.fr/tree/master/_api&quot;,&quot;user_id&quot;:55691316}}" data-hydro-click-hmac="930d8e89cb13941842cf5285b1020fb2dd61964ca1cda1a5d01497c3f70a7220" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of betagouv/api.gouv.fr to your account" aria-label="Fork your own copy of betagouv/api.gouv.fr to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</button></form>
    <a href="/betagouv/api.gouv.fr/network/members" class="social-count"
       aria-label="81 users forked this repository">
      81
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/betagouv/hovercard" href="/betagouv">betagouv</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/betagouv/api.gouv.fr">api.gouv.fr</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /betagouv/api.gouv.fr" href="/betagouv/api.gouv.fr">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /betagouv/api.gouv.fr/issues" href="/betagouv/api.gouv.fr/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">4</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /betagouv/api.gouv.fr/pulls" href="/betagouv/api.gouv.fr/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /betagouv/api.gouv.fr/actions" href="/betagouv/api.gouv.fr/actions">
        <svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z"/></svg>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /betagouv/api.gouv.fr/projects" href="/betagouv/api.gouv.fr/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /betagouv/api.gouv.fr/wiki" href="/betagouv/api.gouv.fr/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /betagouv/api.gouv.fr/security/advisories" href="/betagouv/api.gouv.fr/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /betagouv/api.gouv.fr/pulse" href="/betagouv/api.gouv.fr/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /betagouv/api.gouv.fr" href="/betagouv/api.gouv.fr">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /betagouv/api.gouv.fr/issues" href="/betagouv/api.gouv.fr/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">4</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /betagouv/api.gouv.fr/pulls" href="/betagouv/api.gouv.fr/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /betagouv/api.gouv.fr/projects" href="/betagouv/api.gouv.fr/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /betagouv/api.gouv.fr/wiki" href="/betagouv/api.gouv.fr/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /betagouv/api.gouv.fr/security/advisories" href="/betagouv/api.gouv.fr/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /betagouv/api.gouv.fr/pulse" href="/betagouv/api.gouv.fr/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /betagouv/api.gouv.fr/community" href="/betagouv/api.gouv.fr/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/betagouv/api.gouv.fr/blob/091acbe87d2eda3fd16e2dd6ff4ee46a0a093493/_api/API_Ingres.md">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:042598a2de4c9dc88c13392560bc80cd -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/betagouv/api.gouv.fr/ref-list/master/_api/API_Ingres.md?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/betagouv/api.gouv.fr/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="_api/API_Ingres.md" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/betagouv/api.gouv.fr"><span>api.gouv.fr</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/betagouv/api.gouv.fr/tree/master/_api"><span>_api</span></a></span><span class="separator">/</span><strong class="final-path">API_Ingres.md</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/betagouv/api.gouv.fr/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="_api/API_Ingres.md" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/betagouv/api.gouv.fr/contributors/master/_api/API_Ingres.md" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
          <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>




    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">

  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
      41 lines (38 sloc)
      <span class="file-info-divider"></span>
    1.66 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/betagouv/api.gouv.fr/raw/master/_api/API_Ingres.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/betagouv/api.gouv.fr/blame/master/_api/API_Ingres.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/betagouv/api.gouv.fr/commits/master/_api/API_Ingres.md">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You need to verify your email address to propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You need to verify your email address to propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      
  <div id="readme" class="Box-body readme blob instapaper_body js-code-block-container">
    <article class="markdown-body entry-content p-3 p-md-6" itemprop="text"><table data-table-type="yaml-metadata">
  <thead>
  <tr>
  <th>title</th>
  <th>tagline</th>
  <th>owner</th>
  <th>contract</th>
  <th>logo</th>
  <th>external_site</th>
  <th>stat</th>
  <th>clients</th>
  <th>partners</th>
  <th>keywords</th>
  <th>score</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>API Ingres</div></td>
  <td><div>Récupérez l'ensemble des référentiels utilisés par les SIRH de la Fonction Publique d'Etat</div></td>
  <td><div>CISIRH</div></td>
  <td><div>OUVERT (utilisation restreinte au RIE)</div></td>
  <td><div>logo_cisirh.png</div></td>
  <td><div><a href="https://pissarho.cisirh.rie.gouv.fr/actualites/ingres/deploiement-de-deux-api-sur-lapplication-ingres" rel="nofollow">https://pissarho.cisirh.rie.gouv.fr/actualites/ingres/deploiement-de-deux-api-sur-lapplication-ingres</a></div></td>
  <td><div><table>
  <thead>
  <tr>
  <th>url</th>
  <th>label</th>
  <th>lastXdays</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div><a href="" rel="nofollow"></a></div></td>
  <td><div>Appels</div></td>
  <td><div>30</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div><table>
  <tbody>
  <tr>
  <td><div>applications RH</div></td>
  <td><div>institutions</div></td>
  <td><div>collectivités</div></td>
  <td><div>ministères</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div><table>
  <tbody>
  <tr>
  <td><div>CISIRH - Ingres</div></td>
  <td><div>CISIRH - D&eacute;partement Innovation (EL Greco)</div></td>
  <td><div>CISIRH - RenoiRH (Self Mobile)</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div><table>
  <tbody>
  <tr>
  <td><div>CISIRH</div></td>
  <td><div>Référentiels</div></td>
  <td><div>Nomenclatures</div></td>
  <td><div>Noyau RH FPE</div></td>
  <td><div>RCC</div></td>
  <td><div>Référentiels de Classification Centrale</div></td>
  <td><div>Liste des nomenclatures accessibles:</div></td>
  <td><div><table>
  <tbody>
  <tr>
	<td><div>Activités
	<td><div>Adage
	<td><div>Affectation principale-secondaire</div></td>
	<td><div>Agrégats pseudo grades niv1</div></td>
	<td><div>Annexes 14 et 15</div></td>
	<td><div>Appellations militaires</div></td>
	<td><div>Armes ou subdivisions d'armes</div></td>
	<td><div>Armées ou services</div></td>
	<td><div>CCE - Fin de situation</div></td>
	<td><div>CCE - Quotité de service</div></td>
	<td><div>CCE - Régimes de rémunération</div></td>
	<td><div>CCE - Temps partiel</div></td>
	<td><div>Caractère ministériel US</div></td>
	<td><div>Caractéristiques US - Agrégats niv1</div></td>
	<td><div>Caractéristiques US - Agrégats niv2</div></td>
	<td><div>Caractéristiques US héritables</div></td>
	<td><div>Caractéristiques propres à une US</div></td>
	<td><div>Catégories COMAEEH</div></td>
	<td><div>Catégories COTOREP</div></td>
	<td><div>Catégories bénéfic. oblig. emploi</div></td>
	<td><div>Catégories d'emploi LOLF</div></td>
	<td><div>Catégories d'emplois LOLF en délégation</div></td>
	<td><div>Catégories d'ouvriers du MINARM</div></td>
	<td><div>Catégories d'établissement</div></td>
	<td><div>Catégories de caractéristique US</div></td>
	<td><div>Catégories de casino</div></td>
	<td><div>Catégories de compétences</div></td>
	<td><div>Catégories de service</div></td>
	<td><div>Catégories ou pseudo catégories</div></td>
	<td><div>Catégories service d'origine (N4DS)</div></td>
	<td><div>Causes d'affectation</div></td>
	<td><div>Causes renouvellement de scolarité</div></td>
	<td><div>Centres de coûts</div></td>
	<td><div>Centres de profit</div></td>
	<td><div>Centres financiers</div></td>
	<td><div>Centres financiers en délégation</div></td>
	<td><div>Chevrons</div></td>
	<td><div>Classes cotisation PREFON</div></td>
	<td><div>Clés de calcul</div></td>
	<td><div>Code Pays</div></td>
	<td><div>Codes BJ</div></td>
	<td><div>Codes INSEE TAAF</div></td>
	<td><div>Codes NNE</div></td>
	<td><div>Codes PCS</div></td>
	<td><div>Codes PCS-ESE</div></td>
	<td><div>Codes SIRH</div></td>
	<td><div>Codes SLR</div></td>
	<td><div>Codes administration</div></td>
	<td><div>Codes administration</div></td>
	<td><div>Codes affectation</div></td>
	<td><div>Codes affectation et administration</div></td>
	<td><div>Codes article indem. compensatrice</div></td>
	<td><div>Codes avis</div></td>
	<td><div>Codes de situation de l'enfant</div></td>
	<td><div>Codes des OMID</div></td>
	<td><div>Codes devise</div></td>
	<td><div>Codes enfant à charge PF ou SFT</div></td>
	<td><div>Codes fin de situation</div></td>
	<td><div>Codes majoration PF</div></td>
	<td><div>Codes maladie professionnelle</div></td>
	<td><div>Codes mouvement</div></td>
	<td><div>Codes mutuelle</div></td>
	<td><div>Codes opération</div></td>
	<td><div>Codes origine</div></td>
	<td><div>Codes paiement</div></td>
	<td><div>Codes poste</div></td>
	<td><div>Codes prestation directe employeur</div></td>
	<td><div>Codes prestations familiales</div></td>
	<td><div>Codes prime ancienneté</div></td>
	<td><div>Codes prise en charge</div></td>
	<td><div>Codes prise en charge enfant</div></td>
	<td><div>Codes retraite complémentaire</div></td>
	<td><div>Codes régime de sécurité sociale</div></td>
	<td><div>Codes sens</div></td>
	<td><div>Codes spéciaux de mise à jour</div></td>
	<td><div>Codes taux</div></td>
	<td><div>Codes ventilation budgétaire</div></td>
	<td><div>Coefficients prime d'attractivité</div></td>
	<td><div>Compte PCE</div></td>
	<td><div>Compétences</div></td>
	<td><div>Conditions d'ouverture droit ASF</div></td>
	<td><div>Conditions de logement</div></td>
	<td><div>Congés absences - Agrégats niv1</div></td>
	<td><div>Congés-absences (position activité)</div></td>
	<td><div>Contrôles "Congés à l'étranger"</div></td>
	<td><div>Corps ou pseudo-corps</div></td>
	<td><div>Directions et Services Gestionnaires de RH militaires</div></td>
	<td><div>Distinctions honorifiques</div></td>
	<td><div>Domaine</div></td>
	<td><div>Domaine fonctionnel (PASA) en délégation</div></td>
	<td><div>Domaines fonctionnels (PASA)</div></td>
	<td><div>Données associées aux ER</div></td>
	<td><div>Droits liés à la mutation</div></td>
	<td><div>Départements</div></td>
	<td><div>Echelons</div></td>
	<td><div>Echéancier Jour-Nuit</div></td>
	<td><div>Ecoles</div></td>
	<td><div>Eléments de rémunération</div></td>
	<td><div>Emplois fonctionnels</div></td>
	<td><div>Enfant ou personne à charge</div></td>
	<td><div>Etat civil</div></td>
	<td><div>Etats du congé</div></td>
	<td><div>Etats du droit de la prestation</div></td>
	<td><div>Evénement</div></td>
	<td><div>Extension du numéro de voie</div></td>
	<td><div>Filières ou pseudo filières</div></td>
	<td><div>Fonctions</div></td>
	<td><div>Formes de service national</div></td>
	<td><div>Fréquences retenue à la source</div></td>
	<td><div>Garanties</div></td>
	<td><div>Grades dans l'ordre</div></td>
	<td><div>Grades du statut général des militaires</div></td>
	<td><div>Grades militaires statuts particuliers</div></td>
	<td><div>Grades ou pseudo-grades</div></td>
	<td><div>Grilles indiciaires ou échelles</div></td>
	<td><div>Groupes d'emplois fonctionnels</div></td>
	<td><div>Groupes d'invalidité</div></td>
	<td><div>Groupes d'éléments de rémunération</div></td>
	<td><div>Groupes de fonctions</div></td>
	<td><div>Groupes de résidence</div></td>
	<td><div>Hexaposte</div></td>
	<td><div>Hiérarchie militaire</div></td>
	<td><div>Hiérarchie militaire détaillée</div></td>
	<td><div>Hors-échelle-lettres</div></td>
	<td><div>Identifiant titularisation</div></td>
	<td><div>Identifiants PLQ</div></td>
	<td><div>Identifiants chaine de paye</div></td>
	<td><div>Identifiants métier</div></td>
	<td><div>Impacts rémunération</div></td>
	<td><div>Incompatibilités</div></td>
	<td><div>Indemnités forfaitaires suppl.</div></td>
	<td><div>Indemnités sujétion spéc. d'origine</div></td>
	<td><div>Indicateur booléen</div></td>
	<td><div>Indicateur droit PF</div></td>
	<td><div>Indicateur droit SFT</div></td>
	<td><div>Indicateur indem. difficultés adm.</div></td>
	<td><div>Indicateurs enfant ou pers. à charge</div></td>
	<td><div>Indicateurs liés au conjoint</div></td>
	<td><div>Indicateurs liés aux PF</div></td>
	<td><div>Indicateurs régime social applicable</div></td>
	<td><div>Indices</div></td>
	<td><div>Langues</div></td>
	<td><div>Lien Caractéristiques US héritables - Ministères et institutions de la République</div></td>
	<td><div>Lien Fonctions - Ministère et institution de la république</div></td>
	<td><div>Liens ER / Données associées</div></td>
	<td><div>Liens de filiation de l'enfant</div></td>
	<td><div>Liens de parenté</div></td>
	<td><div>Lieu d'exercice télétravail</div></td>
	<td><div>Limites d'âge</div></td>
	<td><div>Localisations interministérielles</div></td>
	<td><div>Localités à l'étranger</div></td>
	<td><div>Lots de gestion</div></td>
	<td><div>Ministère fichier GEST</div></td>
	<td><div>Ministères et instit. de la répub.</div></td>
	<td><div>Modalités d'affectation</div></td>
	<td><div>Modalités d'exercice - Unités de référence</div></td>
	<td><div>Modalités de concours</div></td>
	<td><div>Modalités de pratique de la langue</div></td>
	<td><div>Modalités de service</div></td>
	<td><div>Mode de calcul des PF</div></td>
	<td><div>Modes d'accès au corps ou assimilé</div></td>
	<td><div>Modes d'accès au grade</div></td>
	<td><div>Modes d'accès à l'échelon</div></td>
	<td><div>Modes d'attribution récompense</div></td>
	<td><div>Modes de calcul</div></td>
	<td><div>Modes de garde</div></td>
	<td><div>Modes de gestion</div></td>
	<td><div>Modes de paiement</div></td>
	<td><div>Modes de règlement</div></td>
	<td><div>Modes de rémunération</div></td>
	<td><div>Modes de sortie du corps</div></td>
	<td><div>Modes de versement pécule</div></td>
	<td><div>Modes entrée FPE ou carrière milit.</div></td>
	<td><div>Motifs cess. définitive de fonction</div></td>
	<td><div>Motifs d'interruption 2ème section</div></td>
	<td><div>Motifs de cessation - Agrégats niv1</div></td>
	<td><div>Motifs de changement d'employeur</div></td>
	<td><div>Motifs de fin du lien</div></td>
	<td><div>Motifs de maintien MICM</div></td>
	<td><div>Motifs de non participation</div></td>
	<td><div>Motifs de prolongation d'activité</div></td>
	<td><div>Motifs de sanctions</div></td>
	<td><div>Motifs du refus de formation</div></td>
	<td><div>Motifs prolongat./prorogat. stage</div></td>
	<td><div>Mutuelles</div></td>
	<td><div>Natures d'US</div></td>
	<td><div>Natures d'accident</div></td>
	<td><div>Natures d'affectation opérationnelle</div></td>
	<td><div>Natures d'enquête</div></td>
	<td><div>Natures d'organisation internationale</div></td>
	<td><div>Natures d'éléments de rémunération</div></td>
	<td><div>Natures de bonification</div></td>
	<td><div>Natures de corps ou emploi fonct.</div></td>
	<td><div>Natures de décision CDAPH</div></td>
	<td><div>Natures de fonction publique</div></td>
	<td><div>Natures de formation</div></td>
	<td><div>Natures de lésion</div></td>
	<td><div>Natures de texte</div></td>
	<td><div>Natures de versement</div></td>
	<td><div>Natures de voie</div></td>
	<td><div>Natures des services</div></td>
	<td><div>Natures des travaux</div></td>
	<td><div>Niveaux d'habilitation</div></td>
	<td><div>Niveaux de compétence</div></td>
	<td><div>Niveaux de diplôme</div></td>
	<td><div>Niveaux de langue</div></td>
	<td><div>Niveaux de médaille</div></td>
	<td><div>Niveaux de qualification</div></td>
	<td><div>Nomenclature d'activités françaises</div></td>
	<td><div>Nomenclatures génériques - Définition</div></td>
	<td><div>Nomenclatures génériques booléen - définition</div></td>
	<td><div>Nomenclatures simples - Définition</div></td>
	<td><div>Ordres des distinctions honorifiques</div></td>
	<td><div>Organisation internationale</div></td>
	<td><div>Organisations syndicales</div></td>
	<td><div>Organismes bilan de compétences</div></td>
	<td><div>Organismes certificateurs du diplôme</div></td>
	<td><div>Ornements</div></td>
	<td><div>PABA22</div></td>
	<td><div>Pays</div></td>
	<td><div>Populations</div></td>
	<td><div>Populations (Classification)</div></td>
	<td><div>Positions - Agrégats niv1</div></td>
	<td><div>Positions - Agrégats niv2</div></td>
	<td><div>Positions / Situations admin.</div></td>
	<td><div>Positions de la bonification</div></td>
	<td><div>Positions statutaires</div></td>
	<td><div>Profils cotisants</div></td>
	<td><div>Programmes / Ministères</div></td>
	<td><div>Propriétés du poste</div></td>
	<td><div>Pseudo grade NNE</div></td>
	<td><div>Périodicités</div></td>
	<td><div>Périodicités</div></td>
	<td><div>Périodicités travaillées</div></td>
	<td><div>Qualifications</div></td>
	<td><div>RIME - Domaines fonctionnels</div></td>
	<td><div>RIME - Emplois de référence</div></td>
	<td><div>Raisons de mise en 2ème section</div></td>
	<td><div>Raisons du forfait</div></td>
	<td><div>Revenus du conjoint</div></td>
	<td><div>Revenus liés à la famille</div></td>
	<td><div>Référentiels RGRH</div></td>
	<td><div>Régimes de rémunération</div></td>
	<td><div>Régimes de solde militaires</div></td>
	<td><div>Régions</div></td>
	<td><div>Résultats au concours</div></td>
	<td><div>Sanctions</div></td>
	<td><div>Sanctions - Agrégats niv1</div></td>
	<td><div>Sens Opération CET</div></td>
	<td><div>Sexes</div></td>
	<td><div>Situation de l'enfant</div></td>
	<td><div>Situations du congé</div></td>
	<td><div>Situations particulières</div></td>
	<td><div>Situations service national</div></td>
	<td><div>Situations statutaires</div></td>
	<td><div>Situations à l'étranger</div></td>
	<td><div>Sièges des lésions</div></td>
	<td><div>Sous-catég. ou pseudo sous-catég.</div></td>
	<td><div>Sous-domaine</div></td>
	<td><div>Sous-groupes d'ER</div></td>
	<td><div>Spécialités</div></td>
	<td><div>Spécialités RNCP</div></td>
	<td><div>Spécialités RNCP - Agrégats niv1</div></td>
	<td><div>Spécialités RNCP - Agrégats niv2</div></td>
	<td><div>Spécialités RNCP - Agrégats niv3</div></td>
	<td><div>Statut des actes</div></td>
	<td><div>Statuts (Types de population)</div></td>
	<td><div>Statuts - Agrégats niv1</div></td>
	<td><div>Statuts - Agrégats niv2</div></td>
	<td><div>Statuts / Modes gestion / Modes rém.</div></td>
	<td><div>Statuts juridique d'origine (N4DS)</div></td>
	<td><div>Structures budgétaires</div></td>
	<td><div>TP, service incomplet, surcotisation</div></td>
	<td><div>Tabank SEPA</div></td>
	<td><div>Taux HSE-HSA</div></td>
	<td><div>Taux d'ICM perçu</div></td>
	<td><div>Taux d'incapacité ou d'handicap</div></td>
	<td><div>Taux horaires ouvriers de la défense</div></td>
	<td><div>Taux horaires ouvriers du MTES</div></td>
	<td><div>Territoires de campagne</div></td>
	<td><div>Territoires hors d'Europe</div></td>
	<td><div>Texte</div></td>
	<td><div>Thèmes de formation</div></td>
	<td><div>Titres d'attribution</div></td>
	<td><div>Titres de civilité</div></td>
	<td><div>Transcodification codes ministères</div></td>
	<td><div>Type d'événement</div></td>
	<td><div>Type de carrière</div></td>
	<td><div>Type de fonction</div></td>
	<td><div>Type de format élémentaire</div></td>
	<td><div>Types adresse</div></td>
	<td><div>Types d'abonnement</div></td>
	<td><div>Types d'accident ou maladie prof.</div></td>
	<td><div>Types d'activité prof. de l'agent</div></td>
	<td><div>Types d'activité saisissable</div></td>
	<td><div>Types d'adresse d'US</div></td>
	<td><div>Types d'ancienneté</div></td>
	<td><div>Types d'avantage en nature</div></td>
	<td><div>Types d'engagement spécial réserve</div></td>
	<td><div>Types d'enseignement</div></td>
	<td><div>Types d'exposition</div></td>
	<td><div>Types d'habilitation</div></td>
	<td><div>Types d'identifiant</div></td>
	<td><div>Types d'indice</div></td>
	<td><div>Types d'indémnité</div></td>
	<td><div>Types d'occurrences</div></td>
	<td><div>Types d'organe de publication</div></td>
	<td><div>Types d'organisme</div></td>
	<td><div>Types d'échéancier</div></td>
	<td><div>Types d'éléments de rémunération</div></td>
	<td><div>Types d'évènement</div></td>
	<td><div>Types de bonification</div></td>
	<td><div>Types de bonification d'ancienneté</div></td>
	<td><div>Types de commune</div></td>
	<td><div>Types de concours</div></td>
	<td><div>Types de conjoint</div></td>
	<td><div>Types de contrat</div></td>
	<td><div>Types de cycle</div></td>
	<td><div>Types de distinction honorifique</div></td>
	<td><div>Types de durées</div></td>
	<td><div>Types de formation</div></td>
	<td><div>Types de lien juridique</div></td>
	<td><div>Types de mandat électif</div></td>
	<td><div>Types de mesure</div></td>
	<td><div>Types de nom</div></td>
	<td><div>Types de prestation enfants</div></td>
	<td><div>Types de préavis</div></td>
	<td><div>Types de prénom</div></td>
	<td><div>Types de saisine</div></td>
	<td><div>Types de service</div></td>
	<td><div>Types de service ou d'employeur</div></td>
	<td><div>Types de situation de famille</div></td>
	<td><div>Types de situation de stage</div></td>
	<td><div>Types de situation du contrat</div></td>
	<td><div>Types de territoire</div></td>
	<td><div>Types de texte</div></td>
	<td><div>Types de tiers bénéficiaire</div></td>
	<td><div>Types de variation d'ancienneté</div></td>
	<td><div>Typologies de population</div></td>
	<td><div>Témoins AM-PM</div></td>
	<td><div>Unités de gestion</div></td>
	<td><div>Unités de référence</div></td>
	<td><div>Unités structurelles</div></td>
	<td><div>Valeur du point de la FPE</div></td>
	<td><div>Versions Interface</div></td>
	<td><div>Versions de noyau</div></td>
	<td><div>Versions du FIP</div></td>
	<td><div>Zone astérisque</div></td>
	<td><div>Zone tarification remboursement trajet</div></td>
	<td><div>Zones de congés à l'étranger</div></td>
	<td><div>Zones de résidence</div></td>
	<td><div>Zones de validité</div></td>
  </tr>
  </tbody>
</table>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div><table>
  <thead>
  <tr>
  <th>detail</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div><table>
  <thead>
  <tr>
  <th>contact</th>
  <th>access</th>
  <th>doc_tech</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div><table>
  <thead>
  <tr>
  <th>link</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>nicolas.augereau@finances.gouv.fr</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div><table>
  <thead>
  <tr>
  <th>link</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div><a href="https://pissarho.cisirh.rie.gouv.fr/actualites/ingres/deploiement-de-deux-api-sur-lapplication-ingres" rel="nofollow">https://pissarho.cisirh.rie.gouv.fr/actualites/ingres/deploiement-de-deux-api-sur-lapplication-ingres</a></div></td>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div><table>
  <thead>
  <tr>
  <th>external</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div><a href="http://pissarho.cisirh.rie.gouv.fr/sites/default/files/2019-10/INGRES-PIL-API%20Nomenclatures%20Ingres_%20%280_7%29.pptx" rel="nofollow">http://pissarho.cisirh.rie.gouv.fr/sites/default/files/2019-10/INGRES-PIL-API%20Nomenclatures%20Ingres_%20%280_7%29.pptx</a></div></td>
  </tr>
  </tbody>
</table>
</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  </tr>
  </tbody>
</table>

<p>L’API Nomenclature permet d’accéder à toutes les nomenclatures noyau gérées dans l’application Ingres, soit plus de 350 nomenclatures sont accessibles.</p>
<p><b></b>Limitations actuelles:</b></p>
<p>Pour le moment, en dehors de certaines nomenclatures RCC ou externes pour lesquelles nous avons eu des demandes particulières (corps, grades, hexaposte…) seuls le code, les libellés court et long et la période de validité sont restitués par l’API pour 99% des nomenclatures.</p>
<p><b>Evolutions possibles:&nbsp;</b></p>
<p>En cas de besoin il est tout à fait possible de restituer l’ensemble des attributs gérés dans l'application Ingres pour chacune de ces nomenclatures. Cependant, au regard des développements nécessaires, nous préférons attendre qu’il y ait des besoins avérés.
  <br>Nous vous proposons donc de nous faire part de vos besoins afin de les étudier et de faire évoluer l’API de façon à ce qu’elle réponde au mieux à vos attentes.
</p>
<p><b></b>La liste des nomenclatures accessibles est la suivante :</b></p>
<p>Activités
  <br>Adage
  <br>Affectation principale-secondaire
  <br>Agrégats pseudo grades niv1
  <br>Annexes 14 et 15
  <br>Appellations militaires
  <br>Armes ou subdivisions d'armes
  <br>Armées ou services
  <br>CCE - Fin de situation
  <br>CCE - Quotité de service
  <br>CCE - Régimes de rémunération
  <br>CCE - Temps partiel
  <br>Caractère ministériel US
  <br>Caractéristiques US - Agrégats niv1
  <br>Caractéristiques US - Agrégats niv2
  <br>Caractéristiques US héritables
  <br>Caractéristiques propres à une US
  <br>Catégories COMAEEH
  <br>Catégories COTOREP
  <br>Catégories bénéfic. oblig. emploi
  <br>Catégories d'emploi LOLF
  <br>Catégories d'emplois LOLF en délégation
  <br>Catégories d'ouvriers du MINARM
  <br>Catégories d'établissement
  <br>Catégories de caractéristique US
  <br>Catégories de casino
  <br>Catégories de compétences
  <br>Catégories de service
  <br>Catégories ou pseudo catégories
  <br>Catégories service d'origine (N4DS)
  <br>Causes d'affectation
  <br>Causes renouvellement de scolarité
  <br>Centres de coûts
  <br>Centres de profit
  <br>Centres financiers
  <br>Centres financiers en délégation
  <br>Chevrons
  <br>Classes cotisation PREFON
  <br>Clés de calcul
  <br>Code Pays
  <br>Codes BJ
  <br>Codes INSEE TAAF
  <br>Codes NNE
  <br>Codes PCS
  <br>Codes PCS-ESE
  <br>Codes SIRH
  <br>Codes SLR
  <br>Codes administration
  <br>Codes administration
  <br>Codes affectation
  <br>Codes affectation et administration
  <br>Codes article indem. compensatrice
  <br>Codes avis
  <br>Codes de situation de l'enfant
  <br>Codes des OMID
  <br>Codes devise
  <br>Codes enfant à charge PF ou SFT
  <br>Codes fin de situation
  <br>Codes majoration PF
  <br>Codes maladie professionnelle
  <br>Codes mouvement
  <br>Codes mutuelle
  <br>Codes opération
  <br>Codes origine
  <br>Codes paiement
  <br>Codes poste
  <br>Codes prestation directe employeur
  <br>Codes prestations familiales
  <br>Codes prime ancienneté
  <br>Codes prise en charge
  <br>Codes prise en charge enfant
  <br>Codes retraite complémentaire
  <br>Codes régime de sécurité sociale
  <br>Codes sens
  <br>Codes spéciaux de mise à jour
  <br>Codes taux
  <br>Codes ventilation budgétaire
  <br>Coefficients prime d'attractivité
  <br>Compte PCE
  <br>Compétences
  <br>Conditions d'ouverture droit ASF
  <br>Conditions de logement
  <br>Congés absences - Agrégats niv1
  <br>Congés-absences (position activité)
  <br>Contrôles "Congés à l'étranger"
  <br>Corps ou pseudo-corps
  <br>Directions et Services Gestionnaires de RH militaires
  <br>Distinctions honorifiques
  <br>Domaine
  <br>Domaine fonctionnel (PASA) en délégation
  <br>Domaines fonctionnels (PASA)
  <br>Données associées aux ER
  <br>Droits liés à la mutation
  <br>Départements
  <br>Echelons
  <br>Echéancier Jour-Nuit
  <br>Ecoles
  <br>Eléments de rémunération
  <br>Emplois fonctionnels
  <br>Enfant ou personne à charge
  <br>Etat civil
  <br>Etats du congé
  <br>Etats du droit de la prestation
  <br>Evénement
  <br>Extension du numéro de voie
  <br>Filières ou pseudo filières
  <br>Fonctions
  <br>Formes de service national
  <br>Fréquences retenue à la source
  <br>Garanties
  <br>Grades dans l'ordre
  <br>Grades du statut général des militaires
  <br>Grades militaires statuts particuliers
  <br>Grades ou pseudo-grades
  <br>Grilles indiciaires ou échelles
  <br>Groupes d'emplois fonctionnels
  <br>Groupes d'invalidité
  <br>Groupes d'éléments de rémunération
  <br>Groupes de fonctions
  <br>Groupes de résidence
  <br>Hexaposte
  <br>Hiérarchie militaire
  <br>Hiérarchie militaire détaillée
  <br>Hors-échelle-lettres
  <br>Identifiant titularisation
  <br>Identifiants PLQ
  <br>Identifiants chaine de paye
  <br>Identifiants métier
  <br>Impacts rémunération
  <br>Incompatibilités
  <br>Indemnités forfaitaires suppl.
  <br>Indemnités sujétion spéc. d'origine
  <br>Indicateur booléen
  <br>Indicateur droit PF
  <br>Indicateur droit SFT
  <br>Indicateur indem. difficultés adm.
  <br>Indicateurs enfant ou pers. à charge
  <br>Indicateurs liés au conjoint
  <br>Indicateurs liés aux PF
  <br>Indicateurs régime social applicable
  <br>Indices
  <br>Langues
  <br>Lien Caractéristiques US héritables - Ministères et institutions de la République
  <br>Lien Fonctions - Ministère et institution de la république
  <br>Liens ER / Données associées
  <br>Liens de filiation de l'enfant
  <br>Liens de parenté
  <br>Lieu d'exercice télétravail
  <br>Limites d'âge
  <br>Localisations interministérielles
  <br>Localités à l'étranger
  <br>Lots de gestion
  <br>Ministère fichier GEST
  <br>Ministères et instit. de la répub.
  <br>Modalités d'affectation
  <br>Modalités d'exercice - Unités de référence
  <br>Modalités de concours
  <br>Modalités de pratique de la langue
  <br>Modalités de service
  <br>Mode de calcul des PF
  <br>Modes d'accès au corps ou assimilé
  <br>Modes d'accès au grade
  <br>Modes d'accès à l'échelon
  <br>Modes d'attribution récompense
  <br>Modes de calcul
  <br>Modes de garde
  <br>Modes de gestion
  <br>Modes de paiement
  <br>Modes de règlement
  <br>Modes de rémunération
  <br>Modes de sortie du corps
  <br>Modes de versement pécule
  <br>Modes entrée FPE ou carrière milit.
  <br>Motifs cess. définitive de fonction
  <br>Motifs d'interruption 2ème section
  <br>Motifs de cessation - Agrégats niv1
  <br>Motifs de changement d'employeur
  <br>Motifs de fin du lien
  <br>Motifs de maintien MICM
  <br>Motifs de non participation
  <br>Motifs de prolongation d'activité
  <br>Motifs de sanctions
  <br>Motifs du refus de formation
  <br>Motifs prolongat./prorogat. stage
  <br>Mutuelles
  <br>Natures d'US
  <br>Natures d'accident
  <br>Natures d'affectation opérationnelle
  <br>Natures d'enquête
  <br>Natures d'organisation internationale
  <br>Natures d'éléments de rémunération
  <br>Natures de bonification
  <br>Natures de corps ou emploi fonct.
  <br>Natures de décision CDAPH
  <br>Natures de fonction publique
  <br>Natures de formation
  <br>Natures de lésion
  <br>Natures de texte
  <br>Natures de versement
  <br>Natures de voie
  <br>Natures des services
  <br>Natures des travaux
  <br>Niveaux d'habilitation
  <br>Niveaux de compétence
  <br>Niveaux de diplôme
  <br>Niveaux de langue
  <br>Niveaux de médaille
  <br>Niveaux de qualification
  <br>Nomenclature d'activités françaises
  <br>Nomenclatures génériques - Définition
  <br>Nomenclatures génériques booléen - définition
  <br>Nomenclatures simples - Définition
  <br>Ordres des distinctions honorifiques
  <br>Organisation internationale
  <br>Organisations syndicales
  <br>Organismes bilan de compétences
  <br>Organismes certificateurs du diplôme
  <br>Ornements
  <br>PABA22
  <br>Pays
  <br>Populations
  <br>Populations (Classification)
  <br>Positions - Agrégats niv1
  <br>Positions - Agrégats niv2
  <br>Positions / Situations admin.
  <br>Positions de la bonification
  <br>Positions statutaires
  <br>Profils cotisants
  <br>Programmes / Ministères
  <br>Propriétés du poste
  <br>Pseudo grade NNE
  <br>Périodicités
  <br>Périodicités
  <br>Périodicités travaillées
  <br>Qualifications
  <br>RIME - Domaines fonctionnels
  <br>RIME - Emplois de référence
  <br>Raisons de mise en 2ème section
  <br>Raisons du forfait
  <br>Revenus du conjoint
  <br>Revenus liés à la famille
  <br>Référentiels RGRH
  <br>Régimes de rémunération
  <br>Régimes de solde militaires
  <br>Régions
  <br>Résultats au concours
  <br>Sanctions
  <br>Sanctions - Agrégats niv1
  <br>Sens Opération CET
  <br>Sexes
  <br>Situation de l'enfant
  <br>Situations du congé
  <br>Situations particulières
  <br>Situations service national
  <br>Situations statutaires
  <br>Situations à l'étranger
  <br>Sièges des lésions
  <br>Sous-catég. ou pseudo sous-catég.
  <br>Sous-domaine
  <br>Sous-groupes d'ER
  <br>Spécialités
  <br>Spécialités RNCP
  <br>Spécialités RNCP - Agrégats niv1
  <br>Spécialités RNCP - Agrégats niv2
  <br>Spécialités RNCP - Agrégats niv3
  <br>Statut des actes
  <br>Statuts (Types de population)
  <br>Statuts - Agrégats niv1
  <br>Statuts - Agrégats niv2
  <br>Statuts / Modes gestion / Modes rém.
  <br>Statuts juridique d'origine (N4DS)
  <br>Structures budgétaires
  <br>TP, service incomplet, surcotisation
  <br>Tabank SEPA
  <br>Taux HSE-HSA
  <br>Taux d'ICM perçu
  <br>Taux d'incapacité ou d'handicap
  <br>Taux horaires ouvriers de la défense
  <br>Taux horaires ouvriers du MTES
  <br>Territoires de campagne
  <br>Territoires hors d'Europe
  <br>Texte
  <br>Thèmes de formation
  <br>Titres d'attribution
  <br>Titres de civilité
  <br>Transcodification codes ministères
  <br>Type d'événement
  <br>Type de carrière
  <br>Type de fonction
  <br>Type de format élémentaire
  <br>Types adresse
  <br>Types d'abonnement
  <br>Types d'accident ou maladie prof.
  <br>Types d'activité prof. de l'agent
  <br>Types d'activité saisissable
  <br>Types d'adresse d'US
  <br>Types d'ancienneté
  <br>Types d'avantage en nature
  <br>Types d'engagement spécial réserve
  <br>Types d'enseignement
  <br>Types d'exposition
  <br>Types d'habilitation
  <br>Types d'identifiant
  <br>Types d'indice
  <br>Types d'indémnité
  <br>Types d'occurrences
  <br>Types d'organe de publication
  <br>Types d'organisme
  <br>Types d'échéancier
  <br>Types d'éléments de rémunération
  <br>Types d'évènement
  <br>Types de bonification
  <br>Types de bonification d'ancienneté
  <br>Types de commune
  <br>Types de concours
  <br>Types de conjoint
  <br>Types de contrat
  <br>Types de cycle
  <br>Types de distinction honorifique
  <br>Types de durées
  <br>Types de formation
  <br>Types de lien juridique
  <br>Types de mandat électif
  <br>Types de mesure
  <br>Types de nom
  <br>Types de prestation enfants
  <br>Types de préavis
  <br>Types de prénom
  <br>Types de saisine
  <br>Types de service
  <br>Types de service ou d'employeur
  <br>Types de situation de famille
  <br>Types de situation de stage
  <br>Types de situation du contrat
  <br>Types de territoire
  <br>Types de texte
  <br>Types de tiers bénéficiaire
  <br>Types de variation d'ancienneté
  <br>Typologies de population
  <br>Témoins AM-PM
  <br>Unités de gestion
  <br>Unités de référence
  <br>Unités structurelles
  <br>Valeur du point de la FPE
  <br>Versions Interface
  <br>Versions de noyau
  <br>Versions du FIP
  <br>Zone astérisque
  <br>Zone tarification remboursement trajet
  <br>Zones de congés à l'étranger
  <br>Zones de résidence
  <br>Zones de validité
</p>

</article>
  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.51559s from unicorn-6987fcc54d-lmrbs">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-Je7fGgEmtunQFlDhJ4O7EE3BBWaEECwcV5pgJ8575J90IEjwOq7RK6kdhlH4K1hyH4KbKfGH7ev+TRn3jKtf5Q==" type="application/javascript" src="https://github.githubassets.com/assets/compat-bootstrap-009a5e0b.js"></script>
    <script crossorigin="anonymous" integrity="sha512-6ds1nmSieMZVJUz/Lg1/PhdizfysNwmo+T94e9p4BT3M6jtP8m1Hi/Slym0TJQpUW/rjhG8FWutX5JkiKF69CQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-8b4af415.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-i7Fnzhn9vNYtInnoi+GE4HOgQt1Wj/GUXZg4zDMJuUYp2wkswEwg9mpT2EA6caO5OU+yLyNxBxX3ZRp68snVLA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-b012f3cd.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>
