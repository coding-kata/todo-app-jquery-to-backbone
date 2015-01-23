// LICENSE : MIT
"use strict";
var injectBrowser = require('testium/mocha');
var assert = require("power-assert");
var AppPage = require("./page-objects/app-page");
var browser;
function addTodo(text) {
    browser.setValue('.todoText', text);
    browser.click('.todoBtn');
}
describe("app-test", function () {
    var text = 'todo text';
    before(injectBrowser());
    beforeEach(function () {
        browser = this.browser;
        this.browser.navigateTo("/");
    });
    context("when テキストボックスに文字を入れて送信した時", function () {
        beforeEach(function () {
            addTodo(text)
        });
        it("should li要素が作成されている", function () {
            var list = browser.getElements('.todoList li');
            assert(list.length > 0);
        });

        it("should リストアイテムのテキストは送信したものと一致している", function () {
            browser.assert.elementHasText('.todoList li', text)
        });
    });
    describe("todoについて", function () {
        beforeEach(function () {
            addTodo(text);
        });
        context("checkboxをクリックしたら", function () {
            it("should `is-complete`が追加される", function () {
                browser.click('.todoList li input[type="checkbox"]');
                browser.assert.elementExists(".is-complete");
            });
        });
        context("removeBtnをクリックして、confirmでキャンセルしても", function () {
            it("li要素は消えない", function () {
                // confirmがfalseを返すようにする = キャンセル
                browser.evaluate("return window.confirm = function() { return " + false + "; };");

                browser.click('.todoList li .removeBtn');
                browser.assert.elementExists(".todoList li");
            });
        });
        context("removeBtnをクリックしてconfirmでOKしたら", function () {
            it("li要素が消える", function () {
                // confirmがtrueを返すようにする = OK
                browser.evaluate("return window.confirm = function() { return " + true + "; };");
                browser.click('.todoList li .removeBtn');
                browser.assert.elementDoesntExist(".todoList li");
            });
        });
    });
});
