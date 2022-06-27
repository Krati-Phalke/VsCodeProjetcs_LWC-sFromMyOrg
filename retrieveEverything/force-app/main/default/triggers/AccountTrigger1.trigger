trigger AccountTrigger1 on Account (before insert, before update) {

    if(trigger.isbefore && trigger.isupdate){
        List<Account> accList= Trigger.new;
        Map<id,Account> accOldmap=trigger.oldmap;
        Set<id> accIdSet=new Set<Id>();
        for(Account accObj:accList){
            Account accOldObj=  accOldmap.get(accObj.id);
            if(accObj.Rating !=accOldObj.Rating && accObj.Rating =='Hot' ){
                accIdSet.add(accObj.id);
            }
        }
    List<Opportunity> oppList=[Select id,accountid from Opportunity where accountid =:accIdSet and  StageName != 'Closed Won' and StageName != 'Closed Lost' ];
        Set<id> accIdSetResult=new Set<Id>();
        for(Opportunity oppObj:oppList){
            accIdSetResult.add(oppObj.accountid);
        }
       
      for(Account accObj:accList){
            Account accOldObj=  accOldmap.get(accObj.id);
            if(accObj.Rating !=accOldObj.Rating && accObj.Rating =='Hot'  && !accIdSetResult.Contains(accObj.id) ){
            accObj.addError('There should be atlease one Open Opportunity to update the account Rating to Hot');
            }
          }
    }
}