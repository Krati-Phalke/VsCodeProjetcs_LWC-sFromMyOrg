trigger OpportunityTrigger on Opportunity (after insert, after update)
{
    //Map<String, List<String>> mapSt = new Map<String, List<String>>();    
        Set<Id> accountId = new Set<Id>();
        for(Opportunity opp: trigger.new){
        accountId.add(opp.AccountId);
        }
       
    //Set<Account> accSet = new Set<Account>();
    
    Map<Id, Account> mapAcc= new Map<Id, Account>();
    
    //Child to parent query fetch parent feild using .  
    //List<Account> Opplist1 = new List<Opportunity>();
    //List<Opportunity> oppList = [SELECT Id, AccountId, StageName FROM Opportunity WHERE AccountId IN:accountId];
    List<Account> accList = new List<Account>();
    for(Account acc: [select id,name,type from Account where id in: accountId])
    {
    for(Opportunity opp: Trigger.New){
        if(opp.StageName == 'Closed Won' || opp.StageName == 'Closed Lost'){
            //opp.Account.Type = 'Customer';
            //accList.add(opp.Account);
            acc.type='Customer';
        }
        else{
            opp.Account.Type = 'Prospect';
            
        }
        accList.add(acc);
            }
        
    //put all the values from the list to map. 
   /* mapAcc.putall(accList);
    if(mapAcc.size()>0){
    update mapAcc.values(); */
        Update accList;
    }
  } 
    
   //TriggerDispatcher.run(new OpportunityTriggerHandler(), 'OpportunityTrigger');
   
    /*if(trigger.isbefore && trigger.isInsert){
    System.debug('inside opportunity Trigger');
        List<Opportunity> oppList = new List<Opportunity>();
        List<Lead> leadList = new List<Lead>();
        for(Lead l: leadList){
            if(l.Required_Loan__c == true){
            Opportunity opp= new Opportunity();
            opp.Id = l.Id;
            opp.Name = l.Name + l.Company;
            //opp.AccountId = l.Company;
            oppList.add(opp);
            }
        }
        insert oppList;
    }
    if(trigger.isbefore && trigger.isInsert){
        List<Opportunity> oppList= trigger.new;
        for(Opportunity oppObj: oppList){
            if(oppObj.Type !=null && oppObj.Description ==null){
                oppObj.Description = oppObj.Type;
            }
        }
    }
    if(trigger.isbefore && trigger.isupdate){
        List<Opportunity> oppList= Trigger.new;
        Map<id, Opportunity> oppOldMap= trigger.oldMap;
        for(Opportunity oppObj: oppList){
            Opportunity oppOldObj = oppOldmap.get(oppObj.id);
            if(oppObj.Amount != oppOldObj.Amount){
                oppObj.Description= string.valueOf(oppOldObj.Amount);
            }*/