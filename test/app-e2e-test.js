// LICENSE : MIT
"use strict";
var injectBrowser = require('testium/mocha');
var assert = require("power-assert");
var AppPage = require("./page-objects/app-page");
var browser;
describe("app-test", function () {
    var inputText = 'todo text';
    var page;
    before(injectBrowser());
    beforeEach(function () {
        browser = this.browser;
        page = new AppPage(this.browser);
    });
    context("when テキストボックスに文字を入れて送信した時", function () {
        beforeEach(function () {
            page.addTodo(inputText)
        });
        it("should li要素が作成されている", function () {
            var list = page.getTodoItems();
            assert(list.length === 1);
        });

        it("should リストアイテムのテキストは送信したものと一致している", function () {
            var todo = page.getTodoItems()[0];
            var text = todo.get("text");
            assert.equal(text, inputText);
        });
    });
    describe("todo", function () {
        beforeEach(function () {
            page.addTodo(inputText);
        });
        context("when click the checkbox", function () {
            it("should added `is-complete`", function () {
                var todo = page.getTodoItems()[0];
                page.toggleTodo(todo);
                browser.assert.elementExists(".is-complete");
            });
        });
        context("when click removeBtn, then cancel confirm", function () {
            it("should have todo item", function () {
                var todo = page.getTodoItems()[0];
                // confirmがfalseを返すようにする = キャンセル
                browser.evaluate("return window.confirm = function() { return " + false + "; };");
                page.removeTodo(todo);
                assert(page.getTodoItems().length > 0);
            });
        });
        context("when click removeBtn, then ok to confirm", function () {
            it("should have nottodo item", function () {
                var todo = page.getTodoItems()[0];
                // confirmがtrueを返すようにする = OK
                browser.evaluate("return window.confirm = function() { return " + true + "; };");
                page.removeTodo(todo);
                assert(page.getTodoItems().length === 0);
            });
        });
    });
});
