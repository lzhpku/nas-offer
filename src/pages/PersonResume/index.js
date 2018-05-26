import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Resume from '../../components/Resume';
import { Button, Icon } from 'semantic-ui-react';

class PersonResume extends Component {
    state = {
        name: '',
        tel: '',
        email: '',
        profile: '',
        experience: '',
        skill: '',
    }
    componentDidMount() {
        // todo
        // fetch data
        this.setState({
            name: '兰针',
            tel: '133222213332',
            email: 'lzhpku@qq.com',
            profile: '后裔很菜',
            experience: '游戏经验丰富',
            skill: '技能很好'
        })

    }
    render() {
        return (
            <div>
                <Resume
                    type="read"
                    {...this.state}
                >
                    <Button
                        color='twitter'
                        style={{
                            borderRadius: '0',
                        }}
                    >
                        <Icon name='expeditedssl' />
                        支付0.1NAS查看联系方式
                    </Button>
                </Resume>
            </div>
        );
    }
}

PersonResume.propTypes = {};
PersonResume.defaultProps = {};

export default PersonResume;
