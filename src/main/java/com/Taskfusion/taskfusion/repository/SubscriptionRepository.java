package com.Taskfusion.taskfusion.repository;

import com.Taskfusion.taskfusion.modal.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription,Long> {
    Subscription findByUserId(Long userId);
}
