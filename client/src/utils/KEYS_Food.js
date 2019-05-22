const KEYS_Food = {
    SCENES:{
        Load: "Load",
        Menu: "Menu",
        Game: "Game",
        Pause: "Pause",
    },
    IMAGES:{
        Stars:"StarMap",
    },
    SPRITES:{
        GreenShip: "GreenShip",
        Enemy: "Enemy",
        Missle: "MissleProjectile",
        Taco: "Taco",
        Burger: "Burger",
        HotDog: "HotDog",
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

const enemies_Food = [KEYS_Food.SPRITES.Taco, KEYS_Food.SPRITES.Burger, KEYS_Food.SPRITES.HotDog];
export  { KEYS_Food, enemies_Food }