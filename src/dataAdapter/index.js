import NebPay from '../utils/nebpay';
import config from '../config';

const nebPay = new NebPay();
const env = process.env.env;

console.log(config[env]['contract_address']);

const cvtQuiz = (BEQuiz) => {
    const { id, question: title, answer: content, date,
        nick,
        status,
        checkCount,
        price,
    } = BEQuiz;
    return {
        id,
        title,
        content,
        date: Number(date),
        nick,
        author: id.split('$$$')[0],
        status: Number(status),
        price: Number(price),
        checkCount: Number(checkCount),
    };
}


export const releaseQuiz = (question, answer, date, nick, price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'saveQuestion',
            JSON.stringify([question, answer, String(date), nick, price]), {
            qrcode: {
                showQRCode: false
            },
            // goods: {
            //     name: "test",
            //     desc: "test goods"
            // },
            //set listener for extension transaction result
            listener: (res) => {
                resolve(res);
            }
        });
    });
}

export const getQuizList = () => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getQuestionList', JSON.stringify([20, 0]), {
            qrcode: {
                showQRCode: false
            },
            // goods: {
            //     name: "test",
            //     desc: "test goods"
            // },
            //set listener for extension transaction result
            listener: (res) => {
                console.log('列表', res);
                resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtQuiz(item)
                    )).reverse(),
                });
            }
        });
    });
};

export const getMyQuiz = () => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getAuthorQuestionList', JSON.stringify([]), {
            qrcode: {
                showQRCode: false
            },
            // goods: {
            //     name: "test",
            //     desc: "test goods"
            // },
            //set listener for extension transaction result
            listener: (res) => {
                resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtQuiz(item)
                    )).reverse(),
                });
            }
        });
    });
};

export const getQuiz = (id) => {
    return new Promise(resolve => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getQuestionItem', JSON.stringify([ id ]), {
            qrcode: {
                showQRCode: false
            },
            // goods: {
            //     name: "test",
            //     desc: "test goods"
            // },
            //set listener for extension transaction result
            listener: (res) => {
                resolve(cvtQuiz(JSON.parse(res.result)));
            }
        });
    })
}

export const purchasedQuiz = () => {
    return new Promise(resolve => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getUserCheckList', JSON.stringify([]), {
            qrcode: {
                showQRCode: false
            },
            // goods: {
            //     name: "test",
            //     desc: "test goods"
            // },
            //set listener for extension transaction result
            listener: (res) => {
                resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtQuiz(item)
                    )).reverse(),
                });
            }
        });
    })
}

export const buyQuiz = (id, price, date = '') => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], Number(price), 'checkQuestion',
            JSON.stringify([id, date]), {
                qrcode: {
                    showQRCode: false
                },
                // goods: {
                //     name: "test",
                //     desc: "test goods"
                // },
                //set listener for extension transaction result
                listener: (res) => {
                    console.log('buy quiz', res);
                    resolve(res);
                }
            });
    });
}
