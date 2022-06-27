({
	doGetAccounts : function(component, event, helper) {
		var accname = component.find('accName').get('v.value');
        var accNum = component.find('phoneNumb').get('v.value');
        var action = component.get("c.getAcc");
        action.setParams({accName : accname, accPhone: accNum});
        action.setCallback(this, function(response){
        var state = response.getState();
        var errors = response.getError();
        if(state == "SUCCESS"){
         var returndata = response.getReturnValue();
         component.set("v.accList",returndata);
        }
            else{ 
        alert("Error Message is --> " +errors[0].message);
        }
      });
       $A.enqueueAction(action);
	}
})