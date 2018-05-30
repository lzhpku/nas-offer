import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Header, TextArea,
} from 'semantic-ui-react';
import './style.css';

class Resume extends Component {
    handleChange = (type) => (e) => {
        const { name, tel, email, profile, experience, skills, target, } = this.props;
        this.props.onChange({
            name,
            tel,
            email,
            profile,
            experience,
            skills,
            target,
            [type]: e.target.value,
        });
    }
    render() {
        const {
            name,
            tel,
            email,
            profile,
            experience,
            skills,
            education,
            target,
        } = this.props;
        return (
            <div
                style={{
                    maxWidth: '600px',
                    margin: '40px auto'
                }}
                className="c-Resume"
            >
                <Segment
                    clearing
                >
                    <Segment
                        floated="right"
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '200px',
                            overflow: 'hidden',
                        }}
                    >
                        <Input
                            placeholder="姓名"
                            transparent
                            size="large"
                            style={{
                                display: 'block',
                                marginBottom: '40px'
                            }}
                            value={name}
                            disabled={this.props.type === 'read'}
                            input={<input
                                style={{
                                    textAlign: 'right', fontSize: '36px',
                                    color: '#333',
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('name')}
                        />
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <Input
                                placeholder="电话"
                                transparent
                                size="large"
                                style={{
                                    display: 'block',
                                    marginTop: '16px'
                                }}

                                value={tel}
                                disabled={this.props.type === 'read'}
                                input={<input style={{ textAlign: 'right' }} />}
                                actionPosition="left"
                                onChange={this.handleChange('tel')}
                            />
                            <Input
                                placeholder="邮箱"
                                transparent
                                size="large"
                                style={{
                                    display: 'block',
                                    marginTop: '16px'
                                }}
                                disabled={this.props.type === 'read'}
                                value={email}
                                input={<input style={{ textAlign: 'right' }} />}
                                actionPosition="left"
                                onChange={this.handleChange('email')}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    ...(!this.props.ifPaid && this.props.type === 'read'
                                        ? { height: '100%', width: '100%', top: '0', left: '0',
                                                background: '#fff' }
                                        : { display: 'none'}
                                    ),
                                }}
                            >
                                {this.props.children}
                            </div>
                        </div>
                        <Input
                            placeholder="职位"
                            transparent
                            size="large"
                            style={{
                                display: 'block',
                                marginTop: '16px'
                            }}
                            disabled={this.props.type === 'read'}
                            value={target}
                            input={<input style={{ textAlign: 'right' }} />}
                            actionPosition="left"
                            onChange={this.handleChange('target')}
                        />

                    </Segment>
                </Segment>

                <Segment>
                    <Header
                        style={{
                            color: '#333'
                        }}
                        as='h2' icon='user' content="PROFILE" />
                    <TextArea
                        autoHeight
                        value={profile}
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请输入您的个人情况介绍"
                        disabled={this.props.type === 'read'}
                        onChange={this.handleChange('profile')}
                    />
                </Segment>
                <Segment>
                    <Header as='h2' icon='sitemap' content="EXPERIENCE" />
                    <TextArea
                        autoHeight
                        value={experience}
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请输入您的项目经验"
                        disabled={this.props.type === 'read'}
                        onChange={this.handleChange('experience')}
                    />
                </Segment>
                <Segment>
                    <Header as='h2' icon='trophy' content="SKILLS" />
                    <TextArea
                        autoHeight
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请介绍您的工作技能"
                        value={skills}
                        disabled={this.props.type === 'read'}
                        onChange={this.handleChange('skills')}
                    />
                </Segment>
                <Segment>
                    <Header as='h2' icon='student' content="EDUCATION" />
                    <TextArea
                        autoHeight
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请介绍您的教育背景"
                        value={education}
                        disabled={this.props.type === 'read'}
                        onChange={this.handleChange('education')}
                    />
                </Segment>
            </div>
        );
    }
}

Resume.propTypes = {};
Resume.defaultProps = {
    type: 'write',
    name: '',
    tel: '',
    email: '',
    profile: '',
    experience: '',
    skills: '',
    education: '',
    ifPaid: true,
    target: '',
    onChange: () => {},
};

export default Resume;
