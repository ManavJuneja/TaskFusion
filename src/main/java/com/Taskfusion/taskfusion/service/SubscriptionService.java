package com.Taskfusion.taskfusion.service;

import com.Taskfusion.taskfusion.modal.PlanType;
import com.Taskfusion.taskfusion.modal.Subscription;
import com.Taskfusion.taskfusion.modal.User;

public interface SubscriptionService  {

    Subscription createdSubscription(User user);

    Subscription getUserSubscription(Long userId)throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
