trigger AccountTrigger_2 on Account (before insert, after insert, before update, after update, before delete, after delete, after unDelete) {

    TriggerDispatcher.run(new AccountTriggerHandler_2(), 'AccountTrigger_2');
}