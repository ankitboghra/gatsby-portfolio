import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import skills from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Detail, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={skills} alt="I’m Ankit and I’m a Frontend engineer and a freelancer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            ☕ Javascript evangalist, addicted to tea!
            <br />
            🏊🏻 Drowned into the ocean of web3
            <br />
            🏋🏻 Working to make web3 experience feel as web2
            <br />
            👨🏻‍💻 Contributing my bit!
            <br />
            👀 Eagerly waiting to see how the web3 revolution turns out
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
