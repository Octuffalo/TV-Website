const searchNews = (event) => {
  event.preventDefault();
  const keyword = document.querySelector("#keywords").value;
  const url = "https://api.tvmaze.com/search/shows?q=" + keyword;
  const resultList = document.querySelector("#results");
  resultList.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (value) {
        console.log(value);
        const articleElement = `<div class="col-md-4">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <h5 class="card-title">${value.show.name}</h5>
                                                <img class="responsive" src="${value.show.image.medium}">
                                                <br>
                                                <a target="_blank" href="${value.show.url}" class="btn btn-primary">View Article</a>
                                            </div>
                                        </div>
                                    <div>`;
        resultList.insertAdjacentHTML("beforeend", articleElement);
      });
    });
};
