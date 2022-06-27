public with sharing class LeadSearchController {

    @AuraEnabled(cacheable=true)
    public static List<Lead> searchLeadsFxn(String searchKey){
        List<Lead> leads = new List<Lead>(); //search input from user
        String key = '%' + searchKey + '%';
        try{
            leads = [SELECT Id, FirstName, LastName, MobilePhone, Email FROM Lead WHERE MobilePhone LIKE : key OR Email LIKE: key];
        }
        catch(Exception e){
            throw new AuraHandledException('No Record Found..');
        }
        return leads;
    } 
}