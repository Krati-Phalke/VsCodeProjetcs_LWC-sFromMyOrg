({
	doClick : function(component, event, helper) {
        var colorsarray= component.get("v.colorsArray");
		 colorsarray.push("red");
        colorsarray.push("black");
         colorsarray.push("grey");
         colorsarray.push("maroon");
         colorsarray.push("peach");
        component.set("v.colorsArray", colorsarray);
	}
})