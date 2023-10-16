package com.muthu.demo.feedback.service;

import java.util.List;

import com.muthu.demo.feedback.dto.request.FeedbackRequest;
import com.muthu.demo.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}
