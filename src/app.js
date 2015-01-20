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
        //var $li = $('<li>');
        //var $text = $('<span>').addClass('todoText').text(text);
        //var $checkbox = $('<input type="checkbox">');
        //var $remove = $('<i>').addClass('removeBtn fa fa-times');
        //$remove.on('click', function () {
        //    if (!window.confirm('消しますよ')) {
        //        return;
        //    }
        //    $li.remove();
        //});
        //$checkbox.on('click', function () {
        //    $li.toggleClass('is-complete');
        //});
        //$li.append($checkbox, $text, $remove);
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
