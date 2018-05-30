import NebPay from '../utils/nebpay';
import config from '../config';
import { Neb, HttpRequest } from 'nebulas';

const nebPay = new NebPay();
const env = process.env.env;

const neb = new Neb();
neb.setRequest(new HttpRequest(config[env]['contact_host']))

const cvtResume = (resume) => {
    const {
        createTime,
        name,
        paidCount,
        price,
        phone,
        profile,
        email,
        project,
        skill,
        education,
        status,
        target,
        resumeId,
    } = resume;
    return {
        name,
        tel: phone,
        email: email,
        profile: profile,
        experience: project,
        skills: skill,
        education: education,
        price,
        target,
        paidCount,
        createTime,
        resumeId,
        ifPaid: status === 0 || status === 1,
    };
}


export const postResume = (name, target, tel, email, profile, education, experience, skills, price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'saveResume',
            JSON.stringify([name, target, tel, email, profile, education, experience, skills, price, null]), {
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

export const checkResume = (resumeId, price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], price, 'checkResume',
            JSON.stringify([resumeId]), {
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

export const getResume = (resumeId) => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getResume', JSON.stringify([resumeId]), {
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
                    resume: cvtResume(JSON.parse(res.result)),
                });
            }
        });
    });
}

export const getResumeList = (curPage = 1) => {
    const perPage = 20;

    return new Promise((resolve) => {
        neb.api.call({
            from: config[env]['contract_address'],
            to: config[env]['contract_address'],
            value: 0,
            contract: {
                function: 'getResumeList',
                args: JSON.stringify([perPage, (curPage -1) * perPage]),
            },
            gasPrice: 1000000,
            gasLimit: 2000000,
        })
            .then(res => {
                return resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtResume(item)
                    )),
                });
            })
    });
}

