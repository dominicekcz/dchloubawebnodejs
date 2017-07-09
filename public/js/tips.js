$(() => {
    firstAtiTip()
    changeAtiTips()
})
const atiWords = [
    {
        pageName: 'index',
        welcomeWords: ['Zdravím, jmenuji se Ati.', 'Indikátor vás vždy informuje o novinkách.', 'Koukněme se, co je nového...'],
        randomWords: []
    },
    {
        pageName: 'blog',
        welcomeWords: ['Článek, článek a zase článek'],
        randomWords: []
    },
    {
        pageName: 'kontakt',
        welcomeWords: ['Kontaktuj Dominika skrze formulář.', 'Nebo prostě použij některou ze sociálních sítí...'],
        randomWords: []
    },
    {
        pageName: 'ati',
        welcomeWords: ['Tak tady bydlím.', 'Tohle tě naučí, jak máš se mnou komunikovat.', 'Samozřejmě slušně!'],
        randomWords: []
    },
    {
        pageName: 'spravaclanku',
        welcomeWords: ['Správa článků'],
        randomWords: []
    },
    {
        pageName: 'spravazprav',
        welcomeWords: ['Správa zpráv'],
        randomWords: []
    },
    {
        pageName: 'ch404',
        welcomeWords: ['Stránku jsem nemohl najít!', 'Opravdu jsem se koukal všude...', 'Asi neexistuje.'],
        randomWords: []
    },
    {
        pageName: 'ch403',
        welcomeWords: ['Sorry jako, ale tady nemáš co pohledávat.', 'Ať už jsi pryč...'],
        randomWords: []
    }
]

let getAtiTipIndex = () => {
    let link = window.location.pathname.replace("/", "")
    for (let i = 0; i < atiWords.length; i++) {
        if (link == atiWords[i].pageName) return i
        else if (link == '') return 0
    }
}

let firstAtiTip = () => {
    const atiWordsBlock = atiWords[getAtiTipIndex()]
    $('div#tipsContainer span#tipsText').html(atiWordsBlock.welcomeWords[0])
}

let changeAtiTips = () => {
    const atiWordsBlock = atiWords[getAtiTipIndex()]
    let wordIndex = -1
    let repeatWelcomeWords = setInterval(() => {
        if (wordIndex < atiWordsBlock.welcomeWords.length - 1) wordIndex++
        else clearInterval(repeatWelcomeWords)
        $('div#tipsContainer span#tipsText').transition({
            opacity: 0
        }, 500, 'easeOutExpo')
        setTimeout(() => {
            $('div#tipsContainer span#tipsText').transition({
                opacity: 1
            }, 500, 'easeOutExpo').html(atiWordsBlock.welcomeWords[wordIndex])
        }, 500)
    }, 5000)
}
