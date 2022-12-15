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
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Loginchallengehomefooter} Sling Model used for the {@code loginchallenge/components/loginchallengehomefooter} component.
 * 
 */
@ConsumerType
public interface Loginchallengehomefooter
    extends ComponentExporter
{


    @JsonProperty("section_msg")
    String getSection_msg();

    @JsonProperty("aplication_refresh")
    String getAplication_refresh();

    String getSearch_button_url();

    @JsonProperty("search_button")
    String getSearch_button();

    String getLogout_button_url();

    @JsonProperty("logout_button")
    String getLogout_button();

}
