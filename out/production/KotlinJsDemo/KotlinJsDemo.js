if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinJsDemo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJsDemo'.");
}
var KotlinJsDemo = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  function main(args) {
    println("Welcome to Kevin's Work");
    var root = document.getElementById('root');
    ensureNotNull(root).innerHTML = '<h1>Hello<\/h1>';
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('KotlinJsDemo', _);
  return _;
}(typeof KotlinJsDemo === 'undefined' ? {} : KotlinJsDemo, kotlin);
