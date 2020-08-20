import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React full header', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD"
        />
    ))
    .add('with title, subtitle and bgcolor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD"
            bgcolor="#3299bb"
        />
    ))
    .add('with title, subtitle, bgcolor and textcolor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD"
            bgcolor="#3299bb"
            textcolor="#ff9900"
        />
    ))
    .add('with title, subtitle, bgcolor, textcolor and font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD"
            bgcolor="#3299bb"
            textcolor="#ff9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgimage="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgcolor="#EBE9EB"
            textcolor="#3299BB"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ));
