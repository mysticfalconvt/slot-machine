// if current credits are less than 40 cheat percentage is 0, if 40-60 then .3 if over 60 then .6
export function getCheatPercentage(currentCredits) {
    if (currentCredits < 40) {
        return 0
    } else if (currentCredits < 60) {
        return .3
    } else {
        return .6
    }
}

// check if each element in roll is the same
export function isWinningRoll(currentSet) {
    for (let i = 0; i < currentSet.length; i++) {
        if (currentSet[i] !== currentSet[0]) {
            return false
        }
    }
    return true
}

export function getWinningReward(roll) {
    if (!isWinningRoll(roll)) {
        return 0
    }
    if (roll[0] === 'cherry') {
        return 10
    } else if (roll[0] === 'lemon') {
        return 20
    } else if (roll[0] === 'orange') {
        return 30
    } else if (roll[0] === 'watermelon') {
        return 40
    }
}

export function cashOutButtonEffects() {
    // 50% chance that it moves
    const doesMove = Math.random() < .5;

    //40% chance that it is unclickable
    const isClickable = Math.random() > .6;

    //random direction to move up, down, left, right
    const directionToMove = !doesMove ? "none" : Math.random() < .5 ? 'up' : Math.random() < .5 ? 'down' : Math.random() < .5 ? 'left' : 'right';
    console.log(isClickable)
    return { doesMove, isClickable, directionToMove }
}