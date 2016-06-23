# Angular Abbreviation
[![npm version](https://img.shields.io/npm/v/angular-abbreviation.svg)](https://www.npmjs.org/package/angular-abbreviation)
[![bower version](https://img.shields.io/bower/v/angular-abbreviation.svg)](https://www.npmjs.org/package/angular-abbreviation)
[![Build Status](https://travis-ci.org/ameyanaik11/Angular-Abbreviation.svg)](https://travis-ci.org/ameyanaik11/Angular-Abbreviation)
[![CDN](https://img.shields.io/badge/cdn-rawgit-brightgreen.svg)](https://rawgit.com/ameyanaik11/Angular-Abbreviation/master/dist/abbreviation.min.js) 


**Demo: [http://ameyanaik11.github.io/Angular-Abbreviation/](http://ameyanaik11.github.io/Angular-Abbreviation/)**

A directive to aid in handling abbreviations in a web application.

## Blah Blah Blah.. How to Use!
To include the abbreviation directive in your own project, add the `abbreviation.js` or `abbreviation.min.js` file and include the module as a dependency to your angular application.  We do support **[npm](https://www.npmjs.org/package/angular-abbreviation)** and **[bower](http://bower.io/)** if you are familiar with those distribution systems.  Please review the **[src/index.html](https://github.com/ameyanaik11/Angular-Abbreviation/blob/master/src/index.html)** and **[src/app.js](https://github.com/ameyanaik11/Angular-Abbreviation/blob/master/src/app.js)** files for a working version of the directive if you are new to angular modules.
``` javascript
// Add the Angular-Abbreviation module as a dependency to your application module:
var app = angular.module('yourApp', ['ng.abbreviation'])
```

<br/>
<br/>

The following attributes explored in the basic example are required directive inputs:

1. `short` The short text displayed in the browser
2. `long` The description displayed when user hovers on `short`

<br/>

**Basic Example**

[![alt text](https://raw.githubusercontent.com/ameyanaik11/Angular-Abbreviation/gh-pages/basicSample.png "Basic Sample")](http://ameyanaik11.github.io/Angular-Abbreviation/)
```html
<div abbreviation
  long="'World Wide Web'"
  short="'WWW'">
</div> 
```

<br/>

**You can optionally pass Angular variables**


