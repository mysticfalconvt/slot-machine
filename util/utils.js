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

