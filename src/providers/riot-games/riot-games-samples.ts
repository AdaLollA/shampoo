/**
 * These samples are used to conserve api method requests during the development stage.
 */
export class RiotGamesProviderSamples {
  public static readonly GET_CHAMPION: string = JSON.parse('{"data":{"Jax":{"id":24,"key":"Jax","name":"Jax","title":"Grandmaster at Arms"},"Sona":{"id":37,"key":"Sona","name":"Sona","title":"Maven of the Strings"},"Tristana":{"id":18,"key":"Tristana","name":"Tristana","title":"the Yordle Gunner"},"Varus":{"id":110,"key":"Varus","name":"Varus","title":"the Arrow of Retribution"},"Kaisa":{"id":145,"key":"Kaisa","name":"Kai\'Sa","title":"Daughter of the Void"},"Fiora":{"id":114,"key":"Fiora","name":"Fiora","title":"the Grand Duelist"},"Singed":{"id":27,"key":"Singed","name":"Singed","title":"the Mad Chemist"},"TahmKench":{"id":223,"key":"TahmKench","name":"Tahm Kench","title":"the River King"},"Leblanc":{"id":7,"key":"Leblanc","name":"LeBlanc","title":"the Deceiver"},"Thresh":{"id":412,"key":"Thresh","name":"Thresh","title":"the Chain Warden"},"Karma":{"id":43,"key":"Karma","name":"Karma","title":"the Enlightened One"},"Jhin":{"id":202,"key":"Jhin","name":"Jhin","title":"the Virtuoso"},"Rumble":{"id":68,"key":"Rumble","name":"Rumble","title":"the Mechanized Menace"},"Udyr":{"id":77,"key":"Udyr","name":"Udyr","title":"the Spirit Walker"},"LeeSin":{"id":64,"key":"LeeSin","name":"Lee Sin","title":"the Blind Monk"},"Yorick":{"id":83,"key":"Yorick","name":"Yorick","title":"Shepherd of Souls"},"Ornn":{"id":516,"key":"Ornn","name":"Ornn","title":"The Fire below the Mountain"},"Kayn":{"id":141,"key":"Kayn","name":"Kayn","title":"the Shadow Reaper"},"Kassadin":{"id":38,"key":"Kassadin","name":"Kassadin","title":"the Void Walker"},"Sivir":{"id":15,"key":"Sivir","name":"Sivir","title":"the Battle Mistress"},"MissFortune":{"id":21,"key":"MissFortune","name":"Miss Fortune","title":"the Bounty Hunter"},"Draven":{"id":119,"key":"Draven","name":"Draven","title":"the Glorious Executioner"},"Yasuo":{"id":157,"key":"Yasuo","name":"Yasuo","title":"the Unforgiven"},"Kayle":{"id":10,"key":"Kayle","name":"Kayle","title":"The Judicator"},"Shaco":{"id":35,"key":"Shaco","name":"Shaco","title":"the Demon Jester"},"Renekton":{"id":58,"key":"Renekton","name":"Renekton","title":"the Butcher of the Sands"},"Hecarim":{"id":120,"key":"Hecarim","name":"Hecarim","title":"the Shadow of War"},"Fizz":{"id":105,"key":"Fizz","name":"Fizz","title":"the Tidal Trickster"},"KogMaw":{"id":96,"key":"KogMaw","name":"Kog\'Maw","title":"the Mouth of the Abyss"},"Maokai":{"id":57,"key":"Maokai","name":"Maokai","title":"the Twisted Treant"},"Lissandra":{"id":127,"key":"Lissandra","name":"Lissandra","title":"the Ice Witch"},"Jinx":{"id":222,"key":"Jinx","name":"Jinx","title":"the Loose Cannon"},"Urgot":{"id":6,"key":"Urgot","name":"Urgot","title":"the Dreadnought"},"Fiddlesticks":{"id":9,"key":"Fiddlesticks","name":"Fiddlesticks","title":"the Harbinger of Doom"},"Galio":{"id":3,"key":"Galio","name":"Galio","title":"the Colossus"},"Pantheon":{"id":80,"key":"Pantheon","name":"Pantheon","title":"the Artisan of War"},"Talon":{"id":91,"key":"Talon","name":"Talon","title":"the Blade\'s Shadow"},"Gangplank":{"id":41,"key":"Gangplank","name":"Gangplank","title":"the Saltwater Scourge"},"Ezreal":{"id":81,"key":"Ezreal","name":"Ezreal","title":"the Prodigal Explorer"},"Gnar":{"id":150,"key":"Gnar","name":"Gnar","title":"the Missing Link"},"Teemo":{"id":17,"key":"Teemo","name":"Teemo","title":"the Swift Scout"},"Annie":{"id":1,"key":"Annie","name":"Annie","title":"the Dark Child"},"Mordekaiser":{"id":82,"key":"Mordekaiser","name":"Mordekaiser","title":"the Iron Revenant"},"Azir":{"id":268,"key":"Azir","name":"Azir","title":"the Emperor of the Sands"},"Kennen":{"id":85,"key":"Kennen","name":"Kennen","title":"the Heart of the Tempest"},"Riven":{"id":92,"key":"Riven","name":"Riven","title":"the Exile"},"Chogath":{"id":31,"key":"Chogath","name":"Cho\'Gath","title":"the Terror of the Void"},"Aatrox":{"id":266,"key":"Aatrox","name":"Aatrox","title":"the Darkin Blade"},"Poppy":{"id":78,"key":"Poppy","name":"Poppy","title":"Keeper of the Hammer"},"Taliyah":{"id":163,"key":"Taliyah","name":"Taliyah","title":"the Stoneweaver"},"Illaoi":{"id":420,"key":"Illaoi","name":"Illaoi","title":"the Kraken Priestess"},"Heimerdinger":{"id":74,"key":"Heimerdinger","name":"Heimerdinger","title":"the Revered Inventor"},"Alistar":{"id":12,"key":"Alistar","name":"Alistar","title":"the Minotaur"},"XinZhao":{"id":5,"key":"XinZhao","name":"Xin Zhao","title":"the Seneschal of Demacia"},"Lucian":{"id":236,"key":"Lucian","name":"Lucian","title":"the Purifier"},"Volibear":{"id":106,"key":"Volibear","name":"Volibear","title":"the Thunder\'s Roar"},"Sejuani":{"id":113,"key":"Sejuani","name":"Sejuani","title":"Fury of the North"},"Nidalee":{"id":76,"key":"Nidalee","name":"Nidalee","title":"the Bestial Huntress"},"Garen":{"id":86,"key":"Garen","name":"Garen","title":"The Might of Demacia"},"Leona":{"id":89,"key":"Leona","name":"Leona","title":"the Radiant Dawn"},"Zed":{"id":238,"key":"Zed","name":"Zed","title":"the Master of Shadows"},"Blitzcrank":{"id":53,"key":"Blitzcrank","name":"Blitzcrank","title":"the Great Steam Golem"},"Rammus":{"id":33,"key":"Rammus","name":"Rammus","title":"the Armordillo"},"Velkoz":{"id":161,"key":"Velkoz","name":"Vel\'Koz","title":"the Eye of the Void"},"Caitlyn":{"id":51,"key":"Caitlyn","name":"Caitlyn","title":"the Sheriff of Piltover"},"Trundle":{"id":48,"key":"Trundle","name":"Trundle","title":"the Troll King"},"Kindred":{"id":203,"key":"Kindred","name":"Kindred","title":"The Eternal Hunters"},"Quinn":{"id":133,"key":"Quinn","name":"Quinn","title":"Demacia\'s Wings"},"Ekko":{"id":245,"key":"Ekko","name":"Ekko","title":"the Boy Who Shattered Time"},"Nami":{"id":267,"key":"Nami","name":"Nami","title":"the Tidecaller"},"Swain":{"id":50,"key":"Swain","name":"Swain","title":"the Noxian Grand General"},"Taric":{"id":44,"key":"Taric","name":"Taric","title":"the Shield of Valoran"},"Syndra":{"id":134,"key":"Syndra","name":"Syndra","title":"the Dark Sovereign"},"Rakan":{"id":497,"key":"Rakan","name":"Rakan","title":"The Charmer"},"Skarner":{"id":72,"key":"Skarner","name":"Skarner","title":"the Crystal Vanguard"},"Braum":{"id":201,"key":"Braum","name":"Braum","title":"the Heart of the Freljord"},"Veigar":{"id":45,"key":"Veigar","name":"Veigar","title":"the Tiny Master of Evil"},"Xerath":{"id":101,"key":"Xerath","name":"Xerath","title":"the Magus Ascendant"},"Corki":{"id":42,"key":"Corki","name":"Corki","title":"the Daring Bombardier"},"Nautilus":{"id":111,"key":"Nautilus","name":"Nautilus","title":"the Titan of the Depths"},"Ahri":{"id":103,"key":"Ahri","name":"Ahri","title":"the Nine-Tailed Fox"},"Jayce":{"id":126,"key":"Jayce","name":"Jayce","title":"the Defender of Tomorrow"},"Darius":{"id":122,"key":"Darius","name":"Darius","title":"the Hand of Noxus"},"Tryndamere":{"id":23,"key":"Tryndamere","name":"Tryndamere","title":"the Barbarian King"},"Janna":{"id":40,"key":"Janna","name":"Janna","title":"the Storm\'s Fury"},"Elise":{"id":60,"key":"Elise","name":"Elise","title":"the Spider Queen"},"Vayne":{"id":67,"key":"Vayne","name":"Vayne","title":"the Night Hunter"},"Brand":{"id":63,"key":"Brand","name":"Brand","title":"the Burning Vengeance"},"Zoe":{"id":142,"key":"Zoe","name":"Zoe","title":"the Aspect of Twilight"},"Graves":{"id":104,"key":"Graves","name":"Graves","title":"the Outlaw"},"Soraka":{"id":16,"key":"Soraka","name":"Soraka","title":"the Starchild"},"Xayah":{"id":498,"key":"Xayah","name":"Xayah","title":"the Rebel"},"Karthus":{"id":30,"key":"Karthus","name":"Karthus","title":"the Deathsinger"},"Vladimir":{"id":8,"key":"Vladimir","name":"Vladimir","title":"the Crimson Reaper"},"Zilean":{"id":26,"key":"Zilean","name":"Zilean","title":"the Chronokeeper"},"Katarina":{"id":55,"key":"Katarina","name":"Katarina","title":"the Sinister Blade"},"Shyvana":{"id":102,"key":"Shyvana","name":"Shyvana","title":"the Half-Dragon"},"Warwick":{"id":19,"key":"Warwick","name":"Warwick","title":"the Uncaged Wrath of Zaun"},"Ziggs":{"id":115,"key":"Ziggs","name":"Ziggs","title":"the Hexplosives Expert"},"Kled":{"id":240,"key":"Kled","name":"Kled","title":"the Cantankerous Cavalier"},"Khazix":{"id":121,"key":"Khazix","name":"Kha\'Zix","title":"the Voidreaver"},"Olaf":{"id":2,"key":"Olaf","name":"Olaf","title":"the Berserker"},"TwistedFate":{"id":4,"key":"TwistedFate","name":"Twisted Fate","title":"the Card Master"},"Nunu":{"id":20,"key":"Nunu","name":"Nunu","title":"the Yeti Rider"},"Rengar":{"id":107,"key":"Rengar","name":"Rengar","title":"the Pridestalker"},"Bard":{"id":432,"key":"Bard","name":"Bard","title":"the Wandering Caretaker"},"Irelia":{"id":39,"key":"Irelia","name":"Irelia","title":"the Will of the Blades"},"Ivern":{"id":427,"key":"Ivern","name":"Ivern","title":"the Green Father"},"MonkeyKing":{"id":62,"key":"MonkeyKing","name":"Wukong","title":"the Monkey King"},"Ashe":{"id":22,"key":"Ashe","name":"Ashe","title":"the Frost Archer"},"Kalista":{"id":429,"key":"Kalista","name":"Kalista","title":"the Spear of Vengeance"},"Akali":{"id":84,"key":"Akali","name":"Akali","title":"the Fist of Shadow"},"Vi":{"id":254,"key":"Vi","name":"Vi","title":"the Piltover Enforcer"},"Amumu":{"id":32,"key":"Amumu","name":"Amumu","title":"the Sad Mummy"},"Lulu":{"id":117,"key":"Lulu","name":"Lulu","title":"the Fae Sorceress"},"Morgana":{"id":25,"key":"Morgana","name":"Morgana","title":"Fallen Angel"},"Nocturne":{"id":56,"key":"Nocturne","name":"Nocturne","title":"the Eternal Nightmare"},"Diana":{"id":131,"key":"Diana","name":"Diana","title":"Scorn of the Moon"},"AurelionSol":{"id":136,"key":"AurelionSol","name":"Aurelion Sol","title":"The Star Forger"},"Zyra":{"id":143,"key":"Zyra","name":"Zyra","title":"Rise of the Thorns"},"Viktor":{"id":112,"key":"Viktor","name":"Viktor","title":"the Machine Herald"},"Cassiopeia":{"id":69,"key":"Cassiopeia","name":"Cassiopeia","title":"the Serpent\'s Embrace"},"Nasus":{"id":75,"key":"Nasus","name":"Nasus","title":"the Curator of the Sands"},"Twitch":{"id":29,"key":"Twitch","name":"Twitch","title":"the Plague Rat"},"DrMundo":{"id":36,"key":"DrMundo","name":"Dr. Mundo","title":"the Madman of Zaun"},"Orianna":{"id":61,"key":"Orianna","name":"Orianna","title":"the Lady of Clockwork"},"Evelynn":{"id":28,"key":"Evelynn","name":"Evelynn","title":"Agony\'s Embrace"},"RekSai":{"id":421,"key":"RekSai","name":"Rek\'Sai","title":"the Void Burrower"},"Lux":{"id":99,"key":"Lux","name":"Lux","title":"the Lady of Luminosity"},"Sion":{"id":14,"key":"Sion","name":"Sion","title":"The Undead Juggernaut"},"Camille":{"id":164,"key":"Camille","name":"Camille","title":"the Steel Shadow"},"MasterYi":{"id":11,"key":"MasterYi","name":"Master Yi","title":"the Wuju Bladesman"},"Ryze":{"id":13,"key":"Ryze","name":"Ryze","title":"the Rune Mage"},"Malphite":{"id":54,"key":"Malphite","name":"Malphite","title":"Shard of the Monolith"},"Anivia":{"id":34,"key":"Anivia","name":"Anivia","title":"the Cryophoenix"},"Shen":{"id":98,"key":"Shen","name":"Shen","title":"the Eye of Twilight"},"JarvanIV":{"id":59,"key":"JarvanIV","name":"Jarvan IV","title":"the Exemplar of Demacia"},"Malzahar":{"id":90,"key":"Malzahar","name":"Malzahar","title":"the Prophet of the Void"},"Zac":{"id":154,"key":"Zac","name":"Zac","title":"the Secret Weapon"},"Gragas":{"id":79,"key":"Gragas","name":"Gragas","title":"the Rabble Rouser"}},"type":"champion","version":"8.5.2"}');

  public static readonly GET_VERSIONS: string = JSON.parse('[\n' +
    '    "8.5.2",\n' +
    '    "8.5.1",\n' +
    '    "8.4.1",\n' +
    '    "8.3.1",\n' +
    '    "8.2.1",\n' +
    '    "8.1.1",\n' +
    '    "7.24.2",\n' +
    '    "7.24.1",\n' +
    '    "7.23.1",\n' +
    '    "7.22.1",\n' +
    '    "7.21.1",\n' +
    '    "7.20.3",\n' +
    '    "7.20.2",\n' +
    '    "7.20.1",\n' +
    '    "7.19.1",\n' +
    '    "7.18.1",\n' +
    '    "7.17.2",\n' +
    '    "7.17.1",\n' +
    '    "7.16.1",\n' +
    '    "7.15.1",\n' +
    '    "7.14.1",\n' +
    '    "7.13.1",\n' +
    '    "7.12.1",\n' +
    '    "7.11.1",\n' +
    '    "7.10.1",\n' +
    '    "7.9.2",\n' +
    '    "7.9.1",\n' +
    '    "7.8.1",\n' +
    '    "7.7.1",\n' +
    '    "7.6.1",\n' +
    '    "7.5.2",\n' +
    '    "7.5.1",\n' +
    '    "7.4.3",\n' +
    '    "7.4.2",\n' +
    '    "7.4.1",\n' +
    '    "7.3.3",\n' +
    '    "7.3.2",\n' +
    '    "7.3.1",\n' +
    '    "7.2.1",\n' +
    '    "7.1.1",\n' +
    '    "6.24.1",\n' +
    '    "6.23.1",\n' +
    '    "6.22.1",\n' +
    '    "6.21.1",\n' +
    '    "6.20.1",\n' +
    '    "6.19.1",\n' +
    '    "6.18.1",\n' +
    '    "6.17.1",\n' +
    '    "6.16.2",\n' +
    '    "6.16.1",\n' +
    '    "6.15.1",\n' +
    '    "6.14.2",\n' +
    '    "6.14.1",\n' +
    '    "6.13.1",\n' +
    '    "6.12.1",\n' +
    '    "6.11.1",\n' +
    '    "6.10.1",\n' +
    '    "6.9.1",\n' +
    '    "6.8.1",\n' +
    '    "6.7.1",\n' +
    '    "6.6.1",\n' +
    '    "6.5.1",\n' +
    '    "6.4.2",\n' +
    '    "6.4.1",\n' +
    '    "6.3.1",\n' +
    '    "6.2.1",\n' +
    '    "6.1.1",\n' +
    '    "5.24.2",\n' +
    '    "5.24.1",\n' +
    '    "5.23.1",\n' +
    '    "5.22.3",\n' +
    '    "5.22.2",\n' +
    '    "5.22.1",\n' +
    '    "5.21.1",\n' +
    '    "5.20.1",\n' +
    '    "5.19.1",\n' +
    '    "5.18.1",\n' +
    '    "5.17.1",\n' +
    '    "5.16.1",\n' +
    '    "5.15.1",\n' +
    '    "5.14.1",\n' +
    '    "5.13.1",\n' +
    '    "5.12.1",\n' +
    '    "5.11.1",\n' +
    '    "5.10.1",\n' +
    '    "5.9.1",\n' +
    '    "5.8.1",\n' +
    '    "5.7.2",\n' +
    '    "5.7.1",\n' +
    '    "5.6.2",\n' +
    '    "5.6.1",\n' +
    '    "5.5.3",\n' +
    '    "5.5.2",\n' +
    '    "5.5.1",\n' +
    '    "5.4.1",\n' +
    '    "5.3.1",\n' +
    '    "5.2.2",\n' +
    '    "5.2.1",\n' +
    '    "5.1.2",\n' +
    '    "5.1.1",\n' +
    '    "4.21.5",\n' +
    '    "4.21.4",\n' +
    '    "4.21.3",\n' +
    '    "4.21.1",\n' +
    '    "4.20.2",\n' +
    '    "4.20.1",\n' +
    '    "4.19.3",\n' +
    '    "4.19.2",\n' +
    '    "4.18.1",\n' +
    '    "4.17.1",\n' +
    '    "4.16.1",\n' +
    '    "4.15.1",\n' +
    '    "4.14.2",\n' +
    '    "4.13.1",\n' +
    '    "4.12.2",\n' +
    '    "4.12.1",\n' +
    '    "4.11.3",\n' +
    '    "4.10.7",\n' +
    '    "4.10.2",\n' +
    '    "4.9.1",\n' +
    '    "4.8.3",\n' +
    '    "4.8.2",\n' +
    '    "4.8.1",\n' +
    '    "4.7.16",\n' +
    '    "4.7.9",\n' +
    '    "4.7.8",\n' +
    '    "4.6.3",\n' +
    '    "4.5.4",\n' +
    '    "4.4.3",\n' +
    '    "4.4.2",\n' +
    '    "4.3.18",\n' +
    '    "4.3.12",\n' +
    '    "4.3.10",\n' +
    '    "4.3.4",\n' +
    '    "4.3.2",\n' +
    '    "4.2.6",\n' +
    '    "4.2.5",\n' +
    '    "4.2.1",\n' +
    '    "4.1.43",\n' +
    '    "4.1.41",\n' +
    '    "4.1.13",\n' +
    '    "4.1.9",\n' +
    '    "4.1.2",\n' +
    '    "3.15.5",\n' +
    '    "3.15.4",\n' +
    '    "3.15.2",\n' +
    '    "3.14.41",\n' +
    '    "3.14.23",\n' +
    '    "3.14.22",\n' +
    '    "3.14.20",\n' +
    '    "3.14.19",\n' +
    '    "3.14.16",\n' +
    '    "3.14.13",\n' +
    '    "3.14.12",\n' +
    '    "3.13.24",\n' +
    '    "3.13.8",\n' +
    '    "3.13.6",\n' +
    '    "3.13.1",\n' +
    '    "3.12.37",\n' +
    '    "3.12.36",\n' +
    '    "3.12.34",\n' +
    '    "3.12.33",\n' +
    '    "3.12.26",\n' +
    '    "3.12.24",\n' +
    '    "3.12.2",\n' +
    '    "3.11.4",\n' +
    '    "3.11.2",\n' +
    '    "3.10.6",\n' +
    '    "3.10.3",\n' +
    '    "3.10.2",\n' +
    '    "3.9.7",\n' +
    '    "3.9.5",\n' +
    '    "3.9.4",\n' +
    '    "3.8.5",\n' +
    '    "3.8.3",\n' +
    '    "3.8.1",\n' +
    '    "3.7.9",\n' +
    '    "3.7.2",\n' +
    '    "3.7.1",\n' +
    '    "3.6.15",\n' +
    '    "3.6.14",\n' +
    '    "0.154.3",\n' +
    '    "0.154.2",\n' +
    '    "0.153.2",\n' +
    '    "0.152.115",\n' +
    '    "0.152.108",\n' +
    '    "0.152.107",\n' +
    '    "0.152.55",\n' +
    '    "0.151.101",\n' +
    '    "0.151.2"\n' +
    ']');

  public static readonly GET_MASTERY: any = JSON.parse('[\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 222,\n' +
    '        "championLevel": 7,\n' +
    '        "championPoints": 73363,\n' +
    '        "lastPlayTime": 1522453146000,\n' +
    '        "championPointsSinceLastLevel": 51763,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 22,\n' +
    '        "championLevel": 7,\n' +
    '        "championPoints": 60406,\n' +
    '        "lastPlayTime": 1521493987000,\n' +
    '        "championPointsSinceLastLevel": 38806,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 110,\n' +
    '        "championLevel": 6,\n' +
    '        "championPoints": 38785,\n' +
    '        "lastPlayTime": 1521723015000,\n' +
    '        "championPointsSinceLastLevel": 17185,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 1\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 203,\n' +
    '        "championLevel": 6,\n' +
    '        "championPoints": 31959,\n' +
    '        "lastPlayTime": 1522425847000,\n' +
    '        "championPointsSinceLastLevel": 10359,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 96,\n' +
    '        "championLevel": 6,\n' +
    '        "championPoints": 31308,\n' +
    '        "lastPlayTime": 1520895014000,\n' +
    '        "championPointsSinceLastLevel": 9708,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 1\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 122,\n' +
    '        "championLevel": 5,\n' +
    '        "championPoints": 28715,\n' +
    '        "lastPlayTime": 1521325582000,\n' +
    '        "championPointsSinceLastLevel": 7115,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 1\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 34,\n' +
    '        "championLevel": 6,\n' +
    '        "championPoints": 27940,\n' +
    '        "lastPlayTime": 1522447130000,\n' +
    '        "championPointsSinceLastLevel": 6340,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 105,\n' +
    '        "championLevel": 5,\n' +
    '        "championPoints": 27619,\n' +
    '        "lastPlayTime": 1508357491000,\n' +
    '        "championPointsSinceLastLevel": 6019,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 92,\n' +
    '        "championLevel": 5,\n' +
    '        "championPoints": 25565,\n' +
    '        "lastPlayTime": 1522776191000,\n' +
    '        "championPointsSinceLastLevel": 3965,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 126,\n' +
    '        "championLevel": 5,\n' +
    '        "championPoints": 21640,\n' +
    '        "lastPlayTime": 1510441269000,\n' +
    '        "championPointsSinceLastLevel": 40,\n' +
    '        "championPointsUntilNextLevel": 0,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 119,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 19851,\n' +
    '        "lastPlayTime": 1522358372000,\n' +
    '        "championPointsSinceLastLevel": 7251,\n' +
    '        "championPointsUntilNextLevel": 1749,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 50,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 17732,\n' +
    '        "lastPlayTime": 1522175034000,\n' +
    '        "championPointsSinceLastLevel": 5132,\n' +
    '        "championPointsUntilNextLevel": 3868,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 150,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 17256,\n' +
    '        "lastPlayTime": 1506386029000,\n' +
    '        "championPointsSinceLastLevel": 4656,\n' +
    '        "championPointsUntilNextLevel": 4344,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 10,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 16136,\n' +
    '        "lastPlayTime": 1517869470000,\n' +
    '        "championPointsSinceLastLevel": 3536,\n' +
    '        "championPointsUntilNextLevel": 5464,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 81,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 15926,\n' +
    '        "lastPlayTime": 1499095840000,\n' +
    '        "championPointsSinceLastLevel": 3326,\n' +
    '        "championPointsUntilNextLevel": 5674,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 39,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 15210,\n' +
    '        "lastPlayTime": 1517233742000,\n' +
    '        "championPointsSinceLastLevel": 2610,\n' +
    '        "championPointsUntilNextLevel": 6390,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 102,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 14779,\n' +
    '        "lastPlayTime": 1511524416000,\n' +
    '        "championPointsSinceLastLevel": 2179,\n' +
    '        "championPointsUntilNextLevel": 6821,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 64,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 13769,\n' +
    '        "lastPlayTime": 1522269696000,\n' +
    '        "championPointsSinceLastLevel": 1169,\n' +
    '        "championPointsUntilNextLevel": 7831,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 83,\n' +
    '        "championLevel": 4,\n' +
    '        "championPoints": 13553,\n' +
    '        "lastPlayTime": 1519137193000,\n' +
    '        "championPointsSinceLastLevel": 953,\n' +
    '        "championPointsUntilNextLevel": 8047,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 63,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 11474,\n' +
    '        "lastPlayTime": 1522792359000,\n' +
    '        "championPointsSinceLastLevel": 5474,\n' +
    '        "championPointsUntilNextLevel": 1126,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 268,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 10721,\n' +
    '        "lastPlayTime": 1510009687000,\n' +
    '        "championPointsSinceLastLevel": 4721,\n' +
    '        "championPointsUntilNextLevel": 1879,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 67,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 10479,\n' +
    '        "lastPlayTime": 1513715128000,\n' +
    '        "championPointsSinceLastLevel": 4479,\n' +
    '        "championPointsUntilNextLevel": 2121,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 1,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 10408,\n' +
    '        "lastPlayTime": 1484084412000,\n' +
    '        "championPointsSinceLastLevel": 4408,\n' +
    '        "championPointsUntilNextLevel": 2192,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 106,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 10206,\n' +
    '        "lastPlayTime": 1520026439000,\n' +
    '        "championPointsSinceLastLevel": 4206,\n' +
    '        "championPointsUntilNextLevel": 2394,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 51,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 9985,\n' +
    '        "lastPlayTime": 1522451412000,\n' +
    '        "championPointsSinceLastLevel": 3985,\n' +
    '        "championPointsUntilNextLevel": 2615,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 498,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 9977,\n' +
    '        "lastPlayTime": 1509495927000,\n' +
    '        "championPointsSinceLastLevel": 3977,\n' +
    '        "championPointsUntilNextLevel": 2623,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 28,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 9736,\n' +
    '        "lastPlayTime": 1508881267000,\n' +
    '        "championPointsSinceLastLevel": 3736,\n' +
    '        "championPointsUntilNextLevel": 2864,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 133,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 8901,\n' +
    '        "lastPlayTime": 1494888240000,\n' +
    '        "championPointsSinceLastLevel": 2901,\n' +
    '        "championPointsUntilNextLevel": 3699,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 69,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7922,\n' +
    '        "lastPlayTime": 1512765627000,\n' +
    '        "championPointsSinceLastLevel": 1922,\n' +
    '        "championPointsUntilNextLevel": 4678,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 4,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7797,\n' +
    '        "lastPlayTime": 1502396204000,\n' +
    '        "championPointsSinceLastLevel": 1797,\n' +
    '        "championPointsUntilNextLevel": 4803,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 75,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7542,\n' +
    '        "lastPlayTime": 1521669930000,\n' +
    '        "championPointsSinceLastLevel": 1542,\n' +
    '        "championPointsUntilNextLevel": 5058,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 114,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7395,\n' +
    '        "lastPlayTime": 1521476900000,\n' +
    '        "championPointsSinceLastLevel": 1395,\n' +
    '        "championPointsUntilNextLevel": 5205,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 2,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7367,\n' +
    '        "lastPlayTime": 1520537884000,\n' +
    '        "championPointsSinceLastLevel": 1367,\n' +
    '        "championPointsUntilNextLevel": 5233,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 412,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7332,\n' +
    '        "lastPlayTime": 1497296549000,\n' +
    '        "championPointsSinceLastLevel": 1332,\n' +
    '        "championPointsUntilNextLevel": 5268,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 91,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 7176,\n' +
    '        "lastPlayTime": 1488555550000,\n' +
    '        "championPointsSinceLastLevel": 1176,\n' +
    '        "championPointsUntilNextLevel": 5424,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 23,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 6608,\n' +
    '        "lastPlayTime": 1522445660000,\n' +
    '        "championPointsSinceLastLevel": 608,\n' +
    '        "championPointsUntilNextLevel": 5992,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 15,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 6605,\n' +
    '        "lastPlayTime": 1516671741000,\n' +
    '        "championPointsSinceLastLevel": 605,\n' +
    '        "championPointsUntilNextLevel": 5995,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 429,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 6575,\n' +
    '        "lastPlayTime": 1522356626000,\n' +
    '        "championPointsSinceLastLevel": 575,\n' +
    '        "championPointsUntilNextLevel": 6025,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 58,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 6465,\n' +
    '        "lastPlayTime": 1491859762000,\n' +
    '        "championPointsSinceLastLevel": 465,\n' +
    '        "championPointsUntilNextLevel": 6135,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 29,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 6224,\n' +
    '        "lastPlayTime": 1520540520000,\n' +
    '        "championPointsSinceLastLevel": 224,\n' +
    '        "championPointsUntilNextLevel": 6376,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 14,\n' +
    '        "championLevel": 3,\n' +
    '        "championPoints": 6140,\n' +
    '        "lastPlayTime": 1522450137000,\n' +
    '        "championPointsSinceLastLevel": 140,\n' +
    '        "championPointsUntilNextLevel": 6460,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 245,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 5834,\n' +
    '        "lastPlayTime": 1522770150000,\n' +
    '        "championPointsSinceLastLevel": 4034,\n' +
    '        "championPointsUntilNextLevel": 166,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 80,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 5395,\n' +
    '        "lastPlayTime": 1497968048000,\n' +
    '        "championPointsSinceLastLevel": 3595,\n' +
    '        "championPointsUntilNextLevel": 605,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 24,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 5080,\n' +
    '        "lastPlayTime": 1522774611000,\n' +
    '        "championPointsSinceLastLevel": 3280,\n' +
    '        "championPointsUntilNextLevel": 920,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 26,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 4954,\n' +
    '        "lastPlayTime": 1521242223000,\n' +
    '        "championPointsSinceLastLevel": 3154,\n' +
    '        "championPointsUntilNextLevel": 1046,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 20,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 4557,\n' +
    '        "lastPlayTime": 1495042397000,\n' +
    '        "championPointsSinceLastLevel": 2757,\n' +
    '        "championPointsUntilNextLevel": 1443,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 143,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 4287,\n' +
    '        "lastPlayTime": 1521150131000,\n' +
    '        "championPointsSinceLastLevel": 2487,\n' +
    '        "championPointsUntilNextLevel": 1713,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 86,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 4189,\n' +
    '        "lastPlayTime": 1502397876000,\n' +
    '        "championPointsSinceLastLevel": 2389,\n' +
    '        "championPointsUntilNextLevel": 1811,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 432,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 3877,\n' +
    '        "lastPlayTime": 1521156445000,\n' +
    '        "championPointsSinceLastLevel": 2077,\n' +
    '        "championPointsUntilNextLevel": 2123,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 17,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 3728,\n' +
    '        "lastPlayTime": 1502399472000,\n' +
    '        "championPointsSinceLastLevel": 1928,\n' +
    '        "championPointsUntilNextLevel": 2272,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 112,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 3522,\n' +
    '        "lastPlayTime": 1520536307000,\n' +
    '        "championPointsSinceLastLevel": 1722,\n' +
    '        "championPointsUntilNextLevel": 2478,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 18,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 3363,\n' +
    '        "lastPlayTime": 1508714046000,\n' +
    '        "championPointsSinceLastLevel": 1563,\n' +
    '        "championPointsUntilNextLevel": 2637,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 11,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 3174,\n' +
    '        "lastPlayTime": 1519084986000,\n' +
    '        "championPointsSinceLastLevel": 1374,\n' +
    '        "championPointsUntilNextLevel": 2826,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 41,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 3068,\n' +
    '        "lastPlayTime": 1511907480000,\n' +
    '        "championPointsSinceLastLevel": 1268,\n' +
    '        "championPointsUntilNextLevel": 2932,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 40,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2859,\n' +
    '        "lastPlayTime": 1485453610000,\n' +
    '        "championPointsSinceLastLevel": 1059,\n' +
    '        "championPointsUntilNextLevel": 3141,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 84,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2835,\n' +
    '        "lastPlayTime": 1482713818000,\n' +
    '        "championPointsSinceLastLevel": 1035,\n' +
    '        "championPointsUntilNextLevel": 3165,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 61,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2747,\n' +
    '        "lastPlayTime": 1488839783000,\n' +
    '        "championPointsSinceLastLevel": 947,\n' +
    '        "championPointsUntilNextLevel": 3253,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 55,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2714,\n' +
    '        "lastPlayTime": 1515172792000,\n' +
    '        "championPointsSinceLastLevel": 914,\n' +
    '        "championPointsUntilNextLevel": 3286,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 68,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2708,\n' +
    '        "lastPlayTime": 1522272261000,\n' +
    '        "championPointsSinceLastLevel": 908,\n' +
    '        "championPointsUntilNextLevel": 3292,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 8,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2582,\n' +
    '        "lastPlayTime": 1474674056000,\n' +
    '        "championPointsSinceLastLevel": 782,\n' +
    '        "championPointsUntilNextLevel": 3418,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 236,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2556,\n' +
    '        "lastPlayTime": 1490818545000,\n' +
    '        "championPointsSinceLastLevel": 756,\n' +
    '        "championPointsUntilNextLevel": 3444,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 35,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2555,\n' +
    '        "lastPlayTime": 1502472645000,\n' +
    '        "championPointsSinceLastLevel": 755,\n' +
    '        "championPointsUntilNextLevel": 3445,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 99,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2396,\n' +
    '        "lastPlayTime": 1522794322000,\n' +
    '        "championPointsSinceLastLevel": 596,\n' +
    '        "championPointsUntilNextLevel": 3604,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 13,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2292,\n' +
    '        "lastPlayTime": 1495040965000,\n' +
    '        "championPointsSinceLastLevel": 492,\n' +
    '        "championPointsUntilNextLevel": 3708,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 82,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2210,\n' +
    '        "lastPlayTime": 1522419531000,\n' +
    '        "championPointsSinceLastLevel": 410,\n' +
    '        "championPointsUntilNextLevel": 3790,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 38,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2022,\n' +
    '        "lastPlayTime": 1520534218000,\n' +
    '        "championPointsSinceLastLevel": 222,\n' +
    '        "championPointsUntilNextLevel": 3978,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 127,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 2021,\n' +
    '        "lastPlayTime": 1506727216000,\n' +
    '        "championPointsSinceLastLevel": 221,\n' +
    '        "championPointsUntilNextLevel": 3979,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 98,\n' +
    '        "championLevel": 2,\n' +
    '        "championPoints": 1848,\n' +
    '        "lastPlayTime": 1496925188000,\n' +
    '        "championPointsSinceLastLevel": 48,\n' +
    '        "championPointsUntilNextLevel": 4152,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 201,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1591,\n' +
    '        "lastPlayTime": 1501623643000,\n' +
    '        "championPointsSinceLastLevel": 1591,\n' +
    '        "championPointsUntilNextLevel": 209,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 107,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1543,\n' +
    '        "lastPlayTime": 1522441580000,\n' +
    '        "championPointsSinceLastLevel": 1543,\n' +
    '        "championPointsUntilNextLevel": 257,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 12,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1494,\n' +
    '        "lastPlayTime": 1511527079000,\n' +
    '        "championPointsSinceLastLevel": 1494,\n' +
    '        "championPointsUntilNextLevel": 306,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 103,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1406,\n' +
    '        "lastPlayTime": 1507322402000,\n' +
    '        "championPointsSinceLastLevel": 1406,\n' +
    '        "championPointsUntilNextLevel": 394,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 9,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1373,\n' +
    '        "lastPlayTime": 1520525419000,\n' +
    '        "championPointsSinceLastLevel": 1373,\n' +
    '        "championPointsUntilNextLevel": 427,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 62,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1325,\n' +
    '        "lastPlayTime": 1484959582000,\n' +
    '        "championPointsSinceLastLevel": 1325,\n' +
    '        "championPointsUntilNextLevel": 475,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 53,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1241,\n' +
    '        "lastPlayTime": 1462550210000,\n' +
    '        "championPointsSinceLastLevel": 1241,\n' +
    '        "championPointsUntilNextLevel": 559,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 90,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1199,\n' +
    '        "lastPlayTime": 1522789756000,\n' +
    '        "championPointsSinceLastLevel": 1199,\n' +
    '        "championPointsUntilNextLevel": 601,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 104,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1119,\n' +
    '        "lastPlayTime": 1467236996000,\n' +
    '        "championPointsSinceLastLevel": 1119,\n' +
    '        "championPointsUntilNextLevel": 681,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 266,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 1062,\n' +
    '        "lastPlayTime": 1513702083000,\n' +
    '        "championPointsSinceLastLevel": 1062,\n' +
    '        "championPointsUntilNextLevel": 738,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 85,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 948,\n' +
    '        "lastPlayTime": 1522772081000,\n' +
    '        "championPointsSinceLastLevel": 948,\n' +
    '        "championPointsUntilNextLevel": 852,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 117,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 922,\n' +
    '        "lastPlayTime": 1505550135000,\n' +
    '        "championPointsSinceLastLevel": 922,\n' +
    '        "championPointsUntilNextLevel": 878,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 238,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 856,\n' +
    '        "lastPlayTime": 1516668981000,\n' +
    '        "championPointsSinceLastLevel": 856,\n' +
    '        "championPointsUntilNextLevel": 944,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 223,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 855,\n' +
    '        "lastPlayTime": 1517779400000,\n' +
    '        "championPointsSinceLastLevel": 855,\n' +
    '        "championPointsUntilNextLevel": 945,\n' +
    '        "chestGranted": true,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 121,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 775,\n' +
    '        "lastPlayTime": 1506289770000,\n' +
    '        "championPointsSinceLastLevel": 775,\n' +
    '        "championPointsUntilNextLevel": 1025,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 420,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 760,\n' +
    '        "lastPlayTime": 1522777763000,\n' +
    '        "championPointsSinceLastLevel": 760,\n' +
    '        "championPointsUntilNextLevel": 1040,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 240,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 517,\n' +
    '        "lastPlayTime": 1491412029000,\n' +
    '        "championPointsSinceLastLevel": 517,\n' +
    '        "championPointsUntilNextLevel": 1283,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 164,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 359,\n' +
    '        "lastPlayTime": 1522797326000,\n' +
    '        "championPointsSinceLastLevel": 359,\n' +
    '        "championPointsUntilNextLevel": 1441,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 101,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 269,\n' +
    '        "lastPlayTime": 1522787577000,\n' +
    '        "championPointsSinceLastLevel": 269,\n' +
    '        "championPointsUntilNextLevel": 1531,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 136,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 219,\n' +
    '        "lastPlayTime": 1516238211000,\n' +
    '        "championPointsSinceLastLevel": 219,\n' +
    '        "championPointsUntilNextLevel": 1581,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 115,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 209,\n' +
    '        "lastPlayTime": 1510445591000,\n' +
    '        "championPointsSinceLastLevel": 209,\n' +
    '        "championPointsUntilNextLevel": 1591,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 31,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 198,\n' +
    '        "lastPlayTime": 1484947450000,\n' +
    '        "championPointsSinceLastLevel": 198,\n' +
    '        "championPointsUntilNextLevel": 1602,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 33,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 192,\n' +
    '        "lastPlayTime": 1499281427000,\n' +
    '        "championPointsSinceLastLevel": 192,\n' +
    '        "championPointsUntilNextLevel": 1608,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 19,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 181,\n' +
    '        "lastPlayTime": 1470488552000,\n' +
    '        "championPointsSinceLastLevel": 181,\n' +
    '        "championPointsUntilNextLevel": 1619,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 145,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 179,\n' +
    '        "lastPlayTime": 1520530247000,\n' +
    '        "championPointsSinceLastLevel": 179,\n' +
    '        "championPointsUntilNextLevel": 1621,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 77,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 177,\n' +
    '        "lastPlayTime": 1498221467000,\n' +
    '        "championPointsSinceLastLevel": 177,\n' +
    '        "championPointsUntilNextLevel": 1623,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 74,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 175,\n' +
    '        "lastPlayTime": 1506278489000,\n' +
    '        "championPointsSinceLastLevel": 175,\n' +
    '        "championPointsUntilNextLevel": 1625,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 141,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 175,\n' +
    '        "lastPlayTime": 1503345636000,\n' +
    '        "championPointsSinceLastLevel": 175,\n' +
    '        "championPointsUntilNextLevel": 1625,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 32,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 163,\n' +
    '        "lastPlayTime": 1449336540000,\n' +
    '        "championPointsSinceLastLevel": 163,\n' +
    '        "championPointsUntilNextLevel": 1637,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 3,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 159,\n' +
    '        "lastPlayTime": 1490294023000,\n' +
    '        "championPointsSinceLastLevel": 159,\n' +
    '        "championPointsUntilNextLevel": 1641,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 37,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 158,\n' +
    '        "lastPlayTime": 1522444119000,\n' +
    '        "championPointsSinceLastLevel": 158,\n' +
    '        "championPointsUntilNextLevel": 1642,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 157,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 155,\n' +
    '        "lastPlayTime": 1462619483000,\n' +
    '        "championPointsSinceLastLevel": 155,\n' +
    '        "championPointsUntilNextLevel": 1645,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 25,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 152,\n' +
    '        "lastPlayTime": 1513111153000,\n' +
    '        "championPointsSinceLastLevel": 152,\n' +
    '        "championPointsUntilNextLevel": 1648,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 36,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 148,\n' +
    '        "lastPlayTime": 1488836852000,\n' +
    '        "championPointsSinceLastLevel": 148,\n' +
    '        "championPointsUntilNextLevel": 1652,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 16,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 129,\n' +
    '        "lastPlayTime": 1498131664000,\n' +
    '        "championPointsSinceLastLevel": 129,\n' +
    '        "championPointsUntilNextLevel": 1671,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 5,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 122,\n' +
    '        "lastPlayTime": 1501700760000,\n' +
    '        "championPointsSinceLastLevel": 122,\n' +
    '        "championPointsUntilNextLevel": 1678,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 57,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 118,\n' +
    '        "lastPlayTime": 1501931919000,\n' +
    '        "championPointsSinceLastLevel": 118,\n' +
    '        "championPointsUntilNextLevel": 1682,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    },\n' +
    '    {\n' +
    '        "playerId": 27411419,\n' +
    '        "championId": 60,\n' +
    '        "championLevel": 1,\n' +
    '        "championPoints": 87,\n' +
    '        "lastPlayTime": 1519990734000,\n' +
    '        "championPointsSinceLastLevel": 87,\n' +
    '        "championPointsUntilNextLevel": 1713,\n' +
    '        "chestGranted": false,\n' +
    '        "tokensEarned": 0\n' +
    '    }\n' +
    ']');
}
