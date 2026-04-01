# LibApps Customization Archive

## Overview
As part of the redesign of LibApps, we want to preserve the history of our current LibApps state. To accomplish this, we will version control all of the custom HTML templates, CSS, and JS present in each LibApp's "Look & Feel" settings.

To have a minimum impact on other parts of this repository, we are placing all of this information in a new directory named `archive`. 

Each in-scope application (LibAnswers, LibCal, and LibGuides) has a separate directory for storage of their HTML/CSS/JS. 

Directory structure:
```md
archive/
- libanswers/
  - groups
    - default
    - test
- libcal/
- libguides/
  - groups
    - d2l
    - hsl_tucson
    - hsl_tucson_old
    - main_campus_test
    - primary_sources_portal
    - special_collections
    - university_of_arizona_libraries
  - header_footer_tabs_boxes/
  - page_layout/
     - guide/
     - homepage/
     - search/
     - subject/
     - profile/
     - a_z/
```

## LibGuides

### Directory structure
Each directory within `libguides` corresponds to a top-level menu item in the "Admin > Look & Feel" settings. There is also a directory for "groups". Within the `page_layout` directory, each subsequent directory corresponds to a dropdown item from the "Page Layout" menu item (Guide, Homepage, Search, Subject, A-Z).

### HTML naming conventions
From there, each `.html` filename corresponds to a dropdown item from the "Customize Guide Templates" dropdown. Filenames are prefixed with their respective dropdown section/category. Spaces in dropdown labels have been replaced by underscores in the filename. 

Example: the "Tabs Layout > Primary Sources Portal homepage" template will be named `tabs_layout__primary_sources_portal_homepage.html`.

### CSS/JS
- CSS files are prefixed with either `group` or `global`; `global` corresponds to system-level "global" styles.
- Custom CSS/JS is stored as an HTML file due to the abilty of being able to add script, link, and style tags all in one text area.
- CSS audit filesname include an `_audit` suffix.





