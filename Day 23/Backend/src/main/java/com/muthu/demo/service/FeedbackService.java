package com.muthu.demo.service;

import java.util.List;

import com.muthu.demo.dto.request.FeedbackRequest;
import com.muthu.demo.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}