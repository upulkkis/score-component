# AUTO GENERATED FILE - DO NOT EDIT

''Masking <- function(id=NULL, masking_notevalues=NULL, masking_notesizes=NULL, masking_colors=NULL, target_notevalues=NULL, target_notesizes=NULL, target_colors=NULL) {
    
    props <- list(id=id, masking_notevalues=masking_notevalues, masking_notesizes=masking_notesizes, masking_colors=masking_colors, target_notevalues=target_notevalues, target_notesizes=target_notesizes, target_colors=target_colors)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Masking',
        namespace = 'score_component',
        propNames = c('id', 'masking_notevalues', 'masking_notesizes', 'masking_colors', 'target_notevalues', 'target_notesizes', 'target_colors'),
        package = 'scoreComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
