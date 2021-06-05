const NodeCache = require( "node-cache" );
const officeDayService = require("../officedayService");
const OfficeDay = require("../OfficeDay")

const PERSON_1 = 'one'
const PERSON_2 = 'two'
const PERSON_3 = 'three'
const DATE = new Date()

var assert = require('assert');
describe('officedayService', function() {
  describe('#addPerson', function() {
    it('should return true when validation passed', function() {
      assert.strictEqual(officeDayService.addPerson(new OfficeDay(DATE,[PERSON_1])),true)
      assert.strictEqual(officeDayService.addPerson(new OfficeDay(DATE,[PERSON_2])),true)
      assert.strictEqual(officeDayService.addPerson(new OfficeDay(DATE,[PERSON_3])),true)
    });
  });
  describe('#deletePerson', function() {
    it('should return true when validation passed', function() {
      assert.strictEqual(officeDayService.deletePerson(new OfficeDay(DATE,[PERSON_2])),true)
    });
  });
  describe('#getPersons', function() {
    it('should return OfficeDay obj with 2 (1 and 3) persons', function() {
      let retrived = officeDayService.getOfficeDay(new OfficeDay(DATE))
      console.log(retrived)
      assert.deepStrictEqual(retrived,new OfficeDay(DATE,[PERSON_1,PERSON_3]))
    });
  });
  describe('validations',function(){
    it('should return null when more than one person is in OfficeDay and there is already a record for the date', function() {
      assert.notStrictEqual(officeDayService.addPerson(new OfficeDay(DATE,[PERSON_2,PERSON_3])),null)
    });
    it('should return null date is in the past', function() {
      assert.notStrictEqual(officeDayService.addPerson(new OfficeDay(new Date(2020,6,3),[PERSON_2])),null)
    });
  })
});

