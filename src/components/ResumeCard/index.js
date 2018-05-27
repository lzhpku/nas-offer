import React, { Component } from 'react';
import { Card, Label, Image, Icon } from 'semantic-ui-react';

class ResumeCard extends Component {
    render() {
        const { name, target, profile, price, paidCount, resumeId } = this.props;
        return (
            <Card>
                <Card.Content>
                    <Image src='./assets/images/elliot.jpg' />
                    <Card.Header>
                        <Label as='a' color='red' ribbon> { target } </Label>
                        { name }
                    </Card.Header>
                    <Card.Description>
                        { profile }
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <a>
                        <Icon name='paidCount' />
                        { paidCount } 人已查看
                    </a>
                    <a>
                        <Icon name='price' />
                        获取联系方式仅需 { price } NAS
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

ResumeCard.defaultProps = {
    name: '柯诗栋',
    target: '前端工程师',
    profile: '搜狐资深前端技术总监，1年前端工作经验',
    price: 0,
    paidCount: 0,
    resumeId: 'dskdhsakjdhk'
};

export default ResumeCard;
