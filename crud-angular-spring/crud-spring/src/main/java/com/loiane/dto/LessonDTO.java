package com.loiane.dto;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record LessonDTO(
                Long id,
                @NotNull @NotBlank @Length(min = 5, max = 100) String name,
                @NotNull @NotBlank @Length(min = 10, max = 11) String youtubeUrl) {

}
