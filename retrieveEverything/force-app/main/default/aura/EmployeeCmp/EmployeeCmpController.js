({
	onSubmit : function(component, event, helper) {
		var empname = component.find("empName").get("v.value");
        component.set("v.EmpName",empname);
        //window.alert(empname);
        var empage = component.find("empAge").get("v.value");
        component.set("v.EmpAge", empage);
        //window.alert(empage);
        var empDate = component.find("joinDate").get("v.value");
        component.set("v.EmpJoiningDate", empDate);
        var empint = component.find("intChk").get("v.checked");
        component.set("v.EmpInts",empint);
        var empCity = component.find("mygroup").get("v.value");
        component.set("v.EmpCity", empCity);
        var empGender = component.find("gender").get("v.value");
        component.set("v.EmpGender", empGender);
	}
})