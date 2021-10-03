import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Languages, Language } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const edges = [];
  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(first: 8, orderBy: { field: UPDATED_AT, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 homepageUrl
  //                 description
  //                 primaryLanguage {
  //                   id
  //                   color
  //                   name
  //                 }
  //                 languages(first: 3, orderBy: { field: SIZE, direction: ASC }) {
  //                   edges {
  //                     node {
  //                       name
  //                       color
  //                       id
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  const withAdditionalProjects = [
    {
      node: {
        id: 'wallet-web',
        url: 'https://wallet.polygon.technology/',
        name: 'Polygon Wallet',
        company: '@Polygon',
        description: 'Crypto wallet for polygon(matic) network, polygon-ethereum bridge, staking',
        languages: {
          edges: [
            { node: { id: 'blockchain', name: 'Blockchain' } },
            { node: { id: 'web3', name: 'Web3' } },
            { node: { id: 'vue', name: 'Vue' } },
            { node: { id: 'nuxt', name: 'Nuxt' } },
            { node: { id: 'javascript', name: 'JavaScript' } },
            { node: { id: 'scss', name: 'SCSS' } },
          ],
        },
      },
    },
    {
      node: {
        id: 'matic-design-system',
        url: 'https://github.com/maticnetwork/matic-design-system',
        name: 'Matic Design System',
        company: '@Polygon',
        description: 'Frontend design system for all matic products: Vue component library, CSS library ',
        languages: {
          edges: [
            { node: { id: 'vue', name: 'Vue' } },
            { node: { id: 'javascript', name: 'JavaScript' } },
            { node: { id: 'scss', name: 'SCSS' } },
            { node: { id: 'css', name: 'CSS' } },
            { node: { id: 'html5', name: 'HTML5' } },
          ],
        },
      },
    },
    {
      node: {
        id: 'matic-js',
        url: 'https://github.com/maticnetwork/matic.js',
        name: 'matic.js',
        company: '@Polygon',
        description: 'For developers, to interact with the various components of Matic Network',
        languages: {
          edges: [
            { node: { id: 'blockchain', name: 'Blockchain' } },
            { node: { id: 'web3', name: 'Web3' } },
            { node: { id: 'javascript', name: 'JavaScript' } },
            { node: { id: 'typescript', name: 'TypeScript' } },
          ],
        },
      },
    },
    {
      node: {
        id: 'gatsby-portfolio',
        url: 'https://www.codeswim.in/',
        name: 'Personal Portfolio',
        company: '@Self',
        description: 'Personal portfolio',
        languages: {
          edges: [
            { node: { id: 'react', name: 'React' } },
            { node: { id: 'gatsby', name: 'Gatsby' } },
            { node: { id: 'graphql', name: 'GraphQL' } },
            { node: { id: 'styled-components', name: 'StyledComponents' } },
            { node: { id: 'javascript', name: 'JavaScript' } },
          ],
        },
      },
    },
    {
      node: {
        id: 'bharti-axa',
        url: 'https://www.bharti-axagi.co.in/',
        name: 'Bharti Axa General Insurance',
        company: '@KulizaTechnologiesPvtLtd',
        description: 'Online general insurance policy',
        languages: {
          edges: [
            { node: { id: 'react', name: 'React' } },
            { node: { id: 'redux', name: 'Redux' } },
            { node: { id: 'typescript', name: 'TypeScript' } },
            { node: { id: 'scss', name: 'SCSS' } },
          ],
        },
      },
    },
    {
      node: {
        id: 'cleartax-gst',
        url: 'https://cleartax.in/gst',
        name: 'ClearTax GST',
        company: '@ClearTax',
        description:
          'For small businesses and enterprises: Billing and GST Returns Filing and reconciliation of mismatched invoices and automatic data validation',
        languages: {
          edges: [
            { node: { id: 'react', name: 'React' } },
            { node: { id: 'redux', name: 'Redux' } },
            { node: { id: 'typescript', name: 'TypeScript' } },
            { node: { id: 'electron-js', name: 'ElectronJS' } },
            { node: { id: 'scss', name: 'SCSS' } },
          ],
        },
      },
    },
    {
      node: {
        id: 'watabid',
        url: 'https://watabid.com/',
        name: 'WatABid',
        company: '@KulizaTechnologiesPvtLtd',
        description: 'Reverse bidding for real estate units',
        languages: {
          edges: [
            { node: { id: 'vue', name: 'Vue' } },
            { node: { id: 'vuex', name: 'VueX' } },
            { node: { id: 'vuetify', name: 'vuetify' } },
          ],
        },
      },
    },
    ...edges,
  ];
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {withAdditionalProjects.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>
                  {node.name} <span>{node.company}</span>
                </h4>
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
