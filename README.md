tomohiro.me
================================================================================

[![Dependency Status](https://img.shields.io/gemnasium/Tomohiro/tomohiro.github.io.svg?style=flat-square)](https://gemnasium.com/Tomohiro/tomohiro.github.io)


Requirements
--------------------------------------------------------------------------------

- Ruby 2.0.0-p0
- Bundler
- Jekyll
- Compass
- Zurb Foundation
- CoffeeScript


Editing
--------------------------------------------------------------------------------

### Bundler

```sh
$ git clone git://github.com/Tomohiro/tomohiro.github.com.git
$ cd tomohiro.github.com
$ bundle install --path vendor/bundle
$ bundle exec foreman start
```


Compile
--------------------------------------------------------------------------------

Compile SCSS stylesheets to CSS

```sh
$ bundle exec compass compile
```

Compile CoffeeScript to JavaScript

```sh
$ coffee -b -o js _coffee/*
```


LICENSE
--------------------------------------------------------------------------------

The following directories and their contents are &copy; 2011 - 2015 Tomohiro TAIRA.
You may not reuse anything therein without my permission:

- _posts/

All other directories and files are MIT Licensed.
Feel free to use the HTML and CSS as you please. 
