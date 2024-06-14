package com.Taskfusion.taskfusion.service;

import com.Taskfusion.taskfusion.modal.Comment;
import jdk.jshell.spi.ExecutionControl;

import java.util.List;

public interface CommentService {
    Comment createComment(Long issueId,Long userId,String comment)throws Exception;

    void deleteComment(Long commentId,Long userId)throws Exception;

    List<Comment> findCommentByIssueId(Long issueId);
}
