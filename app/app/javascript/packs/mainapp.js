/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//import 'mainapp.scss';

import M from "materialize-css/dist/js/materialize";
import * as toastr from "toastr/build/toastr.min.js";

import "../styles/mainapp";
console.log("init app ");
var componentRequireContextUser = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContextUser);

window.toastr = toastr;
window.toastr.options.progressBar = true;
window.toastr.options.preventDuplicates = true;
window.toastr.options.newestOnTop = true;
window.toastr.options.closeButton = true;
window.toastr.options.closeHtml = '<button><i class="icon-off"></i></button>';

document.addEventListener("DOMContentLoaded", function() {
});