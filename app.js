'use strict';

//Images array
var images = [];

//Constructor function
var CreateImage = function(src, name) {
  this.src = src;
  this.name = name;
  this.likes = 0;
  images.push(this);
};





/*

function Product(name, src) {

}

var tracker = {
  products: [],
  totalClicks: 0,

  mainEl: document.getElementById('main-content'),

  getRandomIndex: function() {

  },
  getUniqueImages: function() {

  },
  renderImages: function() {

  },
  addClickTracker: function() {

  },
  clickHandler: function(event) {

  },
};


(function createProducts() {

})()*/
