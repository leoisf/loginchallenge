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
import com.loginchallenge.core.models.Loginchallengesearchpage;
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
    Loginchallengesearchpage.class,
    ComponentExporter.class
}, resourceType = "loginchallenge/components/loginchallengesearchpage")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginchallengesearchpageImpl
    implements Loginchallengesearchpage
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title_page;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String sub_title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String search_button;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image image_template;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title_page")
    public String getTitle_page() {
        return title_page;
    }

    @Override
    @JsonProperty("sub_title")
    public String getSub_title() {
        return sub_title;
    }

    @Override
    @JsonProperty("search_button")
    public String getSearch_button() {
        return search_button;
    }

    @Override
    public Image getImage_template() {
        return image_template;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
