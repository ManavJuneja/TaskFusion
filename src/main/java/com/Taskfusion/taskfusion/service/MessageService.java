package com.Taskfusion.taskfusion.service;
import com.Taskfusion.taskfusion.modal.Message;

import java.util.List;

public interface MessageService {
    Message sendMessage(Long senderId,Long chatId, String content)throws Exception;
    List<Message> getMessageByProjectId(Long projectId)throws Exception;

}
