var res = {

    //animation
    ken_plist: "res/Animation/ken.plist",
    ken_png: "res/Animation/ken.png",
    Animation_json: "res/Animation.json",

    //Sprite
    ken_1_png: "res/Animation/ken_1.png",


    //audio
    theme_ken : "res/sound/ken_theme.mp3",
    voice_ken : "res/sound/ken_voice.mp3",


    //Hello World
    HelloWorld_png : "res/HelloWorld.png",
    MainScene_json : "res/MainScene.json",

    //Physical
    PhysicalScene_json : "res/PhysicalScene.json",
    pelota_png : "res/Physical/pelota.png",

    //StarWars
    intro_jpg : "res/StarWars/intro.jpg",
    credit_png : "res/StarWars/credit.png",
    StarWarsScene_json : "res/StarWars.json",
    star_wars : "res/sound/star_wars.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
