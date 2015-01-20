// LICENSE : MIT
"use strict";
var {Model} = Backbone;
class TodoItem extends Model {
    defaults() {
        return {
            title: '',
            completed: false
        };
    }
}
export default TodoItem;