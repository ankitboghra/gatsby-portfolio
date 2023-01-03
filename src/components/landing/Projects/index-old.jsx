import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Languages, Language } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: UPDATED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  homepageUrl
                  description
                  primaryLanguage {
                    id
                    color
                    name
                  }
                  languages(first: 3, orderBy: { field: SIZE, direction: ASC }) {
                    edges {
                      node {
                        name
                        color
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Languages>
                {node.languages.edges.map(({ node: languageNode }) => (
                  <Language key={languageNode.id}>{languageNode.name}</Language>
                ))}
              </Languages>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
