'use strict';

import { default as React, Component } from 'react';

export default class MyView extends Component {

  render() {

    // Logs the fact that we're rendering because
    // "shouldComponentUpdate()" will prevent it
    // if the store state hasn't changed.
    console.log('Rendering...');

    let state = { this.props };

    return (
      <p>{state.get('text')}</p>
    );
  }

  // Since we're using an Immutable.js Map as
  // the store state, we know that if the
  // instances are equal, nothing has changed
  // and there's no need to render.
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
}
