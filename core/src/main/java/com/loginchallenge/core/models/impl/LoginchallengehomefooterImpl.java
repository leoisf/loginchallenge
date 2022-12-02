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

package com.loginchallenge.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.loginchallenge.core.models.Loginchallengehomefooter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Loginchallengehomefooter.class,
    ComponentExporter.class
}, resourceType = "loginchallenge/components/loginchallengehomefooter")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginchallengehomefooterImpl
    implements Loginchallengehomefooter
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String section_msg;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String aplication_refresh;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String search_button;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logout_button;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("section_msg")
    public String getSection_msg() {
        return section_msg;
    }

    @Override
    @JsonProperty("aplication_refresh")
    public String getAplication_refresh() {
        return aplication_refresh;
    }

    @Override
    @JsonProperty("search_button")
    public String getSearch_button() {
        return search_button;
    }

    @Override
    @JsonProperty("logout_button")
    public String getLogout_button() {
        return logout_button;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
