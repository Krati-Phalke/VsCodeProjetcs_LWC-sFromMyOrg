trigger EventTrigger on Event (after insert, after update) {

    Set<Id> oppId = new Set<Id>();
    for(Event event: trigger.new){
       if(event.WhatId != null && event.What.Type == 'Opportunity'){
            oppId.add(event.WhatId);
            System.debug('WhatId*******'+event.WhatId);
       }
    }
    List<Event> eve = new List<Event>([SELECT Id, WhatId, ActivityDate FROM Event WHERE 
                                       WhatId IN :oppId order by activityDate desc LIMIT 1]); 
    
    //Map of Opportunity & its related Oppotunities
    //Map<Id, List<Opportunity>> mapOpp = new Map<Id, List<Opportunity>>([Select Id, Name, CloseDate,(Select Id, Name, CloseDate,
    //                                    ParentOpportunity__c From Opportunities) From Opportunity WHERE ID IN: oppId]);
    // if(mapOpp.containsKey(eve))                                   
    
    List<Opportunity> oppList = new List<Opportunity>([SELECT Id, Name, CloseDate, ParentOpportunity__c FROM Opportunity Where Id IN: oppId]);
    for(Opportunity opp: oppList){
        
            opp.CloseDate = eve[0].ActivityDate;//mapEvent.get(opp.Id).ActivityDate;
            
            System.debug('Inside for loop************'+opp);
        }
       update oppList; 
}

//Map<Id, List<Event>> mapEvent = new Map<Id, List<Event>>();
    //List<Event> e1 = [select max(ID) from event];
    //List<Event> eveList = new List<Event>([SELECT Id, WhatId, ActivityDate FROM Event where WhatId =: oppId And id in :e1 ORDER BY ActivityDate Desc]);
    //List<AggregateResult> ar = [SELECT Id, WhatId, Max(ActivityDate) FROM Event where WhatId =: oppId];
    //
    ///*Map<Id, List<Event>> mapEvent = new Map<Id, List<Event>>();
        /*   if(!mapEvent.containsKey(e.WhatId)){
            mapEvent.put(e.WhatId, new List<Event>());
        }
        mapEvent.get(e.WhatId).add(e);*/