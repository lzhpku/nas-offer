import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Resume from '../../components/Resume';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';

import { getResume, checkResume } from '../../dataAdapter';

class PersonResume extends Component {
    state = {
        ifWaitforWriteChainDialogOpen: false
    }
    componentDidMount() {
        // fetch data

        getResume(this.props.match.params.resumeId)
            .then(res => {
                this.setState({
                    ...res.resume,
                })
            })
    }
    handlePay = () => {
        checkResume(this.props.match.params.resumeId, this.state.price)
            .then(res => {
                this.setState({
                    ifWaitforWriteChainDialogOpen: true,
                })
            })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifWaitforWriteChainDialogOpen: false,
        })
    }
    render() {
        return (
            <div>
                <PageHeader />
                <Resume
                    type="read"
                    {...this.state}
                >
                    <Button
                        color='twitter'
                        style={{
                            borderRadius: '0',
                        }}
                        onClick={this.handlePay}
                    >
                        <Icon name='expeditedssl' />
                        支付{this.state.price}NAS查看联系方式
                    </Button>
                </Resume>
                <Modal
                    open={this.state.ifWaitforWriteChainDialogOpen}
                >
                    <Modal.Header>
                        注意
                    </Modal.Header>
                    <Modal.Content>
                        交易需要10s左右的时间才能达成，请过一会刷新查看
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            onClick={this.handleCloseTransactionDelatNoteDialog}
                        >确定</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

PersonResume.propTypes = {};
PersonResume.defaultProps = {};

export default withRouter(PersonResume);
