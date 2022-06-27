public with sharing class TestGeneratorCommonController {
    
   // public List<ApexClass> apexclassList{get;set;}
      
    public TestGeneratorCommonController(){}
    
    @AuraEnabled(Cacheable=true)
    public static List<ApexClass> fetchAll(){
        List<ApexClass> resList = new List<ApexClass>();
        resList = [SELECT Id, Body, Name, IsValid, NamespacePrefix, Status FROM ApexClass WHERE NamespacePrefix = ''];
        //resList = [SELECT Name, Body, Id, IsValid, LastModifiedDate, LengthWithoutComments, NamespacePrefix, Status 
        //FROM ApexClass WHERE Name = 'AccountDataListController'];
        //String name = '';                                   //declaring a local variable for name
        //List<String> storeName = new List<String>();       // storing names of classes in List
        //for(ApexClass ac : resList){
          //  if(ac.Name != null){
                //name = ac.Name;
           //     name = ac.Name;
             //   storeName.add(name);            }    }
        //System.debug('*****************'+resList);
        return resList;
    }

    @AuraEnabled(Cacheable=true)
    public static List<ApexClass> fetchBody(String name){
      try {
        System.debug('Apex class name is *****************'+name);
        List<ApexClass> bodyList = new List<ApexClass>();
        bodyList = [SELECT Id, Body FROM ApexClass WHERE Id =: name];
        System.debug('*****************'+bodyList);
      return bodyList;
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }
    
    @AuraEnabled(Cacheable=true)
    public static List<Contact> fetchContact(){
      try {
        List<Contact> conList = [SELECT Id, Name FROM Contact];
        return conList;
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }
    //@AuraEnabled(Cacheable=true)
    //public static List<ApexClass> fetchApexClasses(){
      // List<ApexClass> classList = new List<ApexClass>();
       //classList = [SELECT Name from ApexClass limit 5];
       //listAcc = [SELECT ID, Name from Account limit 10];
       // return classList;    }
    
}