# AUTO GENERATED FILE - DO NOT EDIT

''Pianoroll <- function(id=NULL, width=NULL, height=NULL, stave_spacing=NULL, scale=NULL, bar_offset=NULL, onHover=NULL, onClick=NULL, stave_list=NULL) {
    
    props <- list(id=id, width=width, height=height, stave_spacing=stave_spacing, scale=scale, bar_offset=bar_offset, onHover=onHover, onClick=onClick, stave_list=stave_list)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Pianoroll',
        namespace = 'score_component',
        propNames = c('id', 'width', 'height', 'stave_spacing', 'scale', 'bar_offset', 'onHover', 'onClick', 'stave_list'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
