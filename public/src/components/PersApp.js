import React, { Component } from 'react';
import styled from 'styled-components';

import Description from './Description';
import FeaturesColumn from './FeaturesColumn';
import Graph from './Graph';
import Header from './Header';
import TypeTitle from './TypeTitle';

import types from '../constants/types';
import { TITLE, SUBTITLE } from '../constants/';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  font-family: Arial;
  font-size: ${props => props.theme.sSize}px;
  font-weight: 300;
  height: ${props => props.theme.module * 18}px;
  margin: ${props => props.theme.module * 2}px auto 0;
  position: relative;
  text-align: center;
  width: ${props => props.theme.module * 27}px;
`;

const Position = styled.div`
  background-color: black;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  color: white;
  height: ${props => props.theme.module * .8}px;
  margin: 0 auto;
  padding: 5px;
  padding-left: ${props => props.theme.module * .5}px;
  text-align: left;
  width: ${props => props.theme.module * 7}px;

  &:hover {
    background-color: ${props => props.theme.mediumBlue};
    cursor: pointer;
  }
`;
class PersApp extends Component {
  state = {
    name: '',
    shortcut: '',
    percentage: '',
    features: '',
    summary: '',
    curiosity: '',
    famous: []
  }

  hoverEfect = (item) => {
    this.setState(() => item);
  }

  render() {
    const { shortcut, summary, curiosity } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header
            title={TITLE}
            subtitle={SUBTITLE}
          />
          <TypeTitle
            title={shortcut}
          />
          <FeaturesColumn
            activePers={this.state.name.toLowerCase()}
          />
          { types.map(item  => (
            <Position
              key={item.shortcut}
              onMouseEnter={() => this.hoverEfect(item)}
            >
              {item.name}
            </Position>
          ))}
          <Graph types={types} />
          <Description
            summary={summary}
            curiosity={curiosity}
          />
        </Container>
      </ThemeProvider>
    );
  }
}
export default PersApp;