import Choices from "choices.js";

export const choicesController = () => {
    const option = {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',

    };

    const selectCategory = document.querySelector('.form__select--category');
    selectCategory._choices = new Choices(selectCategory, {...option, classNames: {
            containerOuter: 'choices form__select--category'
        }});


    const selectDirection = document.querySelector('.form__select--price');
    selectDirection._choices = new Choices(selectDirection, {...option, classNames: {
            containerOuter: 'choices form__select--price'
        }});
}