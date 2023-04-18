package com.retail.apigateway.common;

import com.retail.apigateway.exception.AccessDeniedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity handleAccessDeniedException(AccessDeniedException e){
        APIResponse apiResponse = new APIResponse();
        apiResponse.setStatus(HttpStatus.UNAUTHORIZED.value());


        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }
}
