const KEYS = {
    SCENES:{
        Load: "Load",
        Menu: "Menu",
        Game: "Game",
        Pause: "Pause",
    },
    IMAGES:{
        Background:"Background",
    },
    SPRITES:{
        Player: "Player",
        RedShip: "SmallRedShip",
        BigRedShip: "BigRedShip",
        Enemy: "Enemy",
        Duck: "MuscleDuck",
        Missle: "MissleProjectile",
        YellowDuck: "YellowDuck",
        GreenDuck: "GreenDuck",
        PinkDuck: "PinkDuck",
        PurpleDuck: "PurpleDuck",
    },
    ANIMATIONS:{
        Missle:"ShootingAnimation",
    },
    AUDIO:{
        Intro: "IntroBattle",
        Battle:"BattleMusic",
        Fire:  "BulletSound",
    }
}

const enemies = [KEYS.SPRITES.YellowDuck, KEYS.SPRITES.GreenDuck, KEYS.SPRITES.PinkDuck, KEYS.SPRITES.PurpleDuck];
export  { KEYS, enemies }