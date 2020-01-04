let SkiResort = require('./solution');
const expect = require("chai").expect;

describe('SkiResort', function () {
    let ski;
    beforeEach(function () {
        ski = new SkiResort('SoftUni')
    });
    describe('Test constructor', function () {
        it('should initializes properties correctly', function () {
            expect(ski.name).to.equal('SoftUni');
            expect(ski.voters).to.equal(0);
            expect(ski.hotels).to.deep.equal([]);
        });
    });
    describe('test Best hotel', function () {
        it('return properly message', function () {
            expect(ski.bestHotel).to.equal('No votes yet');
        });
        it('check points', function () {
            ski.build("Grand",3);
            ski.build("Plaza",3);
            ski.book("Grand",3);
            ski.book("Plaza",2);
            ski.leave('Grand',3,3);
            ski.leave('Plaza',2,2);
            expect(ski.bestHotel).to.equal('Best hotel is Grand with grade 9. Available beds: 3');
        });
    });
    describe('Build', function () {
        describe('Error', function () {
            it('return Invalid output for empty string', function () {
                expect(()=>ski.build("",1)).to.throw("Invalid input");
            });
            it('return Invalid output for wrong beds', function () {
                expect(()=>ski.build("Grand",0)).to.throw("Invalid input");
            });
        });
        it('return properly message', function () {
            expect(ski.build("Grand",3)).to.equal('Successfully built new hotel - Grand');
        });
    });
    describe('Book', function () {
        describe('Error', function () {
            it('return Invalid output for empty string', function () {
                expect(()=>ski.book("",1)).to.throw("Invalid input");
            });
            it('return Invalid output for wrong beds', function () {
                expect(()=>ski.book("Grand",0)).to.throw("Invalid input");
            });
            it('return There is no such hotel for unreal Hotel', function () {
                expect(()=>ski.book("Pesho",1)).to.throw("There is no such hotel");
            });
            it('return error for free space', function () {
                ski.build("Grand",3);
                expect(()=>ski.book("Grand",10)).to.throw("There is no free space");
            });
        });
        it('return properly message', function () {
            ski.build("Grand",3);
            expect(ski.book("Grand",1)).to.equal("Successfully booked");
        });
    });
    describe('leave', function () {
        describe('Error', function () {
            it('return Invalid output for empty string', function () {
                expect(()=>ski.leave("",1)).to.throw("Invalid input");
            });
            it('return Invalid output for wrong beds', function () {
                expect(()=>ski.leave("Grand",0)).to.throw("Invalid input");
            });
            it('return There is no such hotel for unreal Hotel', function () {
                expect(()=>ski.leave("Pesho",1)).to.throw("There is no such hotel");
            });
        });
        it('return properly message', function () {
            ski.build("Grand",3);
            ski.book("Grand",3);
            expect(ski.leave("Grand",3)).to.equal("3 people left Grand hotel");
        });
    });
    describe('test averageGrade', function () {
        it('return error for not voters', function () {
            expect(ski.averageGrade()).to.equal('No votes yet');
        });
        it('return properly message', function () {
            ski.build("Grand",3);
            ski.build("Plaza",3);
            ski.book("Grand",3);
            ski.book("Plaza",2);
            ski.leave("Grand",3,3);
            ski.leave("Plaza",2,3);
            expect(ski.averageGrade()).to.equal('Average grade: 3.00');
        });
    });
});
