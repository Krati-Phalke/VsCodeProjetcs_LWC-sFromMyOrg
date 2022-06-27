trigger ContactTrigger on Contact (after update) {
    
    //TriggerDispatcher.run(new ContactTriggerHandler(), 'ContactTrigger');
    
    if(trigger.isAfter && trigger.isUpdate){
       
        Map<Id, Contact> conMap = new Map<Id, Contact>([SELECT Id, LastName, ReportsToId FROM Contact Where Id 
                                                       IN :trigger.new]);
        System.debug('conMap****************'+conMap);
        List<Contact> conList = new List<Contact>();
        for(Contact con:conMap.values()){
            if(con.ReportsToId != null){
                Contact contact = new Contact();
                contact.Id = con.ReportsToId;
                contact.LastName = trigger.newMap.get(con.Id).LastName;
                conList.add(contact);
            }
        }
        if(conList.size()>0){
            update conList;
            System.debug('updated****************'+conList);
        }
    }
}

    /*if(trigger.isbefore && trigger.isInsert){
        List<Contact> conList= trigger.new;
        for(Contact conObj: conList){
            if(conObj.Phone !=null && conObj.MobilePhone==null){
                conObj.MobilePhone= conObj.Phone;
            }
        }
    }*/