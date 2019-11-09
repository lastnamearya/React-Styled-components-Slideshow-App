import React from 'react';

// Creating a Context Store for our Game

const { Provider, Consumer } = React.createContext();

// **************************************** //

class StoreProvider extends React.Component {
  state = {
    isWelcomeSlideActive: true,
    currentActiveSlide: undefined,
  };

  changeCurrentActiveSlide = slideIndex =>
    this.setState({ currentActiveSlide: slideIndex, isWelcomeSlideActive: false });

  // ******************************************** //

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          changeCurrentActiveSlide: this.changeCurrentActiveSlide,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };
