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

    toggle() {
        this.save({
            completed: !this.get('completed')
        });
    }
}
export default TodoItem;