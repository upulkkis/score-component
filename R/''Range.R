# AUTO GENERATED FILE - DO NOT EDIT

''Range <- function(id=NULL, width=NULL, height=NULL, staffY=NULL, notes=NULL, clefs=NULL, colors=NULL, annotations=NULL, draw_lines=NULL) {
    
    props <- list(id=id, width=width, height=height, staffY=staffY, notes=notes, clefs=clefs, colors=colors, annotations=annotations, draw_lines=draw_lines)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Range',
        namespace = 'score_component',
        propNames = c('id', 'width', 'height', 'staffY', 'notes', 'clefs', 'colors', 'annotations', 'draw_lines'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
