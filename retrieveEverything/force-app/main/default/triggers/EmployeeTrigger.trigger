trigger EmployeeTrigger on Employee__c (before insert, before update, after insert) {

    if(Trigger.isBefore){
        if(Trigger.isInsert){
            System.debug('inside before Insert');
            List<Employee__c> empList = Trigger.new;
            for(Employee__c emp: empList){
                System.debug('inside for loop');
                if(emp.Leave_Type__c == null){
                    emp.addError('please select leave type');
                    System.debug('before insert completed');
                }
                if(emp.Leave_Type__c == 'Paid Leave'){
                    emp.Comments__c = 'updated';
                }
            }
        }
        if(Trigger.isUpdate){
            System.debug('inside before update');
            List<Employee__c> empList = Trigger.new;
            for(Employee__c emp:empList){
            Date startDate= emp.From_Date__c;
            Date endDate= emp.To_Date__c;   
            Integer noOfDays = startDate.daysBetween(endDate);
                if(noOfDays >= 10){
                    emp.addError('you cant apply for more than 10 days');
                    System.debug('before update completed');
                }
         }
        }
    }
    /*if(Trigger.isAfter){
        if(Trigger.isInsert){
            System.debug('inside After insert');
            List<Employee__c> empList = Trigger.new;
            List<Contact> conList = new List<Contact>();
            for(Employee__c emp: empList){
                Contact contact = new Contact();
                    contact.Employee__c = emp.Id;
                    contact.LastName = emp.Name;
                    contact.Phone = emp.Phone_Number__c;
                    conList.add(contact);
                    System.debug('inside for loop');
            }
            insert conList;
        }
    }*/
}