```
/*
 * Sample CSS to add Superfish CSS to themes.
 *
 * Instructions:
 *
 * 1. Change the #YOUR-BLOCK-ID (below) to the ID of your Superfish block.
 *
 * 2. Add the CSS to your theme, either as a separate CSS file or as a part of
 *    the main CSS file.
 *
 * 3. Note that by removing the .sf-style-none, the style will be applied to
 *    the menu regardless of the "Style" selected in the Superfish block
 *    configuration.
 *
 */

#YOUR-BLOCK-ID .sf-style-none {
  float: left;
  margin: 0;
  padding: 0;
}
#YOUR-BLOCK-ID .sf-style-none.sf-navbar {
  width: 100%;
}
#YOUR-BLOCK-ID .sf-style-none ul {
  padding-left: 0;
}
#YOUR-BLOCK-ID .sf-style-none a,
#YOUR-BLOCK-ID .sf-style-none span.nolink {
  color: #0000ff;
  padding: 0.75em 1em;
}
#YOUR-BLOCK-ID .sf-style-none a.sf-with-ul,
#YOUR-BLOCK-ID .sf-style-none span.nolink.sf-with-ul {
  padding-right: 2.25em;
}
#YOUR-BLOCK-ID .sf-style-none.rtl a.sf-with-ul,
#YOUR-BLOCK-ID .sf-style-none.rtl span.nolink.sf-with-ul {
  padding-left: 2.25em;
  padding-right: 1em;
}
#YOUR-BLOCK-ID .sf-style-none span.sf-description {
  color: #0000ff;
  display: block;
  font-size: 0.833em;
  line-height: 1.5;
  margin: 5px 0 0 5px;
  padding: 0;
}
#YOUR-BLOCK-ID .sf-style-none.rtl span.sf-description {
  margin: 5px 5px 0 0;
}
#YOUR-BLOCK-ID .sf-style-none li,
#YOUR-BLOCK-ID .sf-style-none.sf-navbar {
  background: #f0f0f0;
}
#YOUR-BLOCK-ID .sf-style-none li li {
  background: #e0e0e0;
}
#YOUR-BLOCK-ID .sf-style-none li li li {
  background: #d0d0d0;
}
#YOUR-BLOCK-ID .sf-style-none li:hover,
#YOUR-BLOCK-ID .sf-style-none li.sfHover,
#YOUR-BLOCK-ID .sf-style-none a:focus,
#YOUR-BLOCK-ID .sf-style-none a:hover,
#YOUR-BLOCK-ID .sf-style-none a:active,
#YOUR-BLOCK-ID .sf-style-none span.nolink:hover {
  background: #c0c0c0;
  outline: 0;
}
#YOUR-BLOCK-ID .sf-style-none li:hover > ul,
#YOUR-BLOCK-ID .sf-style-none li.sfHover > ul {
  top: 40px;
}
#YOUR-BLOCK-ID .sf-sub-indicator:after {
  content: "\25BC";
}
#YOUR-BLOCK-ID ul .sf-sub-indicator:after,
#YOUR-BLOCK-ID .sf-vertical .sf-sub-indicator:after {
  content: "\25BA";
}
#YOUR-BLOCK-ID .sf-navbar ul .sf-sub-indicator:after,
#YOUR-BLOCK-ID .sf-accordion .sf-sub-indicator:after,
#YOUR-BLOCK-ID .sf-accordion.sf-accordion-with-buttons .sf-accordion-button:after {
  content: "\25BC";
}
#YOUR-BLOCK-ID .sf-navbar ul ul .sf-sub-indicator:after {
  content: "\25BA";
}
#YOUR-BLOCK-ID .sf-accordion.sf-accordion-with-buttons li.sf-expanded > .sf-accordion-button:after {
  content: "\25B2";
}
#YOUR-BLOCK-ID .sf-horizontal.rtl ul .sf-sub-indicator:after,
#YOUR-BLOCK-ID .sf-vertical.rtl .sf-sub-indicator:after,
#YOUR-BLOCK-ID .sf-navbar.rtl ul ul .sf-sub-indicator:after {
  content: "\25C4";
}
#YOUR-BLOCK-ID div.sf-accordion-toggle.sf-style-none a {
  background: #f0f0f0;
  color: #0000ff;
  padding: 1em;
}
#YOUR-BLOCK-ID div.sf-accordion-toggle.sf-style-none a.sf-expanded,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li.sf-expanded {
  background: #c0c0c0;
}
#YOUR-BLOCK-ID div.sf-accordion-toggle.sf-style-none a.sf-expanded,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li.sf-expanded > a,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li.sf-expanded > span.nolink {
  font-weight: bold;
}
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li a.sf-accordion-button {
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 499;
}
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li a,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li span.nolink {
  padding-left: 2em;
}
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li li a,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li li span.nolink {
  padding-left: 3em;
}
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li li li a,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li li li span.nolink {
  padding-left: 4em;
}
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li li li li a,
#YOUR-BLOCK-ID .sf-style-none.sf-accordion li li li li li span.nolink {
  padding-left: 5em;
}
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li a,
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li span.nolink {
  padding-left: auto;
  padding-right: 2em;
}
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li li a,
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li li span.nolink {
  padding-left: auto;
  padding-right: 3em;
}
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li li li a,
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li li li span.nolink {
  padding-left: auto;
  padding-right: 4em;
}
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li li li li a,
#YOUR-BLOCK-ID .sf-style-none.rtl.sf-accordion li li li li li span.nolink {
  padding-left: auto;
  padding-right: 5em;
}
#YOUR-BLOCK-ID .sf-style-none li.sf-multicolumn-wrapper ol,
#YOUR-BLOCK-ID .sf-style-none li.sf-multicolumn-wrapper ol li {
  margin: 0;
  padding: 0;
}
#YOUR-BLOCK-ID .sf-style-none li.sf-multicolumn-wrapper a.menuparent,
#YOUR-BLOCK-ID .sf-style-none li.sf-multicolumn-wrapper span.nolink.menuparent {
  font-weight: bold;
}
#YOUR-BLOCK-ID .sf-style-none li.sf-multicolumn-wrapper {
  background: #c0c0c0;
}
#YOUR-BLOCK-ID .sf-style-none li.sf-multicolumn-wrapper li {
  background: transparent;
}
```
