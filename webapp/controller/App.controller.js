sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(Controller){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.controllerdemo.controller.App",{
		 onGreet : function () {
		 	alert("Hello Vaibhav Mojidra");
		 }	
	});
});