$(document).ready( () => {
    console.log('document loaded');
    $('.change-devoured').on('click', function(event){
        console.log(`click devour button`);
        var id = $(this).data('id');
        console.log(`id: ${id}`);
        var newDevoured = $(this).data('newdevoured');
        console.log(`newdevoured: ${newDevoured}`);
        newSleepState = {
            devoured: newDevoured
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newSleepState
        }).then( data => {
            console.log(`data: ${data}`);
            console.log(`changed devoured value to ${newDevoured}`);

            location.reload();
        })
    });
    $('.create-form').on('submit', event => {
        event.preventDefault();

        const newBurger = {
            name: $('#burger').val().trim(),
        };
        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then( data => {
            console.log(`data: ${data}`);
            console.log(`posted value: ${data}`);
            location.reload();
        })
    });
    $('.delete-burger').on('click', function(event) {
        console.log(`delete button clicked`);
        var id =$(this).data('id');
        $.ajax(`/api/burger/${id}`, {
            type: "DELETE"
        }).then(data => {
            console.log(`delete id: ${id}`);
            console.log(`delete data: ${data}`);
            location.reload();
        })
    })

});