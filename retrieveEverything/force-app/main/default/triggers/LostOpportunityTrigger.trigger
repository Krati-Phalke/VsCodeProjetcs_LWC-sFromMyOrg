trigger LostOpportunityTrigger on Opportunity (before insert, after insert, after update) {

    Task [] oTasks = new List<Task>();
    for(Opportunity opp : trigger.new){
        System.debug('inside for loop');
        if(opp.StageName == 'Closed Lost'){
            System.debug('inside if condition');
            oTasks.add(new Task(Subject='Lost Opportunity Follow up AP', ActivityDate=Date.today()+10, WhatId= opp.Id,OwnerId=opp.OwnerId));
        }
    }
    if(oTasks.size() >0){
        System.debug('inside insert if condition');
        insert oTasks;
    }
}