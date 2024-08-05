public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name, Email, Phone FROM Contact LIMIT 10];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContacts(String searchKey) {
        // Query Contacts based on the search term
        String searchPattern = '%' + searchKey + '%';
        return [SELECT Id, FirstName, LastName, Email FROM Contact 
                WHERE FirstName LIKE :searchPattern 
                OR LastName LIKE :searchPattern 
                OR Email LIKE :searchPattern];
    }
}
