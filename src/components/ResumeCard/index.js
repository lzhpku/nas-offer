import React, { Component } from 'react';
import { Card, Label, Image, Icon } from 'semantic-ui-react';

import { withRouter } from 'react-router';

import danielImgUrl from './images/daniel.jpg';
import elliotImgUrl from './images/elliot.jpg';
import matthewImgUrl from './images/matthew.png';
import jennyImgUrl from './images/jenny.jpg';
import steveImgUrl from './images/steve.jpg';
import mollyImgUrl from './images/molly.png';



function randomRangeOf(num) {
    return Math.floor(Math.random()*num);
}
const imgUrls = [danielImgUrl, elliotImgUrl, matthewImgUrl, jennyImgUrl, steveImgUrl, mollyImgUrl]
const colors = ['teal', 'orange', 'blue', 'red', 'violet', 'purple']

class ResumeCard extends Component {
    randomImageUrl = imgUrls[randomRangeOf(imgUrls.length)]
    randomColor = colors[randomRangeOf(colors.length)]

    handleClick = () => {
        this.props.history.push(`/resume/${this.props.resumeId}`);
    }
    render() {
        const { name, target, profile, price, paidCount, resumeId } = this.props;
        return (
            <Card
                onClick={this.handleClick}
            >
                <Image
                    label={{ color: this.randomColor, content: target, icon: 'hotel', ribbon: true }}
                    src={this.randomImageUrl} />
                <Card.Content>
                    <Card.Header>
                        { name }
                    </Card.Header>
                    <Card.Description>
                        { profile }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='bitcoin' />
                        已有{ paidCount } 人付费查看
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

ResumeCard.defaultProps = {
    name: '',
    target: '',
    profile: '',
    price: 0,
    paidCount: 0,
    resumeId: ''
};

export default withRouter(ResumeCard);
