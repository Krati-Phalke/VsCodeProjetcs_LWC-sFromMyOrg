({
	doInit : function(component, event, helper) {
		var action = component.get("c.fetchSiteUrl");    
        var oppId = component.get("v.recordId");
        console.log(oppId);
        action.setParams({
            "oppId":oppId
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.res" , 'Send Link and Verification Code Successfully.');
            }else{
                component.set("v.res" , 'Please contact Admin.');
            }
        });
	}
})