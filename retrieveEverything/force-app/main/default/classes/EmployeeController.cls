public with sharing class EmployeeController {
    public EmployeeController() {
    }

    @AuraEnabled
    public static List<Employee__c> fetchEmployee(String key){

        String givename = '%' +key+ '%' ;
        List<Employee__c> empList = new List<Employee__c>(); 
        try {

            empList = [SELECT Id,Name,Phone_Number__c,Leave_Status__c FROM Employee__c WHERE Name LIKE :givename]; 
            System.debug('emplist ***********************'+empList);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return empList;
    }

    /* Date: 28 March 22 Author Name: Krati Phalke
    Controller SignUp Component : which will insert new Employee/User for Registration*/
    @AuraEnabled
    public static Employee__c insertEmployee(Employee__c emp){
    
            if(emp!= null){
                System.debug('inside if condition of insertEmployee method*******');
                insert emp;
    }
    return emp;
}
}