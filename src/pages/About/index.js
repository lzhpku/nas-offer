import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import PageHeader from '../../components/Header';

class About extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <div style={{
                    padding: '0 40px'
                }}>
                    <div>
                        链聘网是一个基于星云链的求职招聘平台，求职者可以在平台上发布简历，用人单位通过支付用户预先设定的NAS价格获取用户的联系方式。
                    </div>
                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        链聘网的优势在于：
                        <List>
                            <List.Item>
                                1. 求职者的简历数据写入区块链，可以保证数据的透明公开；
                            </List.Item>
                            <List.Item>
                                2. 用人单位支付的NAS直接转入用户账户，避免了各种中介平台从求职招聘活动中赚取差价；
                            </List.Item>
                            <List.Item>
                                3. 通过支付NAS的方式，排除了中介对求职者的骚扰，提高求职者和有需求用人单位的沟通效率；
                            </List.Item>
                        </List>



                    </div>

                    <h3>使用须知</h3>
                    <div>
                        链聘网是一个完全建立在区块链上的一个应用，基于星云链生态的开发。
                        从您体验和账号的安全考虑，请安装您<a href="https://github.com/ChengOrangeJu/WebExtensionWallet">NAS钱包插件</a>。
                    </div>
                    <div style={{
                        paddingTop: '40px',
                        color: '#d43434'
                    }}>
                        链聘，打造区块链+就业第一品牌！
                    </div>
                    <a
                        style={{
                            paddingTop: '20px'
                        }}
                        href="mailto:keshidong.whu@gmail.com"
                    >联系我们</a>
                </div>

            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;
