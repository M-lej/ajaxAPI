const key = "ba7862dd";

(function (){
  jQuery(init);

  function init() {
    var inputField = $('#title-input');
    var yearField = $('#year-input');
    var yearButton = $('#year-button');

    yearButton.click(handleYearButton);

      function handleYearButton() {
        var title = inputField.val();
        var year = yearField.val();
        console.log(year);
          fetch('http://www.omdbapi.com/?s='+title+'&y='+year+'&apikey=ba7862dd')
          .then(response => response.json())
          .then(data => renderMovies(data));
        }

    function renderMovies(response) {
      console.log(response);
      
      var movieList = $('#movieList');
      movieList.empty();
      for(var m in response.Search) {
        var movie = response.Search[m];
        var li = $('<li class="list-group-item">');
        var li2 = $('<li class="list-group-genre">');
    
        var img = $('<img src="'+movie.Poster+'" width="150px">');
        li.append(img);
        li.append(movie.Title);
        li2.append(movie.Year);
        movieList.append(li);
        movieList.append(li2);
      }
      }
    }
}
)();