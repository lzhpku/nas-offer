import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Segment, Header, TextArea,
    Button, Modal, Icon,
    Label, Image,
} from 'semantic-ui-react';
import ResumeCard from '../../components/ResumeCard';

class Homepage extends Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Column>
                    <ResumeCard />
                </Grid.Column>
            </Grid>
        );
    }
}

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
