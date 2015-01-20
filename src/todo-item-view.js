// LICENSE : MIT
"use strict";
var {View} = Backbone;
class TodoItemView extends View {
    constructor(options) {
        this.tagName = 'li';

        // *Cache the template function for a single item.*
        this.template = _.template(`
        <input type="checkbox" class="<%= completed ? 'is-complete' : '' %>" <%= completed ? 'checked' : '' %>>
            <span class="todoText"><%- title %></span>
        <i class="removeBtn fa fa-times"></i>
        `);
        // *Define the DOM events specific to an item.*
        this.events = {
            'click input': 'toggleComplete',
            'click .removeBtn': 'removeItem'
        };
        super(options);

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    }

    // *Re-render the contents of the todo item.*
    render() {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.toggleClass('completed', this.model.get('completed'));
        return this;
    }

    toggleComplete() {
        this.model.toggle();
    }

    removeItem() {
        if (!window.confirm('消しますよ')) {
            return;
        }
        this.model.destroy();
        return this;
    }
}
export default TodoItemView;