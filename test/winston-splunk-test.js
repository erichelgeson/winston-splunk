// winston-splunk-test.js: Tests for instances of the Splunk transport

var vows = require('vows');
var assert = require('assert');
var winston = require('winston');
var helpers = require('winston/test/helpers');
var Splunk = require('../lib/winston-splunk').splunk;

var transport = new (splunk)({splunkHostname: 'localhost'});

function assertSplunk (transport) {
  assert.instanceOf(transport, splunk);
  assert.isFunction(transport.log);
}

vows.describe('winston-splunk').addBatch({
 "An instance of the Splunk Transport": {
   "should have the proper methods defined": function () {
     assertSplunk(transport);
   },
   "the log() method": helpers.testNpmLevels(transport, "should log messages to Splunk", function (ign, err, logged) {
     assert.isTrue(!err);
     assert.isTrue(logged);
   })
 }
}).export(module);
