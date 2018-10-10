// Define Dom7
var $$ = Dom7;

// Determine theme depending on device
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Logopedia',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Enable Material theme for Android device only
  material: isAndroid ? true : false,
  // Enable Template7 pages
  template7Pages: true
});

var mainView = app.views.create('.view-main');
