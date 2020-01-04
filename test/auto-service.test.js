let expect = require("chai").expect;
let assert = require('chai').assert;
let AutoService = require('../JS Advanced Retake - 18 April 2019/02. Auto Service');




describe("autoService", function () {
    describe("constructor test", function () {

        it("has property garageCapacity", function () {
            assert.property(new AutoService(1), 'garageCapacity', 'Must have property garageCapacity');
        });
        it("has property workInProgress", function () {
            assert.property(new AutoService(1), 'workInProgress', 'Must have property workInProgress');
        });
        it("has property backlogWork", function () {
            assert.property(new AutoService(1), 'backlogWork', 'Must have property backlogWork');
        });
        it('garageCapacity property is init', function () {
            assert.equal(new AutoService(1).garageCapacity, 1);
        });
        it('workInProgress and backlogWork property is empty array', function () {
            assert.deepEqual(new AutoService(1).workInProgress, []);
            assert.deepEqual(new AutoService(1).backlogWork, []);
        });
    });
    describe('availableSpace', function () {
        it('free', function () {
            assert.equal(new AutoService(1).availableSpace, 1)
        });
        it('free', function () {
            assert.equal(new AutoService(0).availableSpace, 0)
        });
    });
    describe('signupForReview', function () {
        it('check workInProgress', function () {
            let as = new AutoService(1);
            as.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            assert.equal(as.workInProgress.length, 1)
        });
        it('check backlogWork', function () {
            let as = new AutoService(1);
            as.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            as.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            assert.equal(as.backlogWork.length, 1)
        });
    });
    describe('carInfo', function () {
        it('check no car', function () {
            let as = new AutoService(1);
            assert.equal(as.carInfo('CA1234CA', 'Peter'), "There is no car with platenumber CA1234CA and owner Peter.")
        });
        it('should broken', function () {
            let as = new AutoService(1);
            as.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            assert.equal(as.repairCar(), 'Your doors were repaired.')
        });
        it('should notClient', function () {
            let as = new AutoService(1);
            assert.equal(as.repairCar(), 'No clients, we are just chilling...')
        });
    });
});
