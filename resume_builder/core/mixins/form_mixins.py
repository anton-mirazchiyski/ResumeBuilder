class FormFieldAttributesMixin:
    COMMON_FORM_FIELD_CLASS = 'general-resume-form-input'
    COMMON_FORM_FIELD_SIZE = '28'
    COMMON_FORM_LARGE_FIELD_CLASS = 'general-resume-larger-form-input' # for textareas

    def set_attributes_to_all_fields(self, fields: list):
        for field in fields:
            field.widget.attrs['class'] = self.COMMON_FORM_FIELD_CLASS
            field.widget.attrs['size'] = self.COMMON_FORM_FIELD_SIZE

    def set_specific_class_names(self, fields: list, class_names: dict):
        for field_name, field in fields:
            specific_class_name = class_names.get(field_name, None)
            if specific_class_name is not None:
                field.widget.attrs['class'] += specific_class_name
    
    def set_placeholders(self, fields: list, placeholders: dict):
        for field_name, field in fields:
            if field_name in placeholders:
                field.widget.attrs['placeholder'] = placeholders[field_name]

    def set_attributes_to_larger_fields(self, fields: list):
        for field in fields:
            field.widget.attrs['class'] += ' ' + self.COMMON_FORM_LARGE_FIELD_CLASS
