$('#btn').on('click', function () {

    grabIp();

});

function grabIp() {

    var user = $('#userProfile').val();

    var request = $.ajax({
        url: 'https://api.github.com/search/users',
        method: 'GET',
        data: {
            q: user
        }
    });

    request.done(function (response) {

        $('#userP').html('');
        response.items.forEach(function (element) {
            let imgUser = $('<img>').attr('src', element.avatar_url)     
            let userIp = $('<a>').attr('href', element.html_url);          
            $(userIp).append(imgUser);
            $('#userP').append(userIp);  
            imgUser.css({
                width: "100px",
                margin: "15px",
            });
        }, this);
    });

}
