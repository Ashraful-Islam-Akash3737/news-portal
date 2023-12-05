// in synchronous way

// const handleSearch = () => {
//     fetch ("https://openapi.programming-hero.com/api/news/categories")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }
// handleSearch();


// in asynchronous way

const handleSearch = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json();
    const news = data.data.news_category;
    console.log(news);
    categoryNews(news);

    
    

}


const handleSearchCategory = async (categoryId) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await response.json();
    const news = data.data;
    console.log(news);
}



const categoryNews = (news) => {
    const tabContainer = document.getElementById("tab-container");
    news.slice(0,3).forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick = "handleSearchCategory('${category.category_id}')" class="tab">${category.category_name}</a>
        `;
        tabContainer.appendChild(div);
    })
}




handleSearch();