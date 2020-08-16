# AUTO GENERATED FILE - DO NOT EDIT

''Orchestration <- function(id=NULL, notes=NULL, target=NULL, instruments=NULL, highlights=NULL, width=NULL, height=NULL, t_score_y=NULL, b_score_y=NULL, target_color=NULL, text_space=NULL, indexing=NULL, onClick=NULL) {
    
    props <- list(id=id, notes=notes, target=target, instruments=instruments, highlights=highlights, width=width, height=height, t_score_y=t_score_y, b_score_y=b_score_y, target_color=target_color, text_space=text_space, indexing=indexing, onClick=onClick)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Orchestration',
        namespace = 'score_component',
        propNames = c('id', 'notes', 'target', 'instruments', 'highlights', 'width', 'height', 't_score_y', 'b_score_y', 'target_color', 'text_space', 'indexing', 'onClick'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
