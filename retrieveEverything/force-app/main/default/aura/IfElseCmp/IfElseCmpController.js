({
	onSubmit : function(component, event, helper) {
		var firstNum = component.find("fNum").get("v.value");
        var secNum = component.find("sNum").get("v.value");
        var sum= parseInt(firstNum) + parseInt(secNum);
        component.set("v.addition", sum);
        //window.alert(sum);
	},
    doChange : function(component, event, helper){
        var checkboxvalue = component.find("resCheck").get("v.checked");
        component.set("v.chkCheck", checkboxvalue);
    }
})