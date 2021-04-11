const search = function(e) {
    const term = e.target.value;

    $('.r-group').addClass('hidden');
    $('#recipes .item-name:icontains(' + term + ')').closest('.r-group').removeClass('hidden');
}

const iconSearch = function() {
    const selected = $('.icons-selected .a:not(.wildcard)');
    $('.a.found').removeClass('found');

    if (selected.length > 0) {
        $('.recipe').addClass('hidden');
        $('.r-group').addClass('hidden');

        selected.each(function(index) {
            $('.recipe').find('.a.' + $(this)[0].classList[1] + ':not(.found):first').addClass('found');
        });

        $('.recipe').each(function(index) {
            if ($(this).find('.a.found').length == selected.length) {
                $(this).removeClass('hidden');
                $(this).closest('.r-group').removeClass('hidden');
            }
        });
    } else {
        $('.recipe.hidden').removeClass('hidden');
        $('.r-group.hidden').removeClass('hidden');
    }
}

const addIconToSearch = function(e) {
    const id = $(this).attr('id');
    const wildcard = $('.icons-selected .a.wildcard');

    if (wildcard.length > 0) {
        wildcard.first().removeClass('wildcard').addClass(id);
    }

    iconSearch();
}

const removeIconToSearch = function(e) {
    $(this).removeClass().addClass('a wildcard');

    iconSearch();
}

const clearIconToSearch = function(e) {
    $('.icons-selected .a:not(.wildcard)').removeClass().addClass('a wildcard');

    iconSearch();
}

window.onload = function() {
    $('#search').on('input', search);
    $('.icons-container .a').on('click', addIconToSearch);
    $('.icons-selected .a').on('click', removeIconToSearch);
    $('.icons-selected .clear-selection').on('click', clearIconToSearch);
}