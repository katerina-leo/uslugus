import {postData} from "./postData";
import {API_URL} from "./const";

export const commentFormController = (formReview, callback) => {
    formReview.addEventListener('submit', (e) => {
        e.preventDefault();
        callback(e);

        const formData = new FormData(formReview);
        console.log(formData);
        const data = Object.fromEntries(formData);
        postData(`${API_URL}/api/service/comment/${formReview.dataset.id}`, data);


    })
};