({
	doOperation : function(component, event, helper) {
		var fnum= component.find("fNumber").get("v.value");
        var snum= component.find("sNumber").get("v.value");
        var previousRes = component.get("v.PrsRslt");
        if(event.getSource().getLocalId() == "Add"){
            component.set("v.Result", parseInt(fnum) + parseInt(snum));
            previousRes.push(parseInt(fnum) + parseInt(snum));
        }
        else if(event.getSource().getLocalId()== "sub"){
            component.set("v.Result", fnum - snum);
            previousRes.push(parseInt(fnum) - parseInt(snum));
        }
        else if(event.getSource().getLocalId()=="mul"){
            component.set("v.Result", parseInt(fnum) * parseInt(snum));
            previousRes.push(parseInt(fnum) * parseInt(snum));
        }
        else if(event.getSource().getLocalId()== "div"){
            component.set("v.Result", parseInt(fnum) / parseInt(snum));
            previousRes.push(parseInt(fnum) / parseInt(snum));
        }
	},
    
    doChange: function(component, event, helper){
     var checkboxRes= component.find("prsCheck").get("v.checked");
            component.set("v.prsCheckResult", checkboxRes);
      }
})