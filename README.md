# PureRenderMixin
Facebook's PureRenderMixin for React as an isolated module. Read [Facebook's write up](PureRenderMixin) on why this is useful for
increasing react component rendering performance.

# Installation

      npm install pure-render-mixin


# Usage
Instructions taken verbatim from Facebook's [pure-render-mixin page](https://facebook.github.io/react/docs/pure-render-mixin.html).

```js
var PureRenderMixin = require('pure-render-mixin').PureRenderMixin;
React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return <div className={this.props.className}>foo</div>;
  }
});
```

For convenience ```shallowCompare``` and ```shallowEqual``` are exported for creating
variants of this implementation for special cases:

```js
var shallowCompare = require('pure-render-mixin').shallowCompare;
```

```js
var shallowEqual = require('pure-render-mixin').shallowEqual;
```
