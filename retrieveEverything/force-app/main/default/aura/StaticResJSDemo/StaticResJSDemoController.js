({
	getFruits : function(component, event, helper) {
		var fruits = _map.getFruits();
        component.set("v.externalFruitList", fruits);
	}
})