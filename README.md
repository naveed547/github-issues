A simplified version of Github’s Issues page by integrating with Git Hub APIs.

Technologies/tools used:
-React 
-Redux-SASS 
-Webpack
-Use Git Hub APIs (https://developer.github.com/v3/)

To run project

git clone https://github.com/naveed547/github-issues.git

npm install

npm start



Components
----------

**src/ui-components/NXGAccordion/NXGAccordion.jsx**

### 1. NXGAccordion




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|node|yes||
defaultExpanded|bool|no|false|
expanded|bool|no|false|
key|string|no|&lt;See the source code&gt;|
id|string|no|&lt;See the source code&gt;|
onExpand|func|no|&lt;See the source code&gt;|
panelExpandClass|string|no|&lt;See the source code&gt;|
panelRootClass|string|no|&lt;See the source code&gt;|
headerLeftContent|union|no|&lt;See the source code&gt;|
headerRightContent|union|no|&lt;See the source code&gt;|
title|string|yes||
variant|enum|no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGButton/NXGButton.jsx**

### 1. NXGButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
buttonType|string|yes||
className|arrayOf|no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGButtonDropDown/NXGButtonDropDown.jsx**

### 1. NXGButtonDropDown




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
imgLeft|node|yes||
text|string|yes||
disabled|bool|no|false|
theme|enum|no|&lt;See the source code&gt;|
children|custom|no||
-----
**src/ui-components/NXGCheckbox/NXGCheckbox.jsx**

### 1. NXGCheckbox




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
checkType|string|yes||
-----
**src/ui-components/NXGDropdown/NXGDropdown.jsx**

### 1. NXGDropDown




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|&lt;See the source code&gt;|
items|arrayOf|yes||
color|bool|no|false|
disabled|bool|no|false|
error|bool|no|false|
label|node|no|&lt;See the source code&gt;|
variant|enum|no|&lt;See the source code&gt;|
dropdownitemtemplate|func|no|null|
selectLabel|string|yes||
toolTip|node|no|null|
-----
**src/ui-components/NXGFilterButton/NXGFilterButton.jsx**

### 1. NXGFilterButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no|&lt;See the source code&gt;|
text|string|no|&lt;See the source code&gt;|
type|string|no|&lt;See the source code&gt;|
filterInfo||no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGFooter/NXGFooter.jsx**

### 1. Footer




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
message|arrayOf|no|&lt;See the source code&gt;|
fullWidth|bool|no|true|
-----
**src/ui-components/NXGInput/NXGInput.jsx**

### 1. NXGInput




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no|&lt;See the source code&gt;|
label|string|no|&lt;See the source code&gt;|
className|string|yes||
type|string|yes||
infomsg|string|no|&lt;See the source code&gt;|
themetype|string|no|&lt;See the source code&gt;|
textarea|bool|no|false|
onBlur|func|no|null|
onFocus|func|no|null|
clear|bool|no|false|
handleClear|func|no|undefined|
handleChange|func|yes||
handleSearch|func|no|undefined|
toolTip|node|no|null|
-----
**src/ui-components/NXGModal/NXGModal.jsx**

### 1. Modal




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
modalType|string|no|&lt;See the source code&gt;|
modalTitle|string|yes||
children|custom|no||
footer|custom|no||
open|bool|yes||
onClose|func|no|null|
-----
**src/ui-components/NXGOTPInput/NXGOTPInput.jsx**

### 1. NXGOTPInput




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
handleChange|func|yes||
onBlur|func|no|null|
error|bool|no|false|
onEnterKey|func|yes||
-----
**src/ui-components/NXGPagination/NXGPagination.jsx**

### 1. NXGPagination




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
count|number|yes||
onChangePage|func|yes||
rowsPerPage|number|no|10|
-----
**src/ui-components/NXGPaper/NXGPaper.jsx**

### 1. NXGPaper




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
type|enum|no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGPopover/NXGPopover.jsx**

### 1. NXGPopover




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onClose|func|yes||
anchorEl|objectOf|no|null|
open|bool|yes||
children|custom|no||
-----
**src/ui-components/NXGPopper/NXGPopper.jsx**

### 1. NXGPopover




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
anchorEl|objectOf|no|null|
open|bool|yes||
popperPlacement|enum|no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGRadioButton/NXGRadioButton.jsx**

### 1. NXGRadioButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
radioType|string|yes||
-----
**src/ui-components/NXGSearchField/NXGSearchField.jsx**

### 1. NXGSearchField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
disabled|bool|no|false|
id|string|no|&lt;See the source code&gt;|
label|string|yes||
placeholder|string|yes||
popperPlacement|enum|no|&lt;See the source code&gt;|
popperStyle|union|no|&lt;See the source code&gt;|
value|string|no|null|
name|string|no|&lt;See the source code&gt;|
suggestions|arrayOf|no|null|
handleChange|func|no|null|
onClearSelection|func|no|null|
children|node|no|null|
-----
**src/ui-components/NXGStepper/NXGStepper.jsx**

### 1. NXGStepper




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
activeStep|number|yes||
steps|arrayOf|yes||
-----
**src/ui-components/NXGTabs/NXGTabs.jsx**

### 1. NXGTabs




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|&lt;See the source code&gt;|
highlighted|number|no|0|
id|string|yes||
onSelectTab|func|yes||
tabs|arrayOf|yes||
variant|enum|no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGTooltip/NXGTooltip.jsx**

### 1. NXGTooltip




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
content|union|yes||
light|bool|no|false|
children|node|no|null|
element|node|no|&lt;See the source code&gt;|
placement|enum|yes||
color|enum|no|&lt;See the source code&gt;|
-----
**src/ui-components/NXGTypography/NXGTypography.jsx**

### 1. NXGTypography




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
type|string|yes||
link|bool|no|false|
color|string|no|&lt;See the source code&gt;|
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
