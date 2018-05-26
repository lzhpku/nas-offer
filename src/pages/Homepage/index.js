import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment, Header, TextArea,
    Button, Modal, Icon,
    Label, Image, Sidebar,
} from 'semantic-ui-react';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Menu
                    style={{
                        marginTop: 0,
                        borderRadius: '0'
                    }}
                    inverted
                    pointing
                    secondary
                >
                    <Menu.Item
                        name='editorials'
                    >
                        首页
                    </Menu.Item>

                    <Menu.Item
                        name='reviews'
                    >
                        上传简历
                    </Menu.Item>

                    <Menu.Item
                        name='upcomingEvents'
                    >
                        关于我们
                    </Menu.Item>
                </Menu>
                <Segment
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >

                </Segment>
            </div>
        );
    }
}

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
