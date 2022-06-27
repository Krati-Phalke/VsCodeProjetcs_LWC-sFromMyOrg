trigger TeacherTrigger on Teacher__c (before insert) {

    if(Trigger.isBefore && Trigger.isInsert){
        List<Teacher__c> teachList = Trigger.new;
        Set<id> schoolSet= new Set<id>();
        for(Teacher__c teachObj: teachList){
            if(teachObj.Phone_Number__c ==null && teachObj.School__c != null){
                schoolSet.add(teachObj.School__c);
            }
        }
        Map<id, School__c> schoolMap= new Map<id, School__c>([Select id, Phone_Number__c from School__c where id=:schoolSet]);
        
        for(Teacher__c teachObj: teachList){
            if(teachObj.Phone_Number__c ==null && teachObj.School__c != null){
                School__c schoolObj= schoolMap.get(teachObj.School__c);
                teachObj.Phone_Number__c = schoolObj.Phone_Number__c;
            }
        }
    }
}