/*global QUnit*/

sap.ui.define([
	"mibcon/Template/controller/Default.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Default Controller");

	QUnit.test("I should test the Default controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});