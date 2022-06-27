trigger LeadTrigger on Lead (before insert, after insert, after update, before delete, after delete, after unDelete) {
    
    System.debug('*****inside Trigger');
        List<Opportunity> oppList = new List<Opportunity>();
        List<Lead> leadList = trigger.new;
        for(Lead l: leadList){
            System.debug('inside for loop');
            if(l.Required_Loan__c == true){
            System.debug('lead*******' +l);
            Opportunity opp= new Opportunity();
            opp.AccountId = '0015g00000He3bhAAB';
            opp.OwnerId = '0055g000004A2akAAC';
            opp.Name = 'ONE';
            opp.CloseDate = Date.today();
            opp.StageName = 'Prospecting';
            //opp.AccountId = l.Company;
            System.debug('inside if condition');
            oppList.add(opp);
         }
        }
        System.debug('oppList***'+oppList);
        System.debug('opplist size****' +OppList.size());
        insert oppList;
    }

    /*System.debug('inside opportunity Handler');
        List<Opportunity> oppList= new List<Opportunity>();
    Address address= new Address();
   //     Opportunity opp= new Opportuntiy();
        Set<Id> idLead = new Set<Id>();
   // for(Opportunity opp: oppList){}     
    
    List<Lead> leadList = [SELECT Id, Address from Lead WHERE Id =: idLead];
    
    for(Lead l: leadList){
        if(l.IsConverted == True && l.Address != null){
            //Opportunity opp= new Opportunity();
     //       opp.address = l.Address;
        }
    }*/