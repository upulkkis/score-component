# AUTO GENERATED FILE - DO NOT EDIT

''Edit <- function(id=NULL, note=NULL, dyn=NULL, scale=NULL, accidental_margin=NULL, hide_toolbar=NULL) {
    
    props <- list(id=id, note=note, dyn=dyn, scale=scale, accidental_margin=accidental_margin, hide_toolbar=hide_toolbar)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Edit',
        namespace = 'score_component',
        propNames = c('id', 'note', 'dyn', 'scale', 'accidental_margin', 'hide_toolbar'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
