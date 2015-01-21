import TodoItemView from "./todo-item-view.js"
import TodoItem from "./todo-item-model.js"
import TodoItemList from "./todo-item-collection.js"

$(function () {
    var $form = $('.todoForm');
    var $list = $('.todoList');
    var todoItemList = new TodoItemList();
    todoItemList.on("add", function (todoItem) {
        var item = new TodoItemView({model: todoItem});
        var list = item.render().el;
        $list.append(list);
    });

    function createTodoItem(text) {
        todoItemList.add({
            title: text
        });
    }

    $form.on('submit', function (e) {
        e.preventDefault();

        var $input = $('input[type="text"]');
        var val = $input.val();
        createTodoItem(val);

        $input.val('');
    });
});
