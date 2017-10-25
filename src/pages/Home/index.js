// Global Styles
import 'typeface-catamaran'; // eslint-disable-line
import 'font-awesome/css/font-awesome.css';
import 'simple-line-icons/css/simple-line-icons.css';
import 'html5-device-mockups/dist/device-mockups.css';
import React from 'react';

import PageLayout from '../../components/PageLayout';
import Masthead from '../../components/Masthead';
import Download from '../../components/Download';
import Features from '../../components/Features';
import CallToAction from '../../components/CallToAction';
import ContactUs from '../../components/ContactUs';
import Icon from '../../components/Icon';
import demoScreen from './images/demo-screen-1.jpg';
import './style.css';


const FEATURES = [
  {
    title: 'Device Mockups',
    description: 'Ready to use HTML/CSS device mockups, no Photoshop required!',
    icon: <Icon family="simple" name="screen-smartphone" />,
  },
  {
    title: 'Flexible Use',
    description: 'Put an image, video, animation, or anything else in the screen!',
    icon: <Icon family="simple" name="camera" />,
  },
  {
    title: 'Free to Use',
    description: 'As always, this theme is free to download and use for any purpose!',
    icon: <Icon family="simple" name="present" />,
  },
  {
    title: 'Open Source',
    description: 'Since this theme is MIT licensed, you can use it commercially!',
    icon: <Icon family="simple" name="lock-open" />,
  },
];
const SECTIONS = [
  {
    title: 'Download',
    id: 'download',
  },
  {
    title: 'Features',
    id: 'features',
  },
  {
    title: 'Contact',
    id: 'contact',
  },
];
const SOCIAL_NETWORKS = [
  {
    id: 'twitter',
    icon: <Icon family="fa" name="twitter" />,
    color: '#1da1f2',
    link: '#',
  },
  {
    id: 'facebook',
    icon: <Icon family="fa" name="facebook" />,
    color: '#3b5998',
    link: '#',
  },
  {
    id: 'google-plus',
    icon: <Icon family="fa" name="google-plus" />,
    color: '#dd4b39',
    link: '#',
  },
];

/**
 * The home page
 */
const HomePage = () => (
  <PageLayout sections={SECTIONS}>
    <Masthead
      text="New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!"
      buttonLabel="Start Now for Free!"
      downloadLink="#download"
      demoScreen={demoScreen}
    />
    <Download
      title="Discover what all the buzz is about!"
      subtitle="Our app is available on any mobile device! Download now to get started!"
      googlePlayDownloadLink="#"
      appStoreDownloadLink="#"
    />
    <Features
      title="Unlimited Features, Unlimited Fun"
      subtitle="Check out what you can do with this app theme!"
      features={FEATURES}
      demoScreen={demoScreen}
    />
    <CallToAction
      firstLine="Stop waiting."
      secondLine="Start building."
      buttonLabel="Let's Get Started!"
      buttonUrl="#contact"
    />
    <ContactUs socialNetworks={SOCIAL_NETWORKS} />
  </PageLayout>
);

export default HomePage;
