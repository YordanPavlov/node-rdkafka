/*
 * node-rdkafka - Node.js wrapper for RdKafka C/C++ library
 *
 * Copyright (c) 2016 Blizzard Entertainment
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

var addon = require('bindings')('node-librdkafka');
var t = require('assert');

var consumerConfig = {
  'group.id': 'awesome'
};

module.exports = {
  'native addon': {
    'exports something': function() {
      t.equal(typeof(addon), 'object');
    },
    'exports valid producer': function() {
      t.equal(typeof(addon.Producer), 'function');
      t.throws(addon.Producer); // Requires constructor
      t.equal(typeof(new addon.Producer({}, {})), 'object');
    },
    'exports valid consumer': function() {
      t.equal(typeof(addon.KafkaConsumer), 'function');
      t.throws(addon.KafkaConsumer); // Requires constructor
      t.equal(typeof(new addon.KafkaConsumer(consumerConfig, {})), 'object');
    },
    'exports version': function() {
      t.ok(addon.librdkafkaVersion);
    }
  },
};
