# LibApps Customization Archive

## Overview
As part of the redesign of LibApps, we want to preserve the history of our current LibApps state. To accomplish this, we will version control all of the custom HTML templates, CSS, and JS present in the LibApps "Look & Feel" section.

To have a minimum impact on other parts of this repository, we are placing all of this information in a new directory named `archive`. 

Each in-scope application (LibAnswers, LibCal, and LibGuides) has a corresponding directory for storage of their HTML/CSS/JS.

Directory structure:
```md
archive/
- libcal/
- libchat/
- libguides/
  - header_footer_tabs_boxes/
  - custom_js_css/
  - page_layout/
     - guide/
     - homepage/
     - search/
     - subject/
     - profile/
     - a_z/
```

## LibGuides
Each directory within `libguides` corresponds to a top-level menu item in the Admin > Look & Feel settings. Within the `page_layout` directory, each subsequent directory corresponds to a dropdown item from the "Page Layout" menu item (Guide, Homepage, Search, Sunject, A-Z).

### HTML naming conventions
From there, each `.html` filename corresponds to a dropdown item from the "Customize Guide Templates" dropdown. Filenames are prefixed with their respective dropdown section/category. Spaces in dropdown labels have been replaced by underscores in the filename.

For example: the "Tabs Layout > Primary Sources Portal homepage" template will be named `tabs_layout__primary_sources_portal_homepage.html`.

### Custom CSS/JS
The custom CSS/JS is stored as an HTML file due to the abilty of being able to add script, link, and style tags all in one text area.

This is located in `/archive/libguides/custom_js_css`.V





