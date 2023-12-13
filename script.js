//Tableau//
const collection = [
    {
        name: "The Batman",
        creator: "Bob Kane et Bill Finger",
        firstAppar: "en mai 1939.",
        ability: "Compétences martiales avancées/Ingéniosité et intelligence /Maîtrise des gadgets et technologies/Endurance et force physique/Maîtrise de la dissimulation et de l'investigation/Leadership/Volonté inébranlable",
        picture: "asset/dc/batman.jpg",
        description: "Bruce Wayne, le justicier masqué de Gotham City, armé de gadgets high-tech, lutte sans relâche contre le crime.",
    },

    {
        name: "Superman",
        creator: "Jerry Siegel  et  Joe Shuster ",
        firstAppar: "en 1938",
        ability: "Force surhumaine/Vitesse surhumaine /Vol /Invulnérabilité/Vision thermique/Vision rayons X /Super ouïe et vision accrue/Souffle arctique ",
        picture: "asset/dc/superman.jpg",
        description: "Clark Kent, l'alien doté de pouvoirs surhumains, incarne l'espoir et la force, protégeant l'humanité des injustices.",
    },

    {
        name: "The Flash",
        creator: "Gardner Fox et Harry Lampert",
        firstAppar: "en 1940",
        ability: "Vitesse surhumaine/Reflexes surhumains/Résistance accrue/Manipulation de la vitesse temporelle",
        picture: "asset/dc/flash.jpg",
        description: "Barry Allen, super-héros à la vitesse extraordinaire, protège Central City et incarne le courage au sein de la Justice League."
    },

    {
        name: "Green Arrow",
        creator: "Mort Weisinger et George Papp",
        firstAppar: "en 1941",
        ability: "Maître archer/Expert en combat à mains nues/Stratégie et tactiques avancées/Précision et agilité",
        picture: "asset/dc/arrow.jpg",
        description: "Oliver Queen, justicier urbain expert en archerie, défend Star City contre les injustices et protège ses citoyens."
    },

    {
        name: "Aquaman",
        creator: "Paul Norris et Mort Weisinger",
        firstAppar: "en 1941",
        ability: "Respiration sous-marine/Force surhumaine/Vitesse surhumaine/Contrôle des créatures marines/Télépathie marine",
        picture: "asset/dc/aquaman.jpg",
        description: "Arthur Curry, roi de l'Atlantide aux pouvoirs marins, protège les océans avec une force redoutable et un leadership inégalé."
    },

    {
        name: "Spider-Man",
        creator: "Stan Lee et Steve Ditko",
        firstAppar: "en 1962",
        ability: "Force et agilité surhumaines/Adhérence aux parois/Lanceurs de toiles/Percetion accrue/Sens d'araignée",
        picture: "asset/marvel/spiderman.jpg",
        description: "Peter Parker, étudiant doté de pouvoirs d'araignée, combat le crime à New York avec courage et responsabilité."
    },

    {
        name: "Iron Man",
        creator: "Stan Lee, Larry Lieber, Don Heck, et Jack Kirby",
        firstAppar: "en 1963",
        ability: "Armure technologique avancée/Ingéniosité et intelligence supérieure/Force surhumaine (avec armure)/Vol (avec armure)/Répulseurs énergétiques",
        picture: "asset/marvel/ironman.jpg",
        description: "Tony Stark, génie milliardaire et créateur de l'armure Iron Man, combat le mal avec une technologie avancée et un sens du devoir inébranlable."
    },

    {
        name: "Hulk",
        creator: "Stan Lee et Jack Kirby",
        firstAppar: "en 1962",
        ability: "Force surhumaine/Résistance invincible/Regénération accélérée/Incommensurable colère",
        picture: "asset/marvel/hulk.jpg",
        description: "Bruce Banner, exposé à des rayons gamma, devient Hulk, un géant vert colérique luttant contre le mal tout en cherchant la paix intérieure."
    },

    {
        name: "Thor",
        creator: "Stan Lee, Larry Lieber, et Jack Kirby",
        firstAppar: "en 1962",
        ability: "Force surhumaine/Résistance invincible/Longévité accrue/Contrôle du Mjolnir (marteau magique)/Contrôle des éléments",
        picture: "asset/marvel/thor.jpg",
        description: "Thor, dieu nordique doté d'une force incroyable et du contrôle des éléments, défend Asgard et la Terre avec honneur et courage."
    },

    {
        name: "Captain America",
        creator: "Joe Simon et Jack Kirby",
        firstAppar: "en 1941",
        ability: "Force, agilité et endurance surhumaines/Maître du combat au bouclier/Stratégie et tactiques avancées",
        picture: "asset/marvel/captainamerica.jpg",
        description: "Steve Rogers, super-soldat équipé d'un bouclier indestructible, incarne les valeurs de la liberté et de la justice en combattant les ennemis de l'Amérique."
    },

];

// Sélectionne l'élément <main> dans le document HTML et le stocke dans la variable 'card'
const card = document.querySelector("main");

// Pour chaque élément de la collection 'collection', exécute le code suivant
collection.forEach((index) => {
    // Crée un élément <article> pour chaque élément de la collection
    let article = document.createElement('article');

    // Crée un élément <p> pour contenir la description du super-héros
    let description = document.createElement('p');
    description.textContent = index.description;

    // Crée un élément <section> pour afficher l'image du super-héros en arrière-plan
    let picture = document.createElement('section');
    picture.style.backgroundImage = `url(${index.picture})`;

    // Crée un élément <h2> pour le titre (nom) du super-héros
    let title = document.createElement('h2');
    title.textContent = index.name;

    // Crée un élément <h3> pour afficher le créateur du super-héros
    let creator = document.createElement('h3');
    creator.textContent = `Creator: ${index.creator}`;

    // Crée un élément <h4> pour afficher la première apparition du super-héros
    let firstAppearance = document.createElement('h4');
    firstAppearance.textContent = `First Appearance: ${index.firstAppar}`;

    // Crée un élément <h5> pour afficher les capacités du super-héros
    let ability = document.createElement('h5');
    ability.textContent = `Abilities: ${index.ability}`;

    // Ajoute les éléments créés à l'intérieur de l'élément <article> dans l'ordre souhaité
    card.appendChild(article);
    article.appendChild(title);
    article.appendChild(picture);
    article.appendChild(firstAppearance);
    article.appendChild(ability);
    article.appendChild(creator);
    article.appendChild(description);
});


