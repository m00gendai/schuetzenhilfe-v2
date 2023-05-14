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
}