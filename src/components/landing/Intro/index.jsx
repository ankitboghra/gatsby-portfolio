import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import emoji from 'react-easy-emoji';
import { resumeUrl } from 'data/config';
import { Wrapper, IntroWrapper, Details, Thumbnail, Wave, DownloadResume, StyledLink } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>
            Hi There! <Wave>{emoji('👋')}</Wave>
          </h1>
          <h4>I’m Ankit and I’m a Frontend engineer and a freelancer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>{' '}
          <StyledLink to={resumeUrl} activeStyle={null} target="_blank">
            <DownloadResume>{emoji('📩')}</DownloadResume> Resume
          </StyledLink>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Ankit and I’m a Frontend engineer and a freelancer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
