export const ratingController = (stars, ratingInput) => {



    stars.addEventListener('click', ({target, currentTarget}) => {
        const star = target.closest('.rating__star');

        if(star) {
            currentTarget.dataset.stars = star.dataset.rating;
            ratingInput.valueOf = star.dataset.rating;
        }
    })
}