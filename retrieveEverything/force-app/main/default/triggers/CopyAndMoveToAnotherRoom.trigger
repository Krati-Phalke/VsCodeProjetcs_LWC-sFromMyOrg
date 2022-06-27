trigger CopyAndMoveToAnotherRoom on Account (before insert, before update) {

    for(Account acc : trigger.new){
        System.debug('inside for loop');
        if(acc.Manage__c == 'Copy to another room'){
            System.debug('inside if condition');
            
        }
    }         
}