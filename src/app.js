import TodoItemView from "./todo-item-view.js"
import TodoItem from "./todo-item-model.js"

$(function () {
    var $form = $('.todoForm');
    var $list = $('.todoList');

    function createTodoItem(text) {
        var model = new TodoItem({
            title: text
        });
        var item = new TodoItemView({model});
        return item.render().el;
    }

    $form.on('submit', function (e) {
        e.preventDefault();

        var $input = $('input[type="text"]');
        var val = $input.val();
        var $li = createTodoItem(val);

        $list.append($li);

        $input.val('');
    });
});
