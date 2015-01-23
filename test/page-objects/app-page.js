// LICENSE : MIT
"use strict";
function AppPage(browser) {
    this.browser = browser;
    this.browser.navigateTo("/");
}
AppPage.prototype.addTodo = function addTodo(text) {
    this.browser.setValue('.todoText', text);
    this.browser.click('.todoBtn');
};
AppPage.prototype.getTodoItems = function () {
    return this.browser.getElements('.todoList li');
};
/**
 * @param todo the todo Element
 */
AppPage.prototype.toggleTodo = function (todo) {
    // @todo https://github.com/groupon-testium/webdriver-http-sync doesn't implemented Element#getElement.
    var input = todo.getElement('input[type="checkbox"]');
    input.click();
};
AppPage.prototype.removeTodo = function (todo) {
    // @todo https://github.com/groupon-testium/webdriver-http-sync doesn't implemented Element#getElement.
    var input = todo.getElement('.removeBtn');
    input.click();
};
module.exports = AppPage;