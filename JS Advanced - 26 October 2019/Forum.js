class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (username === "" || password === "" || repeatPassword === "" || email === "") {
            throw new Error('Input can not be empty')
        }
        if (password !== repeatPassword) {
            throw new Error('Passwords do not match')
        }
        const foundUser = this._users.find(s => s.username === username);
        if (!foundUser) {
            this._users.push({username, password, email, logged: false});
            return `${username} with ${email} was registered successfully!`;
        }
        throw new Error(`This user already exists!`)
    }

    login(username, password) {
        const foundUser = this._users.find(s => s.username === username);
        if (!foundUser) {
            throw new Error("There is no such user")
        }
        if (foundUser.password === password) {
            foundUser.logged = true;
            return `Hello! You have logged in successfully`
        }
    }

    logout(username, password) {
        const foundUser = this._users.find(s => s.username === username);
        if (!foundUser) {
            throw new Error("There is no such user")
        }
        if (foundUser.password === password) {
            foundUser.logged = false;
            return `You have logged out successfully`
        }
    }

    postQuestion(username, question) {
        const foundUser = this._users.find(s => s.username === username);
        if (!foundUser || foundUser.logged === false) {
            throw new Error("You should be logged in to post questions")
        }
        if (question === "") {
            throw new Error("Invalid question")
        }
        let id = this._id;
        this._questions.push({id, question, username, answers: []});
        this._id++;
        return `Your question has been posted successfully`
    }

    postAnswer(username, questionId, answer) {
        const foundUser = this._users.find(s => s.username === username);
        const foundQuestion = this._questions.find(s => s.id === questionId);
        if (!foundUser || foundUser.logged === false) {
            throw new Error("You should be logged in to post answers")
        }
        if (answer === "") {
        }
        if (!foundQuestion) {
            throw new Error("There is no such question")
        }

        foundQuestion.answers.push({answer, username});
        return `Your answer has been posted successfully`
    }

    showQuestions() {
        let output = "";
        for (let question of this._questions) {
            output += `Question ${question.id} by ${question.username}: ${question.question}\n`;
          for (let answer of question.answers){
              output+=`---${answer.username}: ${answer.answer}\n`;
          }
        }
        return output.trim()
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");
console.log(forum.showQuestions());

console.log("=".repeat(10));
let forum2 = new Forum();

forum2.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum2.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum2.login('Jonny', '12345');
forum2.login('Peter', '123ab7');

forum2.postQuestion('Jonny', "Do I need glasses for skiing?");
forum2.postAnswer('Peter',1, "Yes, I have rented one last year.");
forum2.postAnswer('Jonny',1, "What was your budget");
forum2.postAnswer('Peter',1, "$50");
forum2.postAnswer('Jonny',1, "Thank you :)");

console.log(forum2.showQuestions());
