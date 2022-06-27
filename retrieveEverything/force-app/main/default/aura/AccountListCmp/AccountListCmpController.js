({
	doGetAccounts : function(component, event, helper) {
		var accno = component.find('AccNo').get('v.value');
        var action = component.get("c.getAccountList");
        if(accno <= 0){
            alert("Please enter numerical value greater than 0");
         }
        action.setParams({noAccs : accno});
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