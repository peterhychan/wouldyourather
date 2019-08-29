let users = {
    snoopy: {
        id: 'snoopy',
        name: 'Snoopy',
        avatarURL: 'https://vignette.wikia.nocookie.net/parody/images/6/65/Snoopy.jpg/revision/20180203223337',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    charliebrown: {
        id: 'charliebrown',
        name: 'Charlie Brown',
        avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bn1ZHixMOflWotlvQUJUTNYMxHtVbrMpjthlqR1DXL1VwKbx',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    woodstock: {
        id: 'woodstock',
        name: 'Woodstock',
        avatarURL: 'https://vignette.wikia.nocookie.net/peanuts/images/e/eb/Woodstock5.jpg/revision/latest?cb=20160508092305',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
}

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'snoopy',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['snoopy'],
            text: 'own a dog',
        },
        optionTwo: {
            votes: [],
            text: 'own a cat'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'woodstock',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['woodstock', 'snoopy'],
            text: 'become a musician'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'snoopy',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'never grow up',
        },
        optionTwo: {
            votes: ['snoopy'],
            text: 'never die'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'charliebrown',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'collect Japanese manga',
        },
        optionTwo: {
            votes: ['snoopy'],
            text: 'collect Peanuts comics'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'charliebrown',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['charliebrown'],
            text: 'be yourself',
        },
        optionTwo: {
            votes: ['woodstock'],
            text: 'be smart'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'woodstock',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['woodstock'],
            text: 'drink coffee',
        },
        optionTwo: {
            votes: ['charliebrown'],
            text: 'eat cheesecake'
        }
    },
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function
_getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

function formatQuestion({optionOneText, optionTwoText, author}) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}


function formatUser({username, name, avatarURL}) {
    return {
        id: username,
        name,
        avatarURL,
        answers: [],
        questions: []
    }
}

export function _saveQuestion(question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function _saveQuestionAnswer({authedUser, qid, answer}) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            res()
        }, 500)
    })
}

export function _saveNewUser(user) {
    return new Promise((res, rej) => {
        const formattedUser = formatUser(user)

        setTimeout(() => {
            users = {
                ...users,
                [formattedUser.id]: formattedUser
            }
            res(users)
        }, 1000)
    })
}
