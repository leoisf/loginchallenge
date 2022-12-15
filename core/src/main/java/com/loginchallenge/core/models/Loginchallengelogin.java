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
 * Defines the {@code Loginchallengelogin} Sling Model used for the {@code loginchallenge/components/loginchallengelogin} component.
 * 
 */
@ConsumerType
public interface Loginchallengelogin
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("sub_title")
    String getSub_title();

    @JsonProperty("button")
    String getButton();

    String getButton_url();

    Image getImage();

}
