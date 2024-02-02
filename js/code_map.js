
function CodeMap(confObj) {
    var publicStaticObject = {};

    if(typeof confObj == 'undefined') {
        return publicStaticObject;
    }

    var privateObject = {
        buildLayout: function() {
            this.createButtonNew();
        },

        createButtonNew: function() {
            var tthis = this;
            $('.buttons.button-new').append('<button type="button" class="btn btn-secondary action action-new">New</button>');
            $('.buttons.button-new button.action.action-new').bind('click', function() {
                let tr = tthis.createNewTableRow();
                tthis.createButtonDelete(tr);
                tthis.createButtonSwitch(tr);
            });
        },

        createButtonSwitch: function(row) {
            var tthis = this;
            $(row).find('.buttons.button-switch').html('');
            $(row).find('.buttons.button-switch').append('<button type="button" class="btn btn-warning action action-switch">&#60;&#61;&#62;</button>');
            $(row).find('.buttons.button-switch button.action.action-switch').bind('click', function() {
                let code = $(row).find('input[name_org="value_code[__index__]"]').val(),
                    ascii = $(row).find('input[name_org="value_ascii[__index__]"]').val();
                $(row).find('input[name_org="value_code[__index__]"]').val(ascii);
                $(row).find('input[name_org="value_ascii[__index__]"]').val(code);
            });
        },

        createButtonDelete: function(row) {
            var tthis = this;
            $(row).find('.buttons.button-delete').append('<button type="button" class="btn btn-secondary action action-delete">Del</button>');
            $(row).find('.buttons.button-delete button.action.action-delete').bind('click', function() {
                $(this).closest('tr').remove();
                tthis.renumerateTableIndexes('tbody');
            });
        },

        renumerateTableIndexes: function(t) {
            var index = 1;

            $('table.code-map '+t+' tr').each(function() {
                $(this).find('th.index').html(index);
                $(this).find('input[name_org="value_code[__index__]"]').attr('name',
                    $(this).find('input[name_org="value_code[__index__]"]').attr('name_org').replace('__index__', index)
                );
                $(this).find('input[name_org="value_ascii[__index__]"]').attr('name',
                    $(this).find('input[name_org="value_ascii[__index__]"]').attr('name_org').replace('__index__', index)
                );

                index++;
            });
        },

        createNewTableRow: function() {
            let tr = document.createElement('tr');
            tr.innerHTML = '<th scope="row" class="index"></th>' +
                '<td><input type="text" name_org="value_code[__index__]" name="value_code[__index__]" class="text-centered" placeholder="prosze uzupełnić" /></td>' +
                '<td class="buttons button-switch">&#60;&#61;&#62;</td>' +
                '<td><input type="text" name_org="value_ascii[__index__]" name="value_ascii[__index__]" class="text-centered" placeholder="prosze uzupełnić" /></td>' +
                '<td class="buttons button-delete"></td>';

            $('table.code-map tbody').append(tr);
            this.renumerateTableIndexes('tbody');

            return tr;
        }
    };

    var publicDynamicObject = {
        run: function () {
            privateObject.buildLayout();

            if(('charsMap' in confObj) && (Object.prototype.toString.call(confObj.charsMap) === '[object Object]')) {
                for(code in confObj.charsMap) {
                    this.addCharsPairToMap(code, confObj.charsMap[code]);
                }
            }
        },

        addCharsPairToMap: function(code, ascii) {
            let tr = privateObject.createNewTableRow();
            privateObject.createButtonDelete(tr);
            privateObject.createButtonSwitch(tr);

            $(tr).find('input[name_org="value_code[__index__]"]').val(code);
            $(tr).find('input[name_org="value_ascii[__index__]"]').val(ascii);
        }
    };

    return $.extend(publicStaticObject, publicDynamicObject);
}
