import React, {Component} from 'react';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';
import Resume from '../../components/Resume';

class PostResume extends Component {
    state = {
        name: '',
        tel: '',
        email: '',
        profile: '',
        experience: '',
        skills: '',
    }

    handleChange = (s) => {
        this.setState({
            ...s
        });
    }
    render() {
        return (
            <div>
                <Resume type="write" {...this.state} onChange={this.handleChange} />
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '40px'
                    }}
                >
                    <Modal trigger={<Button
                        color='google plus'
                        style={{
                            width: '200px'
                        }}
                    >保存</Button>}>
                        <Modal.Header>设置付费金额</Modal.Header>
                        <Modal.Content
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            <Input /> NAS
                            <div
                                style={{
                                    color: '#ec6a6a',
                                    marginTop: '20px'
                                }}
                            >* 其他用户只有支付相应的金额才能查看您的联系方式</div>
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
