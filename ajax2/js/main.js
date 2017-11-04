var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"
});


request.done(msg => {
    console.log(msg);
    msg.forEach(function (element) {
        let $htmlDiv = $(`
            <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="" alt="${element.name}">
                <div class="card-body">
                    <h4 class="card-title">${element.name}</h4>
                    <a href="#" class="btn btn-primary" data-show-id="${element.id}">Movie info</a>
                </div>
            </div>`
        );

        console.log(element);
        if(element.image !== null){
            $htmlDiv.find('img').attr('src', element.image.medium);
        }else{
            $htmlDiv.find('img').attr('src'," http://via.placeholder.com/300x400");
            
        }

        $('.row').append($htmlDiv);
    });
});

$(document).on('click', 'a', function () {
    let movieId = $(this).attr('data-show-id');
    console.log(movieId);
    localStorage.setItem('movieId', movieId);

});