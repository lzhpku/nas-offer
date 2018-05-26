import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Header, TextArea,
    Button, Modal, Icon,
} from 'semantic-ui-react';

class PostResume extends Component {
    render() {
        return (
            <div
                style={{
                    maxWidth: '600px',
                    margin: '40px auto'
                }}
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
                            input={<input style={{ textAlign: 'right', fontSize: '36px' }} />}
                            actionPosition="left"
                        />
                        <Input
                            placeholder="电话"
                            transparent
                            size="large"
                            style={{
                                display: 'block',
                                marginTop: '16px'
                            }}
                            input={<input style={{ textAlign: 'right' }} />}
                            actionPosition="left"
                        />
                        <Input
                            placeholder="邮箱"
                            transparent
                            size="large"
                            style={{
                                display: 'block',
                                marginTop: '16px'
                            }}
                            input={<input style={{ textAlign: 'right' }} />}
                            actionPosition="left"
                        />
                    </Segment>
                </Segment>

                <Segment>
                    <Header as='h2' icon='plug' content="PROFILE" />
                    <TextArea
                        autoHeight
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请输入您的个人情况介绍"
                    />
                </Segment>
                <Segment>
                    <Header as='h2' icon='plug' content="EXPERIENCE" />
                    <TextArea
                        autoHeight
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请输入您的个人情况介绍"
                    />
                </Segment>
                <Segment>
                    <Header as='h2' icon='plug' content="SKILLS" />
                    <TextArea
                        autoHeight
                        style={{ minHeight: 100, width: '100%' }}
                        placeholder="请输入您的个人情况介绍"
                    />
                </Segment>
                <div>
                    <Modal trigger={<Button>提交</Button>}>
                        <Modal.Header>设置付费金额</Modal.Header>
                        <Modal.Content>
                            <Input /> NAS
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red'>
                                <Icon name='remove' /> 取消
                            </Button>
                            <Button color='green'>
                                <Icon name='checkmark' /> 确定
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        );
    }
}

PostResume.propTypes = {};
PostResume.defaultProps = {};

export default PostResume;
