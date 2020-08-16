# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Orchestration(Component):
    """An Orchestration component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- notes (list; optional): A label that will be printed when this component is rendered.
- target (list; optional)
- instruments (list; optional)
- highlights (list; optional)
- width (number; default 200)
- height (number; default 400)
- t_score_y (number; default 110)
- b_score_y (number; default 200)
- target_color (string; default 'red')
- text_space (number; default 120)
- indexing (boolean; default True)
- onClick (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, notes=Component.UNDEFINED, target=Component.UNDEFINED, instruments=Component.UNDEFINED, highlights=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, t_score_y=Component.UNDEFINED, b_score_y=Component.UNDEFINED, target_color=Component.UNDEFINED, text_space=Component.UNDEFINED, indexing=Component.UNDEFINED, onClick=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'notes', 'target', 'instruments', 'highlights', 'width', 'height', 't_score_y', 'b_score_y', 'target_color', 'text_space', 'indexing', 'onClick']
        self._type = 'Orchestration'
        self._namespace = 'score_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'notes', 'target', 'instruments', 'highlights', 'width', 'height', 't_score_y', 'b_score_y', 'target_color', 'text_space', 'indexing', 'onClick']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Orchestration, self).__init__(**args)
