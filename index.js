const minutes = 11
const seconds = 12
const time = minutes * 60 + seconds
const wrapSize = 37
const cueSize = 1 + wrapSize * 2 // newline + 2 lines

let data = JSON.parse(input)

let output = []

const segments = data.results.length
const segLen = time / segments
let segTimeCount = 0
let segCounter = 0

for (let i = 0; i < segments; i++) {
    const words = data.results[i].alternatives[0].transcript.split(' ')
    let cues = []
    let nextCue = words[0]
    let line1 = true
    // create cues
    for (let j = 1, wordsLen = words.length; j < wordsLen; j++) {
        if (line1) {
            let temp = `${nextCue} ${words[j]}`
            if (temp.length <= wrapSize) {
                nextCue = temp
            } else {
                nextCue = `${nextCue}\\n${words[j]}`
                line1 = false
            }
        } else {
            let temp = `${nextCue} ${words[j]}`
            if (temp.length <= cueSize) {
                nextCue = temp
            } else {
                cues.push(nextCue)
                nextCue = words[j]
                line1 = true
            }
        }
    }
    cues.push(nextCue)
    const cuesNum = cues.length
    const cueTime = segLen / cuesNum
    let segCues = []
    for (let cueId = 0; cueId < cuesNum; cueId++) {
        segCues.push({
            text: cues[cueId].trim(),
            start: segTimeCount + cueId * cueTime,
            end: segTimeCount + (cueId + 1) * cueTime,
            identifier: `${segCounter}`,
            styles: ''
        })
        segCounter++
    }
    output = output.concat(segCues)
    segTimeCount += segLen
}

const jsOut = {
    valid: true,
    cues: output
}

console.log(JSON.stringify(jsOut))
