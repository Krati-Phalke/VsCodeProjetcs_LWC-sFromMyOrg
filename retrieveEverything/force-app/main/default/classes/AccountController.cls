public with sharing class AccountController {
    public AccountController() {
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        List<Account> accList = new List<Account>();
        try {
            accList = [SELECT Id,Name,Type,Phone FROM Account limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return accList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountsWithID(){
        List<Account> accList = new List<Account>();
        try {
            accList= [select id, Name, (Select Id, Name From Opportunities) from Account];
            //Integer n = Limits.getDmlRows();
           // integer  count= database.countQuery(accList);
           System.debug('5.Number of rows queried in this apex code so far: ' + Limits.getDmlRows());
           // accList = [SELECT Id,Name,Type,Phone FROM Account limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return accList;
    }
}