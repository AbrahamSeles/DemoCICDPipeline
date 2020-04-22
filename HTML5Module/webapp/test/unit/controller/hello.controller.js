/*global QUnit*/

sap.ui.define([
	"ns/HTML5Module/controller/hello.controller"
], function (Controller) {
	"use strict";

	QUnit.module("hello Controller");

	QUnit.test("I should test the hello controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
