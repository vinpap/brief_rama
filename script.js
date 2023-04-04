class Glace {
    constructor(name, description, image) {
        this._name = name;
        this._description = description;
        this._image = image
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    updateGlaceHTML() {
        document.querySelector('.glace_name').textContent = this._name;
        document.querySelector('.glace_description').textContent = this._description;
        document.querySelector('.glace_image').src = this._image;
    }
}

glaces = [
    glace_chocolat = new Glace(
        "Chocolat",
        "Savourez chaque bouchée de notre glace artisanale au chocolat, faite avec les ingrédients les plus fins et les plus savoureux. Laissez-vous transporter par sa texture crémeuse et onctueuse qui fond en bouche. Une expérience glacée inoubliable pour les amateurs de chocolat.",
        "chocolat.png"
    ),

    glace_vanille = new Glace(
        "Vanille",
        "Dégustez notre glace artisanale à la vanille, créée à partir de gousses de vanille de qualité supérieure pour une saveur riche et veloutée. Laissez-vous transporter par la douceur de sa texture crémeuse et onctueuse qui fond en bouche. Une expérience glacée délicieusement classique pour les amateurs de vanille.",
        "vanille.png"
    ),

    glace_fraise = new Glace(
        "Fraise",
        "Savourez notre glace artisanale à la fraise, préparée avec des fraises fraîches et juteuses pour une saveur fruitée et acidulée. Laissez-vous emporter par la douceur de sa texture crémeuse et onctueuse qui fond en bouche. Une expérience glacée irrésistiblement fruitée pour les amateurs de fraise.",
        "fraise.png"
    )
]


glaces[0].updateGlaceHTML();


let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % glaces.length;
    glaces[currentIndex].update();
}, 5000);

document.getElementById('toggleContactBtn').addEventListener('click', function () {
    const contactSection = document.querySelector('.contact');
    contactSection.style.display = (contactSection.style.display === 'block') ? 'none' : 'block';
});