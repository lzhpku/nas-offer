import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Header, TextArea,
    Button, Modal, Icon,
    Label, Image,
} from 'semantic-ui-react';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Segment raised>
                    <Label as='a' color='red' ribbon>Overview</Label>
                    <span>Account Details</span>

                    <Image src='/assets/images/wireframe/paragraph.png' />
                </Segment>
            </div>
        );
    }
}

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
