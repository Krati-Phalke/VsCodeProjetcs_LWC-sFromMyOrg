({
	callOppMethod : function(component, event, helper) {
		var action= component.get("c.getOppList");
        action.setParams({});
        action.setCallback(this, function(response){
            var state= response.getState();
            var error= response.getError();
            if(state == "SUCCESS"){
                var returnValue = response.getReturnValue();
                component.set("v.oppList", returnValue);
            }
            else{
                alert("Error is : "+error);
            }
        });
        $A.enqueueAction(action);
	}
})