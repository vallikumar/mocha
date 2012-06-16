
/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils')
  , clean = utils.clean
  , escape = utils.escape;

/**
 * Expose `JUnit`.
 */

exports = module.exports = JUnit;

/**
 * Initialize a new `JUnit` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function JUnit(runner) {
  Base.call(this, runner);

  runner.on('start', function(){
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<testsuites>');
  });

  runner.on('suite', function(suite){
    console.log('<testsuite name="%s">', suite.fullTitle());
  });

  runner.on('fail', function(test, err){
    var type = err.constructor.name;
    console.log('  <failure type="%s"><![CDATA[\n%s\n]]></failure>', type, err.stack);
    console.log('  <system-error><![CDATA[%s]]></system-error>', err.message);
  });

  runner.on('pass', function(test){
    var code = escape(clean(test.fn.toString()));
    console.log('  <system-out><![CDATA[\n%s\n]]></system-out>', code);
  });

  runner.on('suite end', function(){
    console.log('</testsuite>');
  });

  runner.on('end', function(){
    console.log('</testsuites>');
  });
}

/**
 * Inherit from `Base.prototype`.
 */

JUnit.prototype.__proto__ = Base.prototype;