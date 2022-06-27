({
	callContApexMethod : function(component, event, helper) {
//Step1
var action = component.get("c.getContactList");
//Step2
action.setParams({});
action.setCallback(this, function(response){
var state = response.getState();
var error = response.getError();
if(state == "SUCCESS")
{
var returnvalue = response.getReturnValue();
component.set("v.contactList",returnvalue);
}
else
{
alert("Error---> " + error[0].message);
}
});
//step3 this has to be last step
$A.enqueueAction(action);
}
})