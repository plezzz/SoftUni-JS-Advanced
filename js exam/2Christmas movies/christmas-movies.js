let ChristmasMovies = require('./movies');
const expect = require("chai").expect;

describe('ChristmasMovies', function () {
    let movies;
    beforeEach(function () {
        movies = new ChristmasMovies('SoftUni')
    });

    describe('Test constructor', function () {
        it('should initializes properties correctly', function () {
            expect(movies.movieCollection).to.deep.equal([]);
            expect(movies.watched).to.deep.equal({});
            expect(movies.actors).to.deep.equal([]);
        });
    });
    //TODO: Missing something
    describe('Buy Movies', function () {
        it('return properly message', function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(()=>movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.throw("You already own Home Alone in your collection!");
        });
        it('Buy Movies', function () {
            expect(movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
        });
    });

    describe('discardMovie', function () {
        it('return properly message', function () {
           // movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(()=>movies.discardMovie('Home Alone')).to.throw("Home Alone is not at your collection!");
        });
        it('return properly message', function () {
             movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(()=>movies.discardMovie('Home Alone')).to.throw("Home Alone is not watched!");
        });
        it('should discard movie', function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            expect(movies.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!');
         });
    });

    describe('Watch movie', function () {
        it('return properly message', function () {
            expect(()=>movies.watchMovie('Home Alone')).to.throw("No such movie in your collection!");
        });
        it('should watch movie one time', function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            expect(movies.watched).to.deep.equal({'Home Alone':1});
        });
        it('should watch movie three times', function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            expect(movies.watched).to.deep.equal({'Home Alone':3});
        });
    });
    describe('Favorite movie', function () {
        it('return properly message', function () {
            expect(()=>movies.favouriteMovie()).to.throw("You have not watched a movie yet this year!");
        });
        it('should favorite movies', function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Last Christmas');
            movies.watchMovie('Last Christmas');
            expect(movies.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 3 times!');
        });
    });
    describe('mostStarredActor', function () {
        it('return properly message', function () {
            expect(()=>movies.mostStarredActor()).to.throw("You have not watched a movie yet this year!");
        });
        it('should mostSrartedActor movies', function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(movies.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!');
        });
    });
});
