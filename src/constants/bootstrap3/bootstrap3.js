// feature -> subfeature -> (any combination of these:) tags, classes, attributes
export const bootStrap3 = {
    gridsystem: {
        mediaQueries: [
            // min-width:{breakpoint}px, xs is anything less than 768px
            {bslabel: 'xs', breakpoint: 575},
            {bslabel: 'sm', breakpoint: 768},
            {bslabel: 'md', breakpoint: 992},
            {bslabel: 'lg', breakpoint: 1200},
        ],
        containers: {
            tags: ['div'],
            classes: ['container', 'container-fluid'],
        },
        row: {
            tags: ['div'],
            classes: ['row'],
        },
        columns: {
            tags: ['div'],
            // col-{mediaquery Label}-{1-12}
            // clearfix is used with responsive utiility classes
            // offsets: col-{mediaquery}-offset-{1-12}
            // may need to override offsets from lower media classes with col-*-offset-0
            // push and pull only work on md?
            classes: ['col', 'clearfix', 'offset', 'offset-0', 'col-md-push', 'col-md-pull'],
        },
    },
    typography: {
        headings: {
            // TODO: small tags within heading blocks? (not important right now)
            // , 'small'
            tags: ['H1', 'H2', 'H3',  'H4',  'H5',  'H6'],
            // apply these classes to <p> tags only, for this app (div tags? difference?)
            // maybe we don't need to add these classes for this app, expect for small
            // classes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small'],
        },
        bodycopy: {
            // font-size: 14px, line-height: 1.428 for any text within body tag
            // I think I am going to take out the text modification tags and let the Rich Text Editor deal with that
            // 'mark', 'del', 's', 'ins', 'u', 'small', 'strong', 'em', 'b', 'i'
            tags: ['p'],
            classes: ['lead', 'small'],
        },
        alignment: {
            tags: ['p'],
            classes: ['text-left', 'text-center', 'text-right', 'text-justify', 'text-nowrap'],
        },
        trasnformation: {
            tags: ['p'],
            classes: ['text-lowercase', 'text-uppercase', 'text-capitalize'],
        },
        abbrevaitions: {
            tags: ['abbr'],
            classes: ['initialism'],
            attributes: ['title'],
        },
        address: {
            tags: ['address', 'br', 'strong', 'abbr', 'a'],
        },
        blockquotes: {
            // cite tags can have title attritubes
            tags: ['blockquote', 'p', 'footer', 'cite'],
            classes: ['blockquote-reverse'],
        },
        lists: {
            tags: ['UL', 'OL', 'LI'],
            classes: ['list-unstyled', 'list-inline'],
        },
        descriptionLists: {
            tags: ['dl', 'dt', 'dd'],
            classes: ['dl-horizontal'],
        },
    },
    code: {
        inline: {
            tags: ['code'],
        },
        userInput: {
            tags: ['kbd'],
        },
        basicBlock: {
            tags: ['pre'],
            classes: ['pre-scrollable'],
        },
        variables: {
            tags: ['var'],
        },
        sampleOutput: {
            tags: ['samp'],
        }
    },
    tables: {
        // .table .table-striped (like .btn .btn-primary ) 
        tags: ['table', 'tbody'],
        classes: ['table', 'table-striped', 'table-bordered', 'table-hover', 'table-condensed']
        // can add contextual classes to row or cels [active, success, warning, danger, info]
        // <tr class="active" ... ; <td class="success" ... (or th)
        // wrap a table in a <div class="table-responsive"> to make the child table responsive
    },
    forms: {},
    buttons: {
        // bs allows <a> and input, but i'm not going to use them for grapes
        tags: ['button'],
        classes: ['btn'],
        colorClasses: ['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 
            'btn-link'],
        sizeClasses: ['btn-lg', 'btn-sm', 'btn-xs', 'btn-block', 'active', 'navbar-btn'],
        // idk if attribute will become relevant for the scope of this app
        // aria-pressed="true" with active class to force active state
        // disabled="disabled" to show disabled state (I belive this stops click event)
        attributes: ['type', 'aria-pressed', 'disabled'],
    },
    images: {},
    helperClasses: {},
    responsiveUtilities: {},
}