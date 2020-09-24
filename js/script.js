

function createWidget() {

    function createElement(tagName, className) {
        const element = document.createElement(tagName);
        element.classList = className;
        return element;
    }

    //content
    // let body = document.getElementsByClassName('body');
    let body = document.querySelector('.body');
    console.log(body);
    const contentDiv = createElement('div', 'content');
    body.append(contentDiv);

    // header
    const header = createElement('header', 'header');
    contentDiv.prepend(header);

    //city
    const cityDiv = createElement('div', 'city');
    header.prepend(cityDiv);

    //city > h1
    const h1City = createElement('h1', 'city_name');
    cityDiv.prepend(h1City);

    //temperature
    const tempDiv = createElement('div', 'temperature');
    header.append(tempDiv);

    //main
    const main = createElement('main', 'main');
    contentDiv.append(main);

    //features
    const featuresDiv = createElement('div', 'features');
    main.prepend(featuresDiv); 

    //features > h1
    const h1Features = createElement('h1', 'day_name');
    h1Features.innerHTML = getCurrentDay();
    featuresDiv.prepend(h1Features);

    //features > ul
    const ulFeatures = createElement('ul', 'features_list');
    featuresDiv.append(ulFeatures);

    //liFeatures
    for (let i = 0; i < 4; i++) {
        let liFeatures = createElement('li', 'features_item');
        ulFeatures.prepend(liFeatures);
    }
    
    //weather div
    const weatherDiv = createElement('div', 'weather_picture');
    main.append(weatherDiv);    

    //weather > img
    const weatherImg = createElement('img', 'weather_img');
    weatherDiv.prepend(weatherImg);

    //footer
    const footer = createElement('footer', 'footer');
    contentDiv.append(footer);

    //footer > div
    for (let i = 0; i < 4; i++) {
        const footerDiv = createElement('div', 'footer_img');
        footer.prepend(footerDiv);
    }

    function load() {
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=49.58&lon=36.15&
        exclude=hourly,daily&appid=b2448927f000760c0e17e90310c9b95c`;

        fetch(url)
            .then(function(response) {
                return response.json();
                // console.log(response);
            })
            .then(function(data) {
                console.log('Data json - ', data);
                // h1City.innerHTML = data.timezone;
                h1City.innerHTML = data.current.clouds;
                
                // for (let key in data) {
                //     if (key == 'timezone') {
                //         h1City.innerHTML = data[key];
                //     }
                //     console.log('Key - ', key);
                // }

                // let htmlArray = html.map(function(item) {
                //     return `<li>` + item.clouds + ' ' + item.humidity + '% ' + ' ' + item.wind_speed + `</>`;
                // });
                // console.log(htmlArray.join(' '));   
            })
    }

    load();

    function getCurrentDay() {
        let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let nowDate = new Date();
        let nowDay = days[nowDate.getDay()];

        console.log('Today', nowDay);
        return nowDay;    
    }
}

createWidget();