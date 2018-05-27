import React, {Component} from 'react';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';
import PageHeader from '../../components/Header';
import { postResume } from '../../dataAdapter';
import Resume from '../../components/Resume';

class PostResume extends Component {
    state = {
        name: '',
        tel: '',
        email: '',
        profile: '',
        experience: '',
        skills: '',
        education: '',
        price: '',
        ifPriceDialogOpen: false,
        ifTransactionDelayNoteDialogOpen: false,
    }

    handleTriggerOpenPriceDialog = () => {
        this.setState({
            ifPriceDialogOpen: true,
        })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifTransactionDelayNoteDialogOpen: false,
        })
    }
    handleChange = (s) => {
        this.setState({
            ...s
        });
    }
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value,
        })
    }
    handleSubmit = () => {
        const { name, target, tel, email, profile, education, experience, skills, price } = this.state;

        postResume(name, target, tel, email, profile, education, experience, skills, Number(price))
            .then((res) => {
                this.setState({
                    ifPriceDialogOpen: false,
                    ifTransactionDelayNoteDialogOpen: true,
                })
            })
    }
    handleCancelSubmit = () => {
        this.setState({
            ifPriceDialogOpen: false,
        })
    }
    render() {
        return (
            <div>
                <PageHeader />
                <Resume type="write" {...this.state} onChange={this.handleChange} />
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '40px'
                    }}
                >
                    <Modal
                        open={this.state.ifPriceDialogOpen}
                        trigger={
                            <Button
                                onClick={this.handleTriggerOpenPriceDialog}
                                disabled={!this.state.name || !(this.state.tel || this.state.email)}
                                color='google plus'
                                style={{
                                    width: '200px'
                                }}
                            >保存</Button>
                        }>
                        <Modal.Header>设置付费金额</Modal.Header>
                        <Modal.Content
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            <Input
                                value={this.state.price}
                                onChange={this.handleChangePrice}
                            /> NAS
                            <div
                                style={{
                                    color: '#ec6a6a',
                                    marginTop: '20px'
                                }}
                            >* 其他用户只有支付相应的金额才能查看您的联系方式</div>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                                color='red'
                                onClick={this.handleCancelSubmit}
                            >
                                <Icon name='remove' /> 取消
                            </Button>
                            <Button
                                color='green'
                                onClick={this.handleSubmit}
                                disabled={isNaN(Number(this.state.price)) || !this.state.price}
                            >
                                <Icon name='checkmark' /> 确定
                            </Button>

                        </Modal.Actions>
                    </Modal>
                    <Modal
                        open={this.state.ifTransactionDelayNoteDialogOpen}
                    >
                        <Modal.Header>
                            注意
                        </Modal.Header>
                        <Modal.Content>
                            简历内容写到链上需要10s左右的时间
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                                onClick={this.handleCloseTransactionDelatNoteDialog}
                            >确定</Button>
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
