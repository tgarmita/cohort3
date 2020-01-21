import React from 'react';

export const AppContext = React.createContext("default");

export const themes = {
    day: {
      nav: '#DDE5FF',
      icon: '#FFB56C',
      background: '#FFFFFF',
      foreground: '#7D99FE',
      highlight: '#FF4F00',
      text: '#000000',
      card: '#FFE09B'
    },
    sunset: {
      nav: '#F9C80E',
      icon: '#09D3AC',
      background: '#443958', //#261447
      foreground: '#2E2157', //#FF6C11
      highlight: '#FD1D53',
      text: '#FFFFFF',
      card: '#FD3777'
    },
  };