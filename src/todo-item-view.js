// LICENSE : MIT
"use strict";
var {View} = Backbone;
class TodoItemView extends View {
    constructor(options) {
        // *... is a list tag.*
        this.tagName = 'li';
        // *Cache the template function for a single item.*
        this.template = _.template(`
        <input type="checkbox">
            <span class="todoText"><%- title %></span>
        <i class="removeBtn fa fa-times"></i>
        `);
        this.input = '';
        // *Define the DOM events specific to an item.*
        this.events = {
            'click input': 'toggleComplete',
            'click .removeBtn': 'removeItem'
        };
        super(options);
    }

    // *Re-render the contents of the todo item.*
    render() {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.toggleClass('completed', this.model.get('completed'));
        return this;
    }

    toggleComplete() {

    }

    removeItem() {
    }
}
export default TodoItemView;