/*
 * ***********************************************************************
 * Login Challenge CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Login Challenge.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Login Challenge and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Login Challenge
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Login Challenge.
 * ***********************************************************************
 */

package com.loginchallenge.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Loginchallengehome} Sling Model used for the {@code loginchallenge/components/loginchallengehome} component.
 * 
 */
@ConsumerType
public interface Loginchallengehome
    extends ComponentExporter
{


    @JsonProperty("text1")
    String getText1();

    @JsonProperty("text2")
    String getText2();

    @JsonProperty("text3")
    String getText3();

    @JsonProperty("text4")
    String getText4();

    Image getImage();

}
