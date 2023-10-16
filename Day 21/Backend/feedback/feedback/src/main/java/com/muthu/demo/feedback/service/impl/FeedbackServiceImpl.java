package com.muthu.demo.feedback.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.muthu.demo.feedback.dto.request.FeedbackRequest;
import com.muthu.demo.feedback.dto.response.FeedbackResponse;
import com.muthu.demo.feedback.model.Feedback;
import com.muthu.demo.feedback.repository.FeedbackRepository;
import com.muthu.demo.feedback.service.FeedbackService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Override
    public boolean saveFeedback(FeedbackRequest request) {
        if (feedbackRepository.findByNameAndEmail(request.getName(),
                request.getEmail()).isPresent()) {
            return false;
        }

        var feedback = Feedback.builder()
                .name(request.getName())
                .email(request.getEmail())
                .comment(request.getComment())
                
                .build();
        feedbackRepository.save(feedback);
        return true;
    }

    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setName(feedback.getName());
                    response.setEmail(feedback.getEmail());
                    response.setComment(feedback.getComment());
                    return response;
                })
                .collect(Collectors.toList());
    }
}
