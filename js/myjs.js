// Dropdown
$(document).ready(function(){
    $('.ui.left.sidebar').sidebar({
        transition: 'push'
    });
    $('.ui.left.sidebar')
        .sidebar('attach events', '.open.button');
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });
    $('.ui.rating').rating('setting', 'clearable', true);
})