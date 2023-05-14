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