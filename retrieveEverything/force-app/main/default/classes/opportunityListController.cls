public class opportunityListController {
 
    @AuraEnabled
public static List<Opportunity> getOppList()
{
List<Opportunity> oppList = new List<Opportunity>([Select Id, Name, OrderNumber__c, StageName from Opportunity limit 15]);
return oppList;
}
}