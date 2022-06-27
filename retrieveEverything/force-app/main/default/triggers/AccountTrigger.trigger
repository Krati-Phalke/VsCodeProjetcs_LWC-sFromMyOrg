trigger AccountTrigger on Account (before insert, before update, after insert, after update, before delete, after delete, after unDelete) {
    
     TriggerDispatcher.run(new AccountTriggerHandler_2(), 'AccountTrigger');    
    
    /*if(Trigger.isAfter && trigger.isUpdate){
        AccountController.updateContacts(trigger.new);
        System.debug('********'+trigger.new);
        System.debug('Old values********'+trigger.old);
    }*/
    //TriggerDispatcher.run(new AccountTriggerHandler_2(), 'AccountTrigger');
    //if(Trigger.isBefore){
     //   if(trigger.isInsert ){
     //         System.debug('before Insert****');
      //      AccountTriggerHandler.insertAccount(trigger.new);
     //    }
     //   if(trigger.isUpdate){
     //  System.debug('inside before update');      } }
    
   // if(Trigger.isAfter){
   //     System.debug('inside isAfter****');
   //     OpportunityTriggerHandler.createRelatedOpportunity(trigger.new);    }
   //     
       
}