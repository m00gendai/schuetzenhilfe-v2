export function score300mA_5(hit:number){
    if(hit <= 0){
        return 0
    }
    if(hit > 0 && hit <= 20){
        return 1
    }
    if(hit > 20 && hit <=40){
        return 2
    }
    if(hit > 40 && hit <= 60){
        return 3
    }
    if(hit > 60 && hit <= 80){
        return 4
    }
    if(hit > 80){
        return 5
    }
    return hit
}

export function score25mRapid(hit:number){
    if(hit < 10){
        return 0
    }
    if(hit >= 10 && hit <= 24){
        return 5
    }
    if(hit > 24 && hit <= 38){
        return 6
    }
    if(hit > 38 && hit <= 52){
        return 7
    }
    if(hit > 52 && hit <= 66){
        return 8
    }
    if(hit > 66 && hit <= 80){
        return 9
    }
    if(hit > 80){
        return 10
    }
    return hit
}

export function score2550mPrecision(hit:number){
    if(hit < 10){
        return 0
    }
    if(hit >=10 && hit <= 19){
        return 1
    }
    if(hit >=19 && hit <= 28){
        return 2
    }
    if(hit >=28 && hit <= 37){
        return 3
    }
    if(hit >=37 && hit <= 46){
        return 4
    }
    if(hit >=46 && hit <= 55){
        return 5
    }
    if(hit >=55 && hit <= 64){
        return 6
    }
    if(hit >=64 && hit <= 73){
        return 7
    }
    if(hit >=73 && hit <= 82){
        return 8
    }
    if(hit >=82 && hit <= 91){
        return 9
    }
    if(hit >=91){
        return 10
    }
    return hit
}

export function score50mP_4(hit:number){
    if(hit <= 0){
        return 0
    }
    if(hit > 0 && hit <= 40){
        return 1
    }
    if(hit > 40 && hit <= 70){
        return 2
    }
    if(hit > 70 && hit <= 80){
        return 3
    }
    if(hit > 80){
        return 4
    }
    return hit
}

export function score50mRifle(hit:number){
    if(hit < 5){
        return 0
    }
    if(hit >= 5 && hit <15){
        return 1
    }
    if(hit >= 15 && hit <25){
        return 2
    }
    if(hit >= 25 && hit <35){
        return 3
    }
    if(hit >= 35 && hit <45){
        return 4
    }
    if(hit >= 45 && hit <55){
        return 5
    }
    if(hit >= 55 && hit <65){
        return 6
    }
    if(hit >= 65 && hit <75){
        return 7
    }
    if(hit >= 75 && hit <85){
        return 8
    }
    if(hit >= 85 && hit <95){
        return 9
    }
    if(hit >= 95){
        return 10
    }
    return hit
}

export function score10mAirRifle(hit:number){
    if(hit < 55){
        return 0
    }
    if(hit >= 55 && hit <60){
        return 1
    }
    if(hit >= 60 && hit <65){
        return 2
    }
    if(hit >= 65 && hit <70){
        return 3
    }
    if(hit >= 70 && hit <75){
        return 4
    }
    if(hit >= 75 && hit <80){
        return 5
    }
    if(hit >= 80 && hit <85){
        return 6
    }
    if(hit >= 85 && hit <90){
        return 7
    }
    if(hit >= 90 && hit <95){
        return 8
    }
    if(hit >= 95 && hit <99){
        return 9
    }
    if(hit >= 99){
        return 10
    }
    return hit
}

export function score10mAirPistol(hit:number){
    if(hit < 7){
        return 0
    }
    if(hit >=7 && hit <= 17){
        return 1
    }
    if(hit >=17 && hit <= 27){
        return 2
    }
    if(hit >=27 && hit <= 36){
        return 3
    }
    if(hit >=36 && hit <= 46){
        return 4
    }
    if(hit >=46 && hit <= 55){
        return 5
    }
    if(hit >=55 && hit <= 65){
        return 6
    }
    if(hit >=65 && hit <= 74){
        return 7
    }
    if(hit >=74 && hit <= 84){
        return 8
    }
    if(hit >=84 && hit <= 93){
        return 9
    }
    if(hit > 93){
        return 10
    }
    return hit
}