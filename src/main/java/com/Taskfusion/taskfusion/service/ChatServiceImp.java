package com.Taskfusion.taskfusion.service;

import com.Taskfusion.taskfusion.modal.Chat;
import com.Taskfusion.taskfusion.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImp implements ChatService{

    private ChatRepository chatRepository;
    @Override
    public Chat createChat(Chat chat) {

        return chatRepository.save(chat);
    }
}
