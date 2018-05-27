import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
    Menu,
} from 'semantic-ui-react';

class Header extends Component {
    handleSwitchPage = (pageUrl) => () => {
        this.props.history.push(pageUrl)
    }
    render() {
        return (
            <Menu
                style={{
                    marginTop: 0,
                    borderRadius: '0'
                }}
                secondary
                stackable
            >
                <Menu.Item
                    style={{
                        color: '#f3772d',
                        fontSize: '24px'
                    }}
                >
                    链聘网
                </Menu.Item>
                <Menu.Item
                    name='editorials'
                    active={this.props.location.pathname === '/'}
                    onClick={this.handleSwitchPage('/')}
                >
                    首页
                </Menu.Item>

                <Menu.Item
                    name='reviews'
                    active={this.props.location.pathname === '/post'}
                    onClick={this.handleSwitchPage('/post')}
                >
                    上传简历
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={this.props.location.pathname === '/about'}
                    onClick={this.handleSwitchPage('/about')}
                >
                    关于我们
                </Menu.Item>
            </Menu>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default withRouter(Header);
