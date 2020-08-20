/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, titleStyle, subtitleStyle, containerStyle, videoStyle } from './Styles';

const defaultProps = {
    bgcolor: '#ccc',
    textcolor: '#fff',
    font: 'sans-serif',
    bgimage: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string,
    font: PropTypes.string,
    bgimage: PropTypes.string,
    video: PropTypes.string,
};

const FullHeader = ({ title, subtitle, bgcolor, textcolor, font, bgimage, video }) => {
    const headerStyles = {
        ...headerStyle,
        backgroundColor: bgcolor,
        backgroundImage: `url(${bgimage})`,
        color: textcolor,
        fontFamily: font,
    };

    const component = (
        <header style={headerStyles}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>

            {video && <video
                autoPlay
                muted
                loop
                src={video}
                style={videoStyle}
            />}
        </header>
    );

    return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
