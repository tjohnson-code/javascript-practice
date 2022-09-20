const textElement = document.getElementById('text')
const choiceButtonsElement = document.getElementById('choice-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text
while (choiceButtonsElement.firstChild) {
    choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
}

textNode.choices.forEach(choice => {
    if (showChoice(choice)) {
        const button = document.createElement('button')
        button.innerText = choice.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectChoice(choice))
        choiceButtonsElement.appendChild(button)
    }
})

}

function showChoice(choice) {
    return choice.requiredState == null || choice.requiredState(state)
}

function selectChoice(choice) {
    const nextTextNodeId = choice.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, choice.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up to a hot sensation in your left hand and look down to discover a burning key.',
        choices: [
            {
                text: 'Plunge your hand into the nearby lake and pocket the now cooled key.',
                setState: { cooledKey: true },
                nextText: 2
            },
            {
                text: 'Scream out in pain and drop the key into the cold lake; watching it fade away, as it drops to the depths below.',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'After travelling, for what feels like hours due to the pain from your blistering hand, you stumble across an aged man who seems in the mood to trade.',
        choices: [
            {
                text: 'The man offers you an ointment that will cure the burn. You trade him the key you found, and immediately apply the ointment. It starts to make a sort of gurgling sound, and the man mumbles something under his breathe as you walk away.',
                requiredState: (currentState) => currentState.cooledKey,
                setState: { cooledKey: false, gurglingOintment: true},
                nextText: 3
            },
            {
                text: 'TBC',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, cookieSheetShield: true},
                nextText: 3
            },
            {
                text: 'You notice the man eyeing your newly found key. Ignore his requests to trade and push passed him.',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'With the merchant long gone and your feet blistering, you find a small village with a Haunted Manor looming over it on a hill.',
        choices: [
            {
                text: 'The ghosts are calling to you - explore the Haunted Manor',
                nextText: 4
            },
            {
                text: 'Go to the brothel and ask for a room',
                nextText: 5
            },
            {
                text: 'Fall on your face and pass out',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You find a bed in the Haunted Manor and fall asleep. Never to wake again - the ghosts have consumed your tired soul',
        choices: [
            {
                text: 'You dead! Try again?',
                nextText: -1
            }
        ]
    }
]

startGame()