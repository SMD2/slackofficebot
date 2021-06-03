const NodeCache = require( "node-cache" );
const dateUtils = require("../utils/dateUtils");

const DATE = new Date(2021,5,2) //Tue Jun 01 2021

var assert = require('assert');
describe('dateUtils', function() {
  describe('#dayOfWeekToDate', function() {
    it('should convert a day of week to a date that represent the coming day', function() {
        assert.strictEqual(new Date(dateUtils.dayOfWeekToDate("Monday",DATE)).toDateString(), "Mon Jun 07 2021")
        assert.strictEqual(new Date(dateUtils.dayOfWeekToDate("Thursday",DATE)).toDateString(), "Thu Jun 03 2021")
        assert.strictEqual(new Date(dateUtils.dayOfWeekToDate("Tuesday",DATE)).toDateString(), "Tue Jun 08 2021")
    });
  });
});

