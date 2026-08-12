let character = {
    gender: null,
    name: null,
    race: null,
    age: null,
    height: null,
    background: null,
    personality: null,
    strength: null,
    speed: null,
    durability: null,
    iq: null,
    fightingSkill: null,
    weapons: null,
};
const races = {

    Human: {
        description: "Adaptable and ambitious beings capable of surviving in almost any environment.",
        minAge: 16,
        maxAge: 100,
        minHeight: 1.5,
        maxHeight: 2.1,
        strength: 100,
        speed: 100,
        durability: 100,
        intelligence: 100,
        abilities: ["Adaptability", "Rapid Learning"],
        weaknesses: ["Short Lifespan"]
    },

    Elf: {
        description: "Ancient beings known for their grace, intelligence and connection to nature.",
        minAge: 18,
        maxAge: 1200,
        minHeight: 1.6,
        maxHeight: 2.4,
        strength: 150,
        speed: 250,
        durability: 130,
        intelligence: 300,
        abilities: ["Enhanced Senses", "Nature Affinity", "Long Lifespan"],
        weaknesses: ["Physically Fragile"]
    },

    Dwarf: {
        description: "Hardy underground warriors renowned for their endurance and craftsmanship.",
        minAge: 18,
        maxAge: 350,
        minHeight: 1.0,
        maxHeight: 1.6,
        strength: 300,
        speed: 80,
        durability: 400,
        intelligence: 180,
        abilities: ["Exceptional Endurance", "Master Craftsmanship"],
        weaknesses: ["Low Speed"]
    },

    Orc: {
        description: "Powerful warriors with immense physical strength and a natural instinct for combat.",
        minAge: 16,
        maxAge: 150,
        minHeight: 1.7,
        maxHeight: 2.6,
        strength: 500,
        speed: 150,
        durability: 450,
        intelligence: 80,
        abilities: ["Battle Rage", "Enhanced Strength"],
        weaknesses: ["Impulsive"]
    },

    Vampire: {
        description: "Immortal predators possessing supernatural speed, strength and regenerative abilities.",
        minAge: 18,
        maxAge: 3000,
        minHeight: 1.5,
        maxHeight: 2.2,
        strength: 600,
        speed: 700,
        durability: 500,
        intelligence: 400,
        abilities: ["Regeneration", "Night Vision", "Supernatural Speed"],
        weaknesses: ["Sunlight", "Holy Weapons"]
    },

    Werewolf: {
        description: "Cursed shapeshifters whose physical abilities increase dramatically when transformed.",
        minAge: 15,
        maxAge: 200,
        minHeight: 1.6,
        maxHeight: 2.5,
        strength: 800,
        speed: 600,
        durability: 700,
        intelligence: 120,
        abilities: ["Regeneration", "Enhanced Senses", "Transformation"],
        weaknesses: ["Silver"]
    },

    Angel: {
        description: "Celestial beings possessing supernatural abilities and immense spiritual power.",
        minAge: 100,
        maxAge: 10000,
        minHeight: 1.7,
        maxHeight: 3.0,
        strength: 2000,
        speed: 1800,
        durability: 2000,
        intelligence: 1000,
        abilities: ["Flight", "Holy Energy", "Regeneration"],
        weaknesses: ["Dark Magic"]
    },

    Demon: {
        description: "Supernatural entities originating from dark realms and possessing destructive powers.",
        minAge: 50,
        maxAge: 20000,
        minHeight: 1.5,
        maxHeight: 4.0,
        strength: 2500,
        speed: 1500,
        durability: 2200,
        intelligence: 800,
        abilities: ["Dark Energy", "Regeneration", "Possession"],
        weaknesses: ["Holy Energy"]
    },

    Dragon: {
        description: "Ancient creatures of immense power possessing incredible physical strength and elemental abilities.",
        minAge: 50,
        maxAge: 50000,
        minHeight: 3.0,
        maxHeight: 30.0,
        strength: 5000,
        speed: 1800,
        durability: 6000,
        intelligence: 1500,
        abilities: ["Flight", "Fire Breath", "Regeneration", "Elemental Control"],
        weaknesses: ["Divine Weapons"]
    },

    Android: {
        description: "Artificial beings constructed with advanced technology and enhanced physical capabilities.",
        minAge: 1,
        maxAge: 10000,
        minHeight: 1.4,
        maxHeight: 2.5,
        strength: 1200,
        speed: 1300,
        durability: 2000,
        intelligence: 1800,
        abilities: ["Machine Processing", "Self Repair"],
        weaknesses: ["EMP", "System Hacking"]
    },

    Alien: {
        description: "Extraterrestrial beings whose abilities vary depending on their species and evolution.",
        minAge: 1,
        maxAge: 2000,
        minHeight: 0.5,
        maxHeight: 2.2,
        strength: 700,
        speed: 800,
        durability: 600,
        intelligence: 1200,
        abilities: ["Adaptive Biology", "Advanced Senses"],
        weaknesses: ["Unknown"]
    },

    Titan: {
        description: "Colossal beings capable of overwhelming civilizations through raw physical power.",
        minAge: 100,
        maxAge: 100000,
        minHeight: 10.0,
        maxHeight: 100.0,
        strength: 10000,
        speed: 500,
        durability: 12000,
        intelligence: 500,
        abilities: ["Massive Strength", "Extreme Durability", "Shockwave"],
        weaknesses: ["Slow Movement"]
    }

};

const genderButtons = document.querySelectorAll(".gender-btn");
const continueButton = document.getElementById("continue-btn");

// Gender selection
genderButtons.forEach(button => {
    button.addEventListener("click", () => {
        genderButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
        character.gender = button.dataset.gender;

        continueButton.disabled = false;
        console.log("Character:", character);
    });
});

// Continue button → Name screen
continueButton.addEventListener("click", () => {
    showNameScreen();
});

// Show name screen
function showNameScreen() {
    document.getElementById("identity-screen").innerHTML = `
        <section id="name-screen">
            <h2>What is your name?</h2>
            <div class="roulette">
                <div id="name-display">READY</div>
            </div>
            <button id="spin-name">SPIN</button>
        </section>
    `;

    document.getElementById("spin-name").addEventListener("click", spinName);
}

// Spin name roulette
function spinName() {
    let names;

    if (character.gender === "male") {
        names = [
            "Kael","Zane","Orion","Draven","Dante",
            "Kairo","Vex","Leon","Aiden","Ronan"
        ];
    } else if (character.gender === "female") {
        names = [
            "Aria","Nyx","Astra","Lyra","Elara",
            "Seraphina","Nova","Raven","Luna","Freya"
        ];
    } else {
        names = [
            "Alex","Riley","Avery","River","Sky",
            "Phoenix","Sage","Rowan","Kai","Ash"
        ];
    }

    const display = document.getElementById("name-display");
    const spinButton = document.getElementById("spin-name");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 25;

    const interval = setInterval(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        display.textContent = randomName;
        spins++;

        if (spins >= totalSpins) {
            clearInterval(interval);

            const finalName = names[Math.floor(Math.random() * names.length)];
            display.textContent = finalName;
            character.name = finalName;

            console.log("Final character:", character);

            setTimeout(() => {
                showRaceScreen();
            }, 1000);
        }
    }, 80);
}

function showRaceScreen() {

    document.getElementById("name-screen").innerHTML = `

        <section id="race-screen">

            <h2>What is your race?</h2>

            <div class="roulette">

                <div id="race-display">
                    READY
                </div>

            </div>

            <button id="spin-race">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-race")
        .addEventListener("click", spinRace);
}
function spinRace() {

    const raceNames = Object.keys(races);

    const display = document.getElementById("race-display");
    const spinButton = document.getElementById("spin-race");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 30;

    const interval = setInterval(() => {

        const randomRace =
            raceNames[Math.floor(Math.random() * raceNames.length)];

        display.textContent = randomRace;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalRace =
                raceNames[Math.floor(Math.random() * raceNames.length)];

            display.textContent = finalRace;

            character.race = finalRace;

            console.log("Race selected:", character);

            setTimeout(() => {
                showRaceCard();
            }, 800);
        }

    }, 80);
}
const backgrounds = {

    "Noble Blood": {
        description: "Born into wealth, influence, and a powerful family.",
        wealth: 80,
        influence: 80,
        survival: 30,
        combat: 30,
        knowledge: 70
    },

    "Village Survivor": {
        description: "Raised in a humble village where survival depended on hard work.",
        wealth: 20,
        influence: 10,
        survival: 70,
        combat: 30,
        knowledge: 40
    },

    "Street Born": {
        description: "Raised among the streets, learning to survive through instinct and cunning.",
        wealth: 10,
        influence: 20,
        survival: 90,
        combat: 60,
        knowledge: 50
    },

    "Military Child": {
        description: "Raised around soldiers and trained from an early age.",
        wealth: 40,
        influence: 50,
        survival: 70,
        combat: 80,
        knowledge: 60
    },

    "Wandering Nomad": {
        description: "Spent a lifetime traveling between distant lands and civilizations.",
        wealth: 30,
        influence: 30,
        survival: 80,
        combat: 50,
        knowledge: 70
    },

    "Royal Heir": {
        description: "Born into royalty and destined to inherit a throne.",
        wealth: 100,
        influence: 100,
        survival: 30,
        combat: 40,
        knowledge: 80
    },

    "Exiled Prince": {
        description: "Once destined for greatness, until betrayal forced you into exile.",
        wealth: 40,
        influence: 60,
        survival: 80,
        combat: 70,
        knowledge: 70
    },

    "Forgotten Experiment": {
        description: "Created or altered by an unknown experiment whose purpose remains a mystery.",
        wealth: 10,
        influence: 10,
        survival: 90,
        combat: 80,
        knowledge: 80
    },

    "Ancient Guardian": {
        description: "Entrusted with protecting something ancient and powerful.",
        wealth: 30,
        influence: 70,
        survival: 90,
        combat: 90,
        knowledge: 100
    },

    "Unknown Origin": {
        description: "Your earliest memories are missing. Nobody knows where you came from.",
        wealth: 20,
        influence: 20,
        survival: 60,
        combat: 50,
        knowledge: 90
    }

};
const personalities = {

    "Brave": {
        description: "Fear rarely stops you. You face danger head-on.",
        courage: 90,
        intelligence: 50,
        diplomacy: 50,
        aggression: 70,
        curiosity: 60
    },

    "Cautious": {
        description: "You analyze danger carefully before taking action.",
        courage: 50,
        intelligence: 80,
        diplomacy: 60,
        aggression: 20,
        curiosity: 50
    },

    "Ruthless": {
        description: "You will do whatever is necessary to achieve your objective.",
        courage: 80,
        intelligence: 60,
        diplomacy: 20,
        aggression: 100,
        curiosity: 40
    },

    "Charismatic": {
        description: "People naturally gravitate toward you.",
        courage: 60,
        intelligence: 70,
        diplomacy: 100,
        aggression: 30,
        curiosity: 70
    },

    "Genius": {
        description: "Your mind processes information far beyond the ordinary.",
        courage: 50,
        intelligence: 100,
        diplomacy: 60,
        aggression: 20,
        curiosity: 100
    },

    "Curious": {
        description: "The unknown is almost impossible for you to ignore.",
        courage: 60,
        intelligence: 80,
        diplomacy: 50,
        aggression: 30,
        curiosity: 100
    },

    "Cowardly": {
        description: "Survival comes before everything else.",
        courage: 15,
        intelligence: 60,
        diplomacy: 70,
        aggression: 10,
        curiosity: 30
    },

    "Calm": {
        description: "Even in chaos, you maintain extraordinary composure.",
        courage: 70,
        intelligence: 80,
        diplomacy: 80,
        aggression: 20,
        curiosity: 50
    },

    "Reckless": {
        description: "You act first and worry about consequences later.",
        courage: 100,
        intelligence: 30,
        diplomacy: 20,
        aggression: 90,
        curiosity: 80
    },

    "Mysterious": {
        description: "Nobody can ever be completely certain what you're thinking.",
        courage: 70,
        intelligence: 80,
        diplomacy: 70,
        aggression: 40,
        curiosity: 90
    }

};
const strengthLevels = {

    "Weak": {
        power: 10,
        description: "Below the physical capabilities of an average human."
    },

    "Average": {
        power: 100,
        description: "Normal human physical strength."
    },

    "Strong": {
        power: 250,
        description: "Considerably stronger than an ordinary human."
    },

    "Superhuman": {
        power: 1000,
        description: "Possesses strength far beyond normal biological limits."
    },

    "Building": {
        power: 10000,
        description: "Capable of destroying or heavily damaging structures."
    },

    "City": {
        power: 100000,
        description: "Possesses enough raw power to threaten an entire city."
    },

    "Mountain": {
        power: 1000000,
        description: "Capable of devastating massive geological structures."
    },

    "Island": {
        power: 10000000,
        description: "Possesses enough strength to devastate an island."
    },

    "Country": {
        power: 100000000,
        description: "Capable of threatening an entire nation."
    },

    "Planetary": {
        power: 1000000000,
        description: "Possesses enough raw power to threaten a planet."
    },

    "Star": {
        power: 100000000000,
        description: "Possesses astronomical levels of destructive power."
    },

    "Solar System": {
        power: 10000000000000,
        description: "Power capable of affecting an entire solar system."
    },

    "Galactic": {
        power: 1000000000000000,
        description: "Power operating on a galactic scale."
    },

    "Universal": {
        power: 100000000000000000,
        description: "Power capable of affecting the fabric of an entire universe."
    },

    "Godlike": {
        power: 1000000000000000000,
        description: "Power approaching the highest supernatural levels."
    }

};
const speedLevels = {

    "Immobile": {
        speed: 0,
        description: "Barely capable of movement."
    },

    "Slow": {
        speed: 5,
        description: "Significantly slower than an average human."
    },

    "Walking": {
        speed: 10,
        description: "Normal walking speed."
    },

    "Running": {
        speed: 25,
        description: "Normal human running speed."
    },

    "Athletic": {
        speed: 40,
        description: "Exceptional biological running speed."
    },

    "Superhuman": {
        speed: 100,
        description: "Far beyond normal biological limits."
    },

    "Supersonic": {
        speed: 343,
        description: "Capable of exceeding the speed of sound."
    },

    "Hypersonic": {
        speed: 1700,
        description: "Capable of traveling several times faster than sound."
    },

    "Sonic": {
        speed: 343,
        description: "Movement approaching or exceeding Mach 1."
    },

    "Lightning": {
        speed: 300000,
        description: "Movement approaching the speed of lightning."
    },

    "Relativistic": {
        speed: 250000000,
        description: "Movement approaching the speed of light."
    },

    "Light Speed": {
        speed: 299792458,
        description: "Moves at approximately the speed of light."
    },

    "FTL": {
        speed: 1000000000,
        description: "Faster than light."
    },

    "Massively FTL": {
        speed: 1000000000000,
        description: "Traveling vastly beyond light speed."
    }

};
const durabilityLevels = {

    "Fragile": {
        durability: 10,
        description: "Extremely vulnerable to physical damage."
    },

    "Normal": {
        durability: 100,
        description: "Normal human resistance to injury."
    },

    "Tough": {
        durability: 250,
        description: "Can withstand considerably more punishment than an ordinary human."
    },

    "Enhanced": {
        durability: 1000,
        description: "Possesses resistance far beyond normal biological limits."
    },

    "Superhuman": {
        durability: 10000,
        description: "Can survive impacts that would instantly kill an ordinary human."
    },

    "Building": {
        durability: 100000,
        description: "Can withstand destructive forces capable of demolishing structures."
    },

    "City": {
        durability: 1000000,
        description: "Can survive attacks capable of devastating a city."
    },

    "Mountain": {
        durability: 10000000,
        description: "Can withstand enormous geological-scale forces."
    },

    "Island": {
        durability: 100000000,
        description: "Can survive devastation on an island-wide scale."
    },

    "Country": {
        durability: 1000000000,
        description: "Can survive attacks capable of destroying an entire nation."
    },

    "Planetary": {
        durability: 10000000000,
        description: "Can withstand planet-threatening levels of destruction."
    },

    "Star": {
        durability: 1000000000000,
        description: "Can survive astronomical levels of energy."
    },

    "Universal": {
        durability: 1000000000000000,
        description: "Possesses durability operating on a universal scale."
    },

    "Godlike": {
        durability: 100000000000000000,
        description: "Extremely difficult to damage through conventional means."
    }

};
const iqLevels = {

    "Below Average": {
        iq: 70,
        description: "Struggles with complex reasoning and unfamiliar problems."
    },

    "Average": {
        iq: 100,
        description: "Normal human reasoning and problem-solving ability."
    },

    "Clever": {
        iq: 115,
        description: "Quick to understand situations and find practical solutions."
    },

    "Intelligent": {
        iq: 130,
        description: "Strong analytical and problem-solving ability."
    },

    "Genius": {
        iq: 150,
        description: "Exceptional intellectual ability far beyond the average person."
    },

    "Mastermind": {
        iq: 180,
        description: "Capable of constructing extremely complex plans."
    },

    "Tactical Genius": {
        iq: 220,
        description: "Exceptional ability to analyze opponents and predict their actions."
    },

    "Supergenius": {
        iq: 300,
        description: "Intelligence vastly exceeding conventional human limits."
    },

    "Ancient Wisdom": {
        iq: 500,
        description: "Thousands of years of accumulated knowledge and experience."
    },

    "Cosmic Intelligence": {
        iq: 1000,
        description: "Possesses knowledge and reasoning beyond conventional civilization."
    }

};
const fightingSkillLevels = {

    "Untrained": {
        skill: 10,
        description: "Has little to no knowledge of combat."
    },

    "Novice": {
        skill: 25,
        description: "Understands the basic principles of fighting."
    },

    "Amateur": {
        skill: 50,
        description: "Has some practical fighting experience."
    },

    "Trained": {
        skill: 100,
        description: "Has undergone proper combat training."
    },

    "Skilled": {
        skill: 250,
        description: "An experienced fighter capable of handling multiple opponents."
    },

    "Expert": {
        skill: 500,
        description: "Highly proficient in multiple combat techniques."
    },

    "Master": {
        skill: 1000,
        description: "A master capable of defeating highly trained opponents."
    },

    "Grandmaster": {
        skill: 2500,
        description: "Possesses extraordinary mastery of combat."
    },

    "Legendary": {
        skill: 10000,
        description: "A fighter whose abilities have become the stuff of legend."
    },

    "Mythical": {
        skill: 50000,
        description: "Combat ability beyond ordinary physical and technical limits."
    },

    "Transcendent": {
        skill: 1000000,
        description: "Combat mastery approaching supernatural perfection."
    }

};
function showRaceCard() {

    const race = races[character.race];

    document.getElementById("race-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.race}</h2>

            <p class="race-description">
                ${race.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>STRENGTH</span>
                    <strong>${race.strength}</strong>
                </div>

                <div>
                    <span>SPEED</span>
                    <strong>${race.speed}</strong>
                </div>

                <div>
                    <span>DURABILITY</span>
                    <strong>${race.durability}</strong>
                </div>

                <div>
                    <span>INTELLIGENCE</span>
                    <strong>${race.intelligence}</strong>
                </div>

            </div>

            <div class="race-section">

                <h3>ABILITIES</h3>

                <p>
                    ${race.abilities.join(" • ")}
                </p>

            </div>

            <div class="race-section">

                <h3>WEAKNESSES</h3>

                <p>
                    ${race.weaknesses.join(" • ")}
                </p>

            </div>

            <button id="continue-race" class="spin-button">
                CONTINUE
            </button>

        </div>

    `;

    document
        .getElementById("continue-race")
        .addEventListener("click", showAgeScreen);
}
function showAgeScreen() {

    document.getElementById("race-screen").innerHTML = `

        <section id="age-screen">

            <h2>How old are you?</h2>

            <div class="roulette">

                <div id="age-display">
                    READY
                </div>

            </div>

            <button id="spin-age" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-age")
        .addEventListener("click", spinAge);
}
function spinAge() {

    const race = races[character.race];

    const display = document.getElementById("age-display");
    const spinButton = document.getElementById("spin-age");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 35;

    const interval = setInterval(() => {

        const randomAge =
            Math.floor(
                Math.random() *
                (race.maxAge - race.minAge + 1)
            ) + race.minAge;

        display.textContent = randomAge;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalAge =
                Math.floor(
                    Math.random() *
                    (race.maxAge - race.minAge + 1)
                ) + race.minAge;

            display.textContent = finalAge;

            character.age = finalAge;

            console.log("Age selected:", character);

            spinButton.disabled = false;

            setTimeout(() => {
                showHeightScreen();
            }, 800);
        }

    }, 80);
}
function showHeightScreen() {

    document.getElementById("age-screen").innerHTML = `

        <section id="height-screen">

            <h2>How tall are you?</h2>

            <div class="roulette">

                <div id="height-display">
                    READY
                </div>

            </div>

            <button id="spin-height" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-height")
        .addEventListener("click", spinHeight);
}
function spinHeight() {

    const race = races[character.race];

    const display = document.getElementById("height-display");
    const spinButton = document.getElementById("spin-height");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 35;

    const interval = setInterval(() => {

        const randomHeight =
            race.minHeight +
            Math.random() *
            (race.maxHeight - race.minHeight);

        display.textContent =
            randomHeight.toFixed(2) + " m";

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalHeight =
                race.minHeight +
                Math.random() *
                (race.maxHeight - race.minHeight);

            const roundedHeight =
                Number(finalHeight.toFixed(2));

            display.textContent =
                roundedHeight + " m";

            character.height = roundedHeight;

            console.log("Height selected:", character);

            spinButton.disabled = false;

            setTimeout(() => {
                showBackgroundScreen();
            }, 800);
        }

    }, 80);
}
function showBackgroundScreen() {

    document.getElementById("height-screen").innerHTML = `

        <section id="background-screen">

            <h2>What is your background?</h2>

            <div class="roulette">

                <div id="background-display">
                    READY
                </div>

            </div>

            <button id="spin-background" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-background")
        .addEventListener("click", spinBackground);
}
function spinBackground() {

    const backgroundNames = Object.keys(backgrounds);

    const display =
        document.getElementById("background-display");

    const spinButton =
        document.getElementById("spin-background");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 35;

    const interval = setInterval(() => {

        const randomBackground =
            backgroundNames[
                Math.floor(
                    Math.random() * backgroundNames.length
                )
            ];

        display.textContent = randomBackground;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalBackground =
                backgroundNames[
                    Math.floor(
                        Math.random() * backgroundNames.length
                    )
                ];

            display.textContent = finalBackground;

            character.background = finalBackground;

            console.log(
                "Background selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showBackgroundCard();
            }, 800);
        }

    }, 80);
}
function showBackgroundCard() {

    const background =
        backgrounds[character.background];

    document.getElementById("background-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.background}</h2>

            <p class="race-description">
                ${background.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>WEALTH</span>
                    <strong>${background.wealth}</strong>
                </div>

                <div>
                    <span>INFLUENCE</span>
                    <strong>${background.influence}</strong>
                </div>

                <div>
                    <span>SURVIVAL</span>
                    <strong>${background.survival}</strong>
                </div>

                <div>
                    <span>COMBAT</span>
                    <strong>${background.combat}</strong>
                </div>

                <div>
                    <span>KNOWLEDGE</span>
                    <strong>${background.knowledge}</strong>
                </div>

            </div>

            <button
                id="continue-background"
                class="spin-button">
                CONTINUE
            </button>

        </div>

    `;

    document
        .getElementById("continue-background")
        .addEventListener("click", showPersonalityScreen);
}
function showPersonalityScreen() {

    document.getElementById("background-screen").innerHTML = `

        <section id="personality-screen">

            <h2>What kind of person are you?</h2>

            <div class="roulette">

                <div id="personality-display">
                    READY
                </div>

            </div>

            <button id="spin-personality" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-personality")
        .addEventListener("click", spinPersonality);
}
function spinPersonality() {

    const personalityNames =
        Object.keys(personalities);

    const display =
        document.getElementById("personality-display");

    const spinButton =
        document.getElementById("spin-personality");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 35;

    const interval = setInterval(() => {

        const randomPersonality =
            personalityNames[
                Math.floor(
                    Math.random() *
                    personalityNames.length
                )
            ];

        display.textContent = randomPersonality;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalPersonality =
                personalityNames[
                    Math.floor(
                        Math.random() *
                        personalityNames.length
                    )
                ];

            display.textContent =
                finalPersonality;

            character.personality =
                finalPersonality;

            console.log(
                "Personality selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showPersonalityCard();
            }, 800);
        }

    }, 80);
}
function showPersonalityCard() {

    const personality =
        personalities[character.personality];

    document.getElementById("personality-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.personality}</h2>

            <p class="race-description">
                ${personality.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>COURAGE</span>
                    <strong>${personality.courage}</strong>
                </div>

                <div>
                    <span>INTELLIGENCE</span>
                    <strong>${personality.intelligence}</strong>
                </div>

                <div>
                    <span>DIPLOMACY</span>
                    <strong>${personality.diplomacy}</strong>
                </div>

                <div>
                    <span>AGGRESSION</span>
                    <strong>${personality.aggression}</strong>
                </div>

                <div>
                    <span>CURIOSITY</span>
                    <strong>${personality.curiosity}</strong>
                </div>

            </div>

            <button
                id="continue-personality"
                class="spin-button">
                CONTINUE
            </button>

        </div>

    `;

    document
        .getElementById("continue-personality")
        .addEventListener(
            "click",
            showStrengthScreen
        );
}
function showStrengthScreen() {

    document.getElementById("personality-screen").innerHTML = `

        <section id="strength-screen">

            <h2>How strong are you?</h2>

            <div class="roulette">

                <div id="strength-display">
                    READY
                </div>

            </div>

            <button id="spin-strength" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-strength")
        .addEventListener("click", spinStrength);
}
function spinStrength() {

    const strengthNames =
        Object.keys(strengthLevels);

    const display =
        document.getElementById("strength-display");

    const spinButton =
        document.getElementById("spin-strength");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 40;

    const interval = setInterval(() => {

        const randomStrength =
            strengthNames[
                Math.floor(
                    Math.random() *
                    strengthNames.length
                )
            ];

        display.textContent = randomStrength;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalStrength =
                strengthNames[
                    Math.floor(
                        Math.random() *
                        strengthNames.length
                    )
                ];

            display.textContent =
                finalStrength;

            character.strength =
                finalStrength;

            console.log(
                "Strength selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showStrengthCard();
            }, 800);
        }

    }, 80);
}
function showStrengthCard() {

    const strength =
        strengthLevels[character.strength];

    document.getElementById("strength-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.strength}</h2>

            <p class="race-description">
                ${strength.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>POWER LEVEL</span>
                    <strong>${strength.power.toLocaleString()}</strong>
                </div>

            </div>

            <button
                id="continue-strength"
                class="spin-button">
                CONTINUE
            </button>

        </div>

    `;

    document
        .getElementById("continue-strength")
        .addEventListener(
            "click",
            showSpeedScreen
        );
}
function showSpeedScreen() {

    document.getElementById("strength-screen").innerHTML = `

        <section id="speed-screen">

            <h2>How fast are you?</h2>

            <div class="roulette">

                <div id="speed-display">
                    READY
                </div>

            </div>

            <button id="spin-speed" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-speed")
        .addEventListener("click", spinSpeed);
}
function spinSpeed() {

    const speedNames =
        Object.keys(speedLevels);

    const display =
        document.getElementById("speed-display");

    const spinButton =
        document.getElementById("spin-speed");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 40;

    const interval = setInterval(() => {

        const randomSpeed =
            speedNames[
                Math.floor(
                    Math.random() * speedNames.length
                )
            ];

        display.textContent = randomSpeed;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalSpeed =
                speedNames[
                    Math.floor(
                        Math.random() * speedNames.length
                    )
                ];

            display.textContent = finalSpeed;

            character.speed = finalSpeed;

            console.log(
                "Speed selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showSpeedCard();
            }, 800);
        }

    }, 80);
}
function showSpeedCard() {

    const speed =
        speedLevels[character.speed];

    document.getElementById("speed-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.speed}</h2>

            <p class="race-description">
                ${speed.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>SPEED VALUE</span>
                    <strong>${speed.speed.toLocaleString()}</strong>
                </div>

            </div>

            <button
                id="continue-speed"
                class="spin-button">
                CONTINUE
            </button>

        </div>

    `;

    document
        .getElementById("continue-speed")
        .addEventListener(
            "click",
            showDurabilityScreen
        );
}
function showDurabilityScreen() {

    document.getElementById("speed-screen").innerHTML = `

        <section id="durability-screen">

            <h2>How durable are you?</h2>

            <div class="roulette">

                <div id="durability-display">
                    READY
                </div>

            </div>

            <button id="spin-durability" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-durability")
        .addEventListener("click", spinDurability);
}
function spinDurability() {

    const durabilityNames =
        Object.keys(durabilityLevels);

    const display =
        document.getElementById("durability-display");

    const spinButton =
        document.getElementById("spin-durability");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 40;

    const interval = setInterval(() => {

        const randomDurability =
            durabilityNames[
                Math.floor(
                    Math.random() *
                    durabilityNames.length
                )
            ];

        display.textContent = randomDurability;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalDurability =
                durabilityNames[
                    Math.floor(
                        Math.random() *
                        durabilityNames.length
                    )
                ];

            display.textContent =
                finalDurability;

            character.durability =
                finalDurability;

            console.log(
                "Durability selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showDurabilityCard();
            }, 800);
        }

    }, 80);
}
function showDurabilityCard() {

    const durability =
        durabilityLevels[character.durability];

    document.getElementById("durability-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.durability}</h2>

            <p class="race-description">
                ${durability.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>DURABILITY VALUE</span>
                    <strong>
                        ${durability.durability.toLocaleString()}
                    </strong>
                </div>

            </div>

            <button
                id="continue-durability"
                class="spin-button">
                CONTINUE
            </button>

        </div>

    `;

    document
        .getElementById("continue-durability")
        .addEventListener(
            "click",
            showIQScreen
        );
}
function showIQScreen() {

    document.getElementById("durability-screen").innerHTML = `

        <section id="iq-screen">

            <h2>How intelligent are you?</h2>

            <div class="roulette">

                <div id="iq-display">
                    READY
                </div>

            </div>

            <button id="spin-iq" class="spin-button">
                SPIN
            </button>

        </section>

    `;

    document
        .getElementById("spin-iq")
        .addEventListener("click", spinIQ);
}
function spinIQ() {

    const iqNames =
        Object.keys(iqLevels);

    const display =
        document.getElementById("iq-display");

    const spinButton =
        document.getElementById("spin-iq");

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 40;

    const interval = setInterval(() => {

        const randomIQ =
            iqNames[
                Math.floor(
                    Math.random() * iqNames.length
                )
            ];

        display.textContent = randomIQ;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalIQ =
                iqNames[
                    Math.floor(
                        Math.random() * iqNames.length
                    )
                ];

            display.textContent = finalIQ;

            character.iq = finalIQ;

            console.log(
                "IQ selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showIQCard();
            }, 800);
        }

    }, 80);
}
function showIQCard() {

    const iq =
        iqLevels[character.iq];

    document.getElementById("iq-screen").innerHTML = `

        <div class="race-card">

            <h2>${character.iq}</h2>

            <p class="race-description">
                ${iq.description}
            </p>

            <div class="race-stats">

                <div>
                    <span>INTELLIGENCE VALUE</span>

                    <strong>
                        ${iq.iq.toLocaleString()}
                    </strong>
                </div>

            </div>

            <button
                id="continue-iq"
                class="spin-button">

                CONTINUE

            </button>

        </div>

    `;

    document
        .getElementById("continue-iq")
        .addEventListener(
            "click",
            showFightingSkillScreen
        );
}
function showFightingSkillScreen() {

    document.getElementById("iq-screen").innerHTML = `

        <section id="fighting-skill-screen">

            <h2>How skilled are you in combat?</h2>

            <div class="roulette">

                <div id="fighting-skill-display">
                    READY
                </div>

            </div>

            <button
                id="spin-fighting-skill"
                class="spin-button">

                SPIN

            </button>

        </section>

    `;

    document
        .getElementById("spin-fighting-skill")
        .addEventListener(
            "click",
            spinFightingSkill
        );
}
function spinFightingSkill() {

    const skillNames =
        Object.keys(fightingSkillLevels);

    const display =
        document.getElementById(
            "fighting-skill-display"
        );

    const spinButton =
        document.getElementById(
            "spin-fighting-skill"
        );

    spinButton.disabled = true;

    let spins = 0;
    const totalSpins = 40;

    const interval = setInterval(() => {

        const randomSkill =
            skillNames[
                Math.floor(
                    Math.random() *
                    skillNames.length
                )
            ];

        display.textContent = randomSkill;

        spins++;

        if (spins >= totalSpins) {

            clearInterval(interval);

            const finalSkill =
                skillNames[
                    Math.floor(
                        Math.random() *
                        skillNames.length
                    )
                ];

            display.textContent =
                finalSkill;

            character.fightingSkill =
                finalSkill;

            console.log(
                "Fighting skill selected:",
                character
            );

            spinButton.disabled = false;

            setTimeout(() => {
                showFightingSkillCard();
            }, 800);
        }

    }, 80);
}
function showFightingSkillCard() {

    const skill =
        fightingSkillLevels[
            character.fightingSkill
        ];

    document.getElementById(
        "fighting-skill-screen"
    ).innerHTML = `

        <div class="race-card">

            <h2>
                ${character.fightingSkill}
            </h2>

            <p class="race-description">
                ${skill.description}
            </p>

            <div class="race-stats">

                <div>

                    <span>COMBAT SKILL</span>

                    <strong>
                        ${skill.skill.toLocaleString()}
                    </strong>

                </div>

            </div>

            <button
                id="continue-fighting-skill"
                class="spin-button">

                CONTINUE

            </button>

        </div>

    `;

    document
        .getElementById(
            "continue-fighting-skill"
        )
        .addEventListener(
            "click",
            showWeaponScreen
        );
}