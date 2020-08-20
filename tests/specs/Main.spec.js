/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    it('should have tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have tag h1 when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have tag h1 when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have tag h1 with title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have tag h2 when subtitle passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });
    });


    context('bgcolor', () => {
        it('should have background #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background equal #000 when bgcolor is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" bgcolor="#000"/>);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textcolor', () => {
        it('should have color #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should have color equal #ff0000 when bgcolor is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" textcolor="#ff0000"/>);
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
    });

    context('font', () => {
        it('should have font sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have font equal open-sans when font is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" font="open-sans" />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });

    context('bgimage', () => {
        it('should have background-image empty when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('should have background-image equal bg.jpg when background-image is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="curso" font="open-sans" bgimage="bg.jpg" />);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have <video/> when video passed', () => {
            const wrapper = shallow(<FullHeader video="video.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should not have tag <video/> when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });

        it('should have tag <video/> with video passed', () => {
            const wrapper = shallow(<FullHeader video="video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal('video.mp4');
        });
    });


});
