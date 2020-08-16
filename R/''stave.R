# AUTO GENERATED FILE - DO NOT EDIT

''Stave <- function(id=NULL, notes=NULL, clef=NULL, width=NULL, height=NULL, scale=NULL, padding=NULL) {
    
    props <- list(id=id, notes=notes, clef=clef, width=width, height=height, scale=scale, padding=padding)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Stave',
        namespace = 'score_component',
        propNames = c('id', 'notes', 'clef', 'width', 'height', 'scale', 'padding'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
