//grasp all data from the input form
let notesTemplate = Handlebars.compile(`
    {{#each notes}}
    <div class = "note">
        <span class="input"><textarea data-id="{{@index}}">{{this}}</textarea></span>
        <button class="remove btn btn-xs" data-id="{{@index}}"><i class="far fa-trash-alt" aria-hidden="true"></i></button>
    </div>
    {{/each}}
`);

function reloadNotes(notes) {
    $('#notes').html(notesTemplate({notes: notes}));
}

function beingSaving(target) {
    $(target).prop('disabled', true);
    $('.saving').show();
}

function endSaving(target) {
    $(target).prop('disabled', false);
    $('.saving').hide();
}

$(function() {
    $('#add').submit(function(e) {
        e.preventDefault();

        let value = $('textarea[name=note]').val();
        if(value === '') {
            return;
        }

        $('textarea[name=note]').val('');
        axios.post('/api/notes/', {
            note: value
        }).then(function(res) {
            reloadNotes(res.data);
        });
    });

    $('#notes').on('blur', 'textarea', function(evt) {
        beingSaving(evt.currentTarget);

        axios.put('/api/notes/' + $(evt.currentTarget).data('id'), {
            note: $(evt.currentTarget).val()
        }).then(function(res) {
            endSaving(evt.currentTarget);
            reloadNotes(res.data);
        }).catch(function(err){
            endSaving(evt.currentTarget);
            alert(err);
        });
    });

    $('#notes').on('click', '.remove', function(evt) {
        beingSaving(evt.currentTarget);

        axios.delete('/api/notes/' + $(evt.currentTarget).data('id')).then(function(res) {
            endSaving(evt.currentTarget);
            reloadNotes(res.data);
        }).catch(function(err) {
            endSaving(evt.currentTarget);
            alert(err);
        });
    });
});