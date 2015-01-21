(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/app.js":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var TodoItemView = _interopRequire(require("./todo-item-view.js"));

var TodoItem = _interopRequire(require("./todo-item-model.js"));

var TodoItemList = _interopRequire(require("./todo-item-collection.js"));

$(function () {
  var createTodoItem = function (text) {
    todoItemList.add({
      title: text
    });
  };

  var $form = $(".todoForm");
  var $list = $(".todoList");
  var todoItemList = new TodoItemList();
  todoItemList.on("add", function (todoItem) {
    var item = new TodoItemView({ model: todoItem });
    var list = item.render().el;
    $list.append(list);
  });

  $form.on("submit", function (e) {
    e.preventDefault();

    var $input = $("input[type=\"text\"]");
    var val = $input.val();
    createTodoItem(val);

    $input.val("");
  });
});

},{"./todo-item-collection.js":"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-collection.js","./todo-item-model.js":"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-model.js","./todo-item-view.js":"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-view.js"}],"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-collection.js":[function(require,module,exports){
// LICENSE : MIT
"use strict";
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

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var Collection = Backbone.Collection;
var TodoItem = _interopRequire(require("./todo-item-model.js"));

var TodoItemList = (function (Collection) {
  function TodoItemList(options) {
    _get(Object.getPrototypeOf(TodoItemList.prototype), "constructor", this).call(this, options);
    this.model = TodoItem;
  }

  _inherits(TodoItemList, Collection);

  return TodoItemList;
})(Collection);

module.exports = TodoItemList;

},{"./todo-item-model.js":"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-model.js"}],"/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/todo-item-model.js":[function(require,module,exports){
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
    this.tagName = "li";

    // *Cache the template function for a single item.*
    this.template = _.template("\n        <input type=\"checkbox\" class=\"<%= completed ? 'is-complete' : '' %>\" <%= completed ? 'checked' : '' %>>\n            <span class=\"todoText\"><%- title %></span>\n        <i class=\"removeBtn fa fa-times\"></i>\n        ");
    // *Define the DOM events specific to an item.*
    this.events = {
      "click input": this.toggleComplete,
      "click .removeBtn": this.removeItem
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

},{}]},{},["/Users/azu/.ghq/github.com/azu/todo-app-jquery-to-backbone/src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2F6dS8uZ2hxL2dpdGh1Yi5jb20vYXp1L3RvZG8tYXBwLWpxdWVyeS10by1iYWNrYm9uZS9zcmMvYXBwLmpzIiwiL1VzZXJzL2F6dS8uZ2hxL2dpdGh1Yi5jb20vYXp1L3RvZG8tYXBwLWpxdWVyeS10by1iYWNrYm9uZS9zcmMvdG9kby1pdGVtLWNvbGxlY3Rpb24uanMiLCIvVXNlcnMvYXp1Ly5naHEvZ2l0aHViLmNvbS9henUvdG9kby1hcHAtanF1ZXJ5LXRvLWJhY2tib25lL3NyYy90b2RvLWl0ZW0tbW9kZWwuanMiLCIvVXNlcnMvYXp1Ly5naHEvZ2l0aHViLmNvbS9henUvdG9kby1hcHAtanF1ZXJ5LXRvLWJhY2tib25lL3NyYy90b2RvLWl0ZW0tdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FPLFlBQVksMkJBQU0scUJBQXFCOztJQUN2QyxRQUFRLDJCQUFNLHNCQUFzQjs7SUFDcEMsWUFBWSwyQkFBTSwyQkFBMkI7O0FBRXBELENBQUMsQ0FBQyxZQUFZO3VCQVVWLFVBQXdCLElBQUksRUFBRTtBQUMxQixnQkFBWSxDQUFDLEdBQUcsQ0FBQztBQUNiLFdBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFDO0dBQ047O0FBYkQsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNCLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQixNQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3RDLGNBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsUUFBUSxFQUFFO0FBQ3ZDLFFBQUksSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFB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QUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUMvRCxlQUFPLElBQUksQ0FBQztPQUNmOzs7OztBQUVELGtCQUFjO2FBQUEsMEJBQUc7QUFDYixZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO09BQ3ZCOzs7OztBQUVELGNBQVU7YUFBQSxzQkFBRztBQUNULFlBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzFCLGlCQUFPO1NBQ1Y7QUFDRCxZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JCLGVBQU8sSUFBSSxDQUFDO09BQ2Y7Ozs7Ozs7U0F0Q0MsWUFBWTtHQUFTLElBQUk7O2lCQXdDaEIsWUFBWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVG9kb0l0ZW1WaWV3IGZyb20gXCIuL3RvZG8taXRlbS12aWV3LmpzXCJcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi90b2RvLWl0ZW0tbW9kZWwuanNcIlxuaW1wb3J0IFRvZG9JdGVtTGlzdCBmcm9tIFwiLi90b2RvLWl0ZW0tY29sbGVjdGlvbi5qc1wiXG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZm9ybSA9ICQoJy50b2RvRm9ybScpO1xuICAgIHZhciAkbGlzdCA9ICQoJy50b2RvTGlzdCcpO1xuICAgIHZhciB0b2RvSXRlbUxpc3QgPSBuZXcgVG9kb0l0ZW1MaXN0KCk7XG4gICAgdG9kb0l0ZW1MaXN0Lm9uKFwiYWRkXCIsIGZ1bmN0aW9uICh0b2RvSXRlbSkge1xuICAgICAgICB2YXIgaXRlbSA9IG5ldyBUb2RvSXRlbVZpZXcoe21vZGVsOiB0b2RvSXRlbX0pO1xuICAgICAgICB2YXIgbGlzdCA9IGl0ZW0ucmVuZGVyKCkuZWw7XG4gICAgICAgICRsaXN0LmFwcGVuZChsaXN0KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRleHQpIHtcbiAgICAgICAgdG9kb0l0ZW1MaXN0LmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogdGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgICAgICB2YXIgdmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICBjcmVhdGVUb2RvSXRlbSh2YWwpO1xuXG4gICAgICAgICRpbnB1dC52YWwoJycpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBMSUNFTlNFIDogTUlUXG5cInVzZSBzdHJpY3RcIjtcbnZhciB7Q29sbGVjdGlvbn0gPSBCYWNrYm9uZTtcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi90b2RvLWl0ZW0tbW9kZWwuanNcIlxuY2xhc3MgVG9kb0l0ZW1MaXN0IGV4dGVuZHMgQ29sbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IFRvZG9JdGVtO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtTGlzdDsiLCIvLyBMSUNFTlNFIDogTUlUXG5cInVzZSBzdHJpY3RcIjtcbnZhciB7TW9kZWx9ID0gQmFja2JvbmU7XG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIE1vZGVsIHtcbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2F2ZSh7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICF0aGlzLmdldCgnY29tcGxldGVkJylcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07IiwiLy8gTElDRU5TRSA6IE1JVFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIge1ZpZXd9ID0gQmFja2JvbmU7XG5jbGFzcyBUb2RvSXRlbVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9ICdsaSc7XG5cbiAgICAgICAgLy8gKkNhY2hlIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgYSBzaW5nbGUgaXRlbS4qXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiPCU9IGNvbXBsZXRlZCA/ICdpcy1jb21wbGV0ZScgOiAnJyAlPlwiIDwlPSBjb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJyAlPj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9kb1RleHRcIj48JS0gdGl0bGUgJT48L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwicmVtb3ZlQnRuIGZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICBgKTtcbiAgICAgICAgLy8gKkRlZmluZSB0aGUgRE9NIGV2ZW50cyBzcGVjaWZpYyB0byBhbiBpdGVtLipcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAgICAgICAnY2xpY2sgaW5wdXQnOiB0aGlzLnRvZ2dsZUNvbXBsZXRlLFxuICAgICAgICAgICAgJ2NsaWNrIC5yZW1vdmVCdG4nOiB0aGlzLnJlbW92ZUl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlJywgdGhpcy5yZW5kZXIpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdkZXN0cm95JywgdGhpcy5yZW1vdmUpO1xuICAgIH1cblxuICAgIC8vICpSZS1yZW5kZXIgdGhlIGNvbnRlbnRzIG9mIHRoZSB0b2RvIGl0ZW0uKlxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwudG9KU09OKCkpKTtcbiAgICAgICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3MoJ2NvbXBsZXRlZCcsIHRoaXMubW9kZWwuZ2V0KCdjb21wbGV0ZWQnKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLm1vZGVsLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW0oKSB7XG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oJ+a2iOOBl+OBvuOBmeOCiCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtVmlldzsiXX0=
