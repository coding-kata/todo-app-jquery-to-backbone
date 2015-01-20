(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/app.js":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var TodoItemView = _interopRequire(require("./todo-item-view.js"));

var TodoItem = _interopRequire(require("./todo-item-model.js"));

$(function () {
  var createTodoItem = function (text) {
    var model = new TodoItem({
      title: text
    });
    var item = new TodoItemView({ model: model });
    return item.render().el;
  };

  var $form = $(".todoForm");
  var $list = $(".todoList");


  $form.on("submit", function (e) {
    e.preventDefault();

    var $input = $("input[type=\"text\"]");
    var val = $input.val();
    var $li = createTodoItem(val);

    $list.append($li);

    $input.val("");
  });
});

},{"./todo-item-model.js":"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-model.js","./todo-item-view.js":"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-view.js"}],"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-model.js":[function(require,module,exports){
// LICENSE : MIT
"use strict";
var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

var Model = Backbone.Model;
var TodoItem = (function (Model) {
  function TodoItem() {
    if (Object.getPrototypeOf(TodoItem) !== null) {
      Object.getPrototypeOf(TodoItem).apply(this, arguments);
    }
  }

  _inherits(TodoItem, Model);

  _prototypeProperties(TodoItem, null, {
    defaults: {
      value: function defaults() {
        return {
          title: "",
          completed: false
        };
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    toggle: {
      value: function toggle() {
        this.save({
          completed: !this.get("completed")
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return TodoItem;
})(Model);

module.exports = TodoItem;

},{}],"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-view.js":[function(require,module,exports){
// LICENSE : MIT
"use strict";
var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _get = function get(object, property, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};

var _inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

var View = Backbone.View;
var TodoItemView = (function (View) {
  function TodoItemView(options) {
    // *... is a list tag.*
    this.tagName = "li";
    // *Cache the template function for a single item.*
    this.template = _.template("\n        <input type=\"checkbox\" class=\"<%= completed ? 'is-complete' : '' %>\" <%= completed ? 'checked' : '' %>>\n            <span class=\"todoText\"><%- title %></span>\n        <i class=\"removeBtn fa fa-times\"></i>\n        ");
    this.input = "";
    // *Define the DOM events specific to an item.*
    this.events = {
      "click input": "toggleComplete",
      "click .removeBtn": "removeItem"
    };
    _get(Object.getPrototypeOf(TodoItemView.prototype), "constructor", this).call(this, options);

    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  }

  _inherits(TodoItemView, View);

  _prototypeProperties(TodoItemView, null, {
    render: {

      // *Re-render the contents of the todo item.*
      value: function render() {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.toggleClass("completed", this.model.get("completed"));
        return this;
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    toggleComplete: {
      value: function toggleComplete() {
        this.model.toggle();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    removeItem: {
      value: function removeItem() {
        if (!window.confirm("消しますよ")) {
          return;
        }
        this.model.destroy();
        return this;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return TodoItemView;
})(View);

module.exports = TodoItemView;

},{}]},{},["/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/app.js"]);
