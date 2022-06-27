({
	onSubmit : function(component, event, helper) {
		var bmiheight= component.find("height").get("v.value");
        var bmiweight= component.find("weight").get("v.value");
        var preRes = component.get("v.resultlist");
        //var calculate= (bmiweight/(bmiheight*bmiheight));
        component.set("v.checkbmi", bmiweight/(bmiheight*bmiheight));
        preRes.push(bmiweight/(bmiheight*bmiheight));
        //window.alert(calculate);
	},
    doChange : function(component,event,helper){
       var prscheked = component.find("prsChk").get("v.checked");
       component.set("v.previousResChk",prscheked);
}
})