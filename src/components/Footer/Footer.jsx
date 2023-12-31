import { Component } from 'react';
import css from './Footer.module.css';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        return (
            <div className={css.footer}>
                <p>
                © 2023 Phonebook. All rights reserved. <br />
                Created by Estar0ssa1
                </p>
            </div>
        );
    }
}

Footer.propTypes = {
    children: PropTypes.node,
}