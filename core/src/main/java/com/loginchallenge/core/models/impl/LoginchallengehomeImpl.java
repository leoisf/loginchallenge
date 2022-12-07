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

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.loginchallenge.core.models.Loginchallengehome;
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
    Loginchallengehome.class,
    ComponentExporter.class
}, resourceType = "loginchallenge/components/loginchallengehome")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginchallengehomeImpl
    implements Loginchallengehome
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text4;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image image;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("text1")
    public String getText1() {
        return text1;
    }

    @Override
    @JsonProperty("text2")
    public String getText2() {
        return text2;
    }

    @Override
    @JsonProperty("text3")
    public String getText3() {
        return text3;
    }

    @Override
    @JsonProperty("text4")
    public String getText4() {
        return text4;
    }

    @Override
    public Image getImage() {
        return image;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
