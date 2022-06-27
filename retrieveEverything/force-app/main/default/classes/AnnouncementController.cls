public with sharing class AnnouncementController {
    public AnnouncementController() {
    }

    @AuraEnabled
    public static List<Announcement__c> fetchAnnouncement(){
        List<Announcement__c> ann = new List<Announcement__c>();
        try {
             ann = [SELECT Id, Name, URL_Link__c, Created_Date__c, Description__c FROM Announcement__c 
                    ORDER BY Created_Date__c Limit 2];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return ann;
    }
}
