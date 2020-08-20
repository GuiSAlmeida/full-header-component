Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = {
    bgcolor: '#ccc',
    textcolor: '#fff',
    font: 'sans-serif',
    bgimage: ''
}; /* eslint-disable no-unused-vars */


var propTypes = {
    title: _propTypes2['default'].string,
    subtitle: _propTypes2['default'].string,
    bgcolor: _propTypes2['default'].string,
    textcolor: _propTypes2['default'].string,
    font: _propTypes2['default'].string,
    bgimage: _propTypes2['default'].string,
    video: _propTypes2['default'].string
};

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        bgcolor = _ref.bgcolor,
        textcolor = _ref.textcolor,
        font = _ref.font,
        bgimage = _ref.bgimage,
        video = _ref.video;

    var headerStyles = Object.assign({}, _Styles.headerStyle, {
        backgroundColor: bgcolor,
        backgroundImage: 'url(' + String(bgimage) + ')',
        color: textcolor,
        fontFamily: font
    });

    var component = _react2['default'].createElement(
        'header',
        { style: headerStyles },
        _react2['default'].createElement(
            'div',
            { style: _Styles.containerStyle },
            title && _react2['default'].createElement(
                'h1',
                { style: _Styles.titleStyle },
                title
            ),
            subtitle && _react2['default'].createElement(
                'h2',
                { style: _Styles.subtitleStyle },
                subtitle
            )
        ),
        video && _react2['default'].createElement('video', {
            autoPlay: true,
            muted: true,
            loop: true,
            src: video,
            style: _Styles.videoStyle
        })
    );

    return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

exports['default'] = FullHeader;