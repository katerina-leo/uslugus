import {API_URL} from "./const";
import {getData} from "./getData";
import {createCard} from "./createCard";
import {createElement} from "./createElement";



export const renderList = async (category, url = `${API_URL}/api/service`) => {
    const serviceList = document.querySelector('.services__list');
    serviceList.textContent = '';

    const data = await getData(url);
    let services = [];
    console.log(category);
    if (category !== undefined) {
        services = data.filter(service => service.category === category);

    } else {
        services = data;
    }

    const cards = services.map(createCard);
    serviceList.append(...cards)

}