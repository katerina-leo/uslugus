import './index.html';
import './index.scss';
import code from './img/code.png'
import {modalController} from "./modules/modalController";
import {selectController} from "./modules/selectController";
import {showPassword} from "./modules/showPassword";
import {choicesController} from "./modules/choicesController";
import {getCategory} from "./modules/getCategory";
import {renderList} from "./modules/renderList";
import {searchControl} from "./modules/searchControl";
// import {categoryController} from "./modules/categoryController";
import {ratingController} from "./modules/ratingController";
import {signInController, signUpController} from "./modules/sign";
import {API_URL} from "./modules/const";
import {getData} from "./modules/getData";


const init = () => {
    const eventModalSignIn = modalController({
        modal: '.modal--sign-in',
        btnOpen: '.header__auth-btn_sign-in',
        btnClose: '.modal__close'
    })

    const eventModalSignUp = modalController({
        modal: '.modal--sign-up',
        btnOpen: '.header__auth-btn_sign-up',
        btnClose: '.modal__close',
        handlerCloseModal: () => {
            const form = document.querySelector('.form--sign-up');
            form.reset();
        },
    })

    modalController({
        modal: '.modal--person',
        btnOpen: '.service',
        parentBtns: '.services__list',
        btnClose: '.modal__close',
        handlerOpenModal: async ({handler}) => {
            const data = await getData(`${API_URL}/api/service/${handler.dataset.id}`)
            console.log(data);


            const comments = document.querySelectorAll('.review__text');

            comments.forEach((comment) => {
                if (comment.scrollHeight > 38) {
                    const  button = document.createElement('button');
                    button.classList.add('review__open');
                    button.textContent = 'Развернуть';
                    comment.after(button);

                    button.addEventListener('click', () => {
                        comment.classList.toggle('review__text--open');
                        button.textContent = comment.classList.contains('review__text--open')
                            ? 'Свернуть'
                            : 'Развернуть';
                    })
                }
            })
        }
    });

    selectController({
        openBtn: '.category__title',
        openBlock: '.category__list',
        closeBtn: '.category__btn',
        handlerChange: (value) => {
            console.log(value)
        },
    });

    showPassword();

    choicesController();



    getCategory();

    renderList();

    searchControl();

    ratingController();

    signUpController(eventModalSignUp.closeModal);
    signInController(eventModalSignIn.closeModal);

    // categoryController();

};


init();