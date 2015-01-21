// LICENSE : MIT
"use strict";
var {Collection} = Backbone;
import TodoItem from "./todo-item-model.js"
class TodoItemList extends Collection {
    constructor(options) {
        super(options);
        this.model = TodoItem;
    }
}
export default TodoItemList;