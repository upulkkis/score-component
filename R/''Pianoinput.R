# AUTO GENERATED FILE - DO NOT EDIT

''Pianoinput <- function(id=NULL, note=NULL, scale=NULL, keywidth=NULL) {
    
    props <- list(id=id, note=note, scale=scale, keywidth=keywidth)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Pianoinput',
        namespace = 'score_component',
        propNames = c('id', 'note', 'scale', 'keywidth'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
