'use strict';
var shallowCompare = require('./shallow-compare');
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};


module.exports = {
    PureRenderMixin: ReactComponentWithPureRenderMixin,

    // For convenience also export shallowCompare and shallowEqual
    shallowCompare: shallowCompare,
    shallowEqual: require('./shallow-equal')
};
