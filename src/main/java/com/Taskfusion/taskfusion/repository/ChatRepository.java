package com.Taskfusion.taskfusion.repository;

import com.Taskfusion.taskfusion.modal.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat,Long> {
}
