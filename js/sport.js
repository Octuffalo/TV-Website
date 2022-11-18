const resultList = document.querySelector('#results');
const url = 'https://content.guardianapis.com/search?q=sport&api-key=';
const apiKey = 'a59a883f-36dc-449a-85bc-2d45a95ed3ca'
fetch(url + apiKey)
.then((response) => response.json())
.then((data) => {
    data.response.results.forEach(function (value) {
        console.log(value);
        const articleElement = `<div class="col-md-4">
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <h5 class="card-title">${value.webTitle}</h5>
                                            <p class="card-text">${value.sectionName}</p>
                                            <a target="_blank" href="${value.webUrl}" class="btn btn-primary">View Article</a>
                                                </div>
                                            </div>

                                </div>`;
        resultList.insertAdjacentHTML('beforeend', articleElement);
    });
});