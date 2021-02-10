fetch('https://dhiyo-api-article.herokuapp.com/articles')
        .then(Response => Response.json())
        .then(json => json.data.map(element => {
            console.log(element.tittle);
        }))