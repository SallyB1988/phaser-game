const KEYS_Cage = {
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
        Enemy: "Enemy",
        Missle: "MissleProjectile",
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

const enemies_Cage = [KEYS_Cage.SPRITES.Enemy];
export  { KEYS_Cage, enemies_Cage }