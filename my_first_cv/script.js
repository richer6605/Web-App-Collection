$(document).ready(function() {

  $(window).scroll(skillsbar);
  $(window).scroll(stretch);

  function skillsbar() {
    if ($(".skills").offset().top <= $(window).scrollTop()) {
      $(".70percent-bar").addClass("bar-animation70");
      $(".70percent-mark").addClass("percent-animation70");
      $(".50percent-bar").addClass("bar-animation50");
      $(".50percent-mark").addClass("percent-animation50");
      $(".30percent-bar").addClass("bar-animation30");
      $(".30percent-mark").addClass("percent-animation30");
    }
  }

  function stretch() {
      if ($(document).height() == $(window).height() + $(window).scrollTop()) {
        $(".underline").addClass("stretch");
      }
  }
});