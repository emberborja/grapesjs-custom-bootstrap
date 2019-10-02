# Components
***

## Grid System
<div> tags given the four class variations below will produce a responseive "grid" layout
Bootstrap accomplishes this through margins and padding, which are applied through certain logical restrictions

- Container
- Container-fluid
- Row
- Columns: col - [ breakpoint ] - [ width in # of cols ]
    - breakpoints: xs, sm, md, lg
    - Number of cols in a horizontal space 1 - 12
    - Example: col-xs-12

## Typography

### Tag list that gets affected by bootstrap styling
* <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
* <small> ( within <h*> tag will change its context )
* <body> and <p>
* <mark>
* <del>
* <s>
* <ins>
* <strong>
* <em>
* <abbr title="">
* <address> lines of text ending with<br> (etc...) </address>
* <blockquote> <p>text</p>
* <footer> tag within blockquote
* <cite title=""> within footer tag for even more styling within blockquotes
* <ul> <li> ...
* <ol> <li> ....
* <dl> <dt> <dd> ....

### TYPOGRAPHY classes
* .h1, .h2, .h3, .h4, .h5, .h6
* .small (within .h* class change context too?)
* .lead ( on a <p> tag specifically?)
* .text-left, .text-center, .text-right, .text-justify, .text-nowrap (allignemnt for <p>, ...more too?)
* .text-lowercase, .text-uppercase, .text-capitalize  (transformation classes)
* .initialism (on an abbreviate tag)
* .blockquote-reverse on blockquote tags
* .list-unstyled
* .list-inline
* .dl-horizontal on description lists (<dl>)  ( auto truncate and stacking behavior )

