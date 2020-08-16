# AUTO GENERATED FILE - DO NOT EDIT

''Orchestration functional no update <- function(id=NULL, notes=NULL, target=NULL, instruments=NULL) {
    
    props <- list(id=id, notes=notes, target=target, instruments=instruments)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Orchestration functional no update',
        namespace = 'score_component',
        propNames = c('id', 'notes', 'target', 'instruments'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
