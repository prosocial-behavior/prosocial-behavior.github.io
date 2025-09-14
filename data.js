const data = [
    {
        type: 'init'
    },
    {
        type: 'init_1'
    },
    {
        type: 'info',
        image: 'images/cards/1.jpg',
        title: 'Оценяване на красотата и съвършенството',
        text: 'Да забележиш и оцениш красотата, превъзходството и/или умелото изпълнение в различни области на живота, от природата до изкуството, математиката, науката и ежедневния опит. Да се ​​наслаждаваш на това, което виждаш в себе си, в другите и в света.',
        examples: [
            'Да обичаш да си сред природата',
            'Да оценяваш, когато нещата са добре направени',
            'Да намираш и откриваш красотата във всички области на живота, от природата до изкуствата, математиката и науката'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/1.jpg',
        answerOne: 'Оценяване на красотата',
        answerTwo: 'Неоценяване на красотата',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/2.jpg',
        answerOne: 'Оценяване на красотата',
        answerTwo: 'Неоценяване на красотата',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/3.jpg',
        answerOne: 'Оценяване на красотата',
        answerTwo: 'Неоценяване на красотата',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/4.jpg',
        answerOne: 'Оценяване на красотата',
        answerTwo: 'Неоценяване на красотата',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/5.jpg',
        answerOne: 'Оценяване на красотата',
        answerTwo: 'Неоценяване на красотата',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/2.jpg',
        title: 'Смелост',
        text: 'Не се отдръпваш от заплаха, предизвикателство, трудност или болка; отстояваш това, което е правилно, дори и да има опозиция; действаш според убежденията си, дори и да са непопулярни; включва физическа смелост, но не се ограничава само до нея. Да поставиш цели и да се справяш със страховете си.',
        examples: [
            'Да не се отказваш, когато нещата станат трудни',
            'Да притежаваш кураж',
            'Да приемаш предизвикателства',
            'Да предприемаш действия, с които да помагаш на другите'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/6.jpg',
        answerOne: 'Смелост',
        answerTwo: 'Липса на смелост',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/7.jpg',
        answerOne: 'Смелост',
        answerTwo: 'Липса на смелост',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/8.jpg',
        answerOne: 'Смелост',
        answerTwo: 'Липса на смелост',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/9.jpg',
        answerOne: 'Смелост',
        answerTwo: 'Липса на смелост',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/10.jpg',
        answerOne: 'Смелост',
        answerTwo: 'Липса на смелост',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/3.jpg',
        title: 'Креативност',
        text: 'Мислене за нови и продуктивни начини за концептуализиране и правене на неща; включва художествени постижения, но не се ограничава до тях. Мислене за нови начини за правене на неща.',
        examples: [
            'Да обичаш да използваш въображението си, за да решаваш различни проблеми',
            'Да опитваш нови и вълнуващи начини за правене на нещата',
            'Да бъдеш артистичен',
            'Да приговряш нова и по-сложна "рецепта"'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/11.jpg',
        answerOne: 'Креативност',
        answerTwo: 'Липса на креативност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/12.jpg',
        answerOne: 'Креативност',
        answerTwo: 'Липса на креативност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/13.jpg',
        answerOne: 'Креативност',
        answerTwo: 'Липса на креативност',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/14.jpg',
        answerOne: 'Креативност',
        answerTwo: 'Липса на креативност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/15.jpg',
        answerOne: 'Креативност',
        answerTwo: 'Липса на креативност',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/4.jpg',
        title: 'Любопитство',
        text: 'Проявяване на интерес към текущия опит само по себе си; намиране на предмети и теми за завладяващи; изследване и откриване. Желание за откриване на нови неща.',
        examples: [
            'Да проучваш нови теми',
            'Да обсъждаш с други хора какво те мислят по различни въпроси',
            'Да си отворен към нови експерименти и преживявания',
            'Да обичаш да изследваш и откриваш нови неща'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/16.jpg',
        answerOne: 'Любопитсвто',
        answerTwo: 'Липса на любопитсвто',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/17.jpg',
        answerOne: 'Любопитсвто',
        answerTwo: 'Липса на любопитсвто',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/18.jpg',
        answerOne: 'Любопитсвто',
        answerTwo: 'Липса на любопитсвто',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/19.jpg',
        answerOne: 'Любопитсвто',
        answerTwo: 'Липса на любопитсвто',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/20.jpg',
        answerOne: 'Любопитсвто',
        answerTwo: 'Липса на любопитсвто',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/5.jpg',
        title: 'Справедливост',
        text: 'Да се ​​отнасяме към всички хора по един и същи начин според понятията за справедливост и правосъдие; да не позволяваме на чувствата да повлияят на решенията за другите; да даваме на всеки честен шанс и възможност.',
        examples: [
            'Да се борим за равенство',
            'Да се застъпваме за другите, когато е необходимо',
            'Да вярваме, че всеки е добър в нещо',
            'Да се отнасяме с всички еднакво',
            'Да даваме шанс, когато е необходимо'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/21.jpg',
        answerOne: 'Справедливост',
        answerTwo: 'Несправедливост',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/22.jpg',
        answerOne: 'Справедливост',
        answerTwo: 'Несправедливост',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/23.jpg',
        answerOne: 'Справедливост',
        answerTwo: 'Несправедливост',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/24.jpg',
        answerOne: 'Справедливост',
        answerTwo: 'Несправедливост',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/25.jpg',
        answerOne: 'Справедливост',
        answerTwo: 'Несправедливост',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/6.jpg',
        title: 'Прошка',
        text: 'Да прощаваме на онези, които са сгрешили; да приемаме недостатъците на другите; да даваме на хората втори шанс вместо да не сме отмъстителни. Да прощаваме, когато някой е направил грешка.',
        examples: [
            'Да сме мили дори когато някой е направил грешка',
            'Да се оптваме да не се ядосваме',
            'Да даваме втори шанс',
            'Да не таим злоба'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/26.jpg',
        answerOne: 'Прошка',
        answerTwo: 'Липса на прошка',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/27.jpg',
        answerOne: 'Прошка',
        answerTwo: 'Липса на прошка',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/28.jpg',
        answerOne: 'Прошка',
        answerTwo: 'Липса на прошка',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/29.jpg',
        answerOne: 'Прошка',
        answerTwo: 'Липса на прошка',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/30.jpg',
        answerOne: 'Прошка',
        answerTwo: 'Липса на прошка',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/7.jpg',
        title: 'Благодарност',
        text: 'Да бъдеш осъзнати и благодарни за добрите неща, които се случват; да отделяме време, за да изразим благодарност. Да разпознаваме добрите неща в и извън живота си.',
        examples: [
            'Да казваме "Благодаря"',
            'Да бъдем признателни',
            'Да забелязваме малките хубави неща в живота'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/31.jpg',
        answerOne: 'Благодарност',
        answerTwo: 'Липса на благодарност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/32.jpg',
        answerOne: 'Благодарност',
        answerTwo: 'Липса на благодарност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/33.jpg',
        answerOne: 'Благодарност',
        answerTwo: 'Липса на благодарност',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/34.jpg',
        answerOne: 'Благодарност',
        answerTwo: 'Липса на благодарност',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/35.jpg',
        answerOne: 'Благодарност',
        answerTwo: 'Липса на благодарност',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/8.jpg',
        title: 'Честност',
        text: 'Да казваме на истината и да поемаме отговорност за гласа и действията си.',
        examples: [
            'Да казваме истината',
            'Да казваме това, което мислим',
            'Да спазваме обещанията си към другите',
            'Да си признаваме, когато грешим',
            'Да действаме с почтеност'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/36.jpg',
        answerOne: 'Честност',
        answerTwo: 'Липса на честност',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/37.jpg',
        answerOne: 'Честност',
        answerTwo: 'Липса на честност',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/38.jpg',
        answerOne: 'Честност',
        answerTwo: 'Липса на честност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/39.jpg',
        answerOne: 'Честност',
        answerTwo: 'Липса на честност',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/40.jpg',
        answerOne: 'Честност',
        answerTwo: 'Липса на честност',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/9.jpg',
        title: 'Надежда',
        text: 'Да очакваме най-доброто от бъдещето и да работим усилено, за да го постигнем. Да вярваме, че едно добро бъдеще е нещо, което можем да постигнем; да бъдем позитивни',
        examples: [
            'Да очакваме най-доброто',
            'Да бъдем оптимистични',
            'Да вярваме, че нещата могат да се подобрят в трудни моменти'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/41.jpg',
        answerOne: 'Надежда',
        answerTwo: 'Липса на надежда',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/42.jpg',
        answerOne: 'Надежда',
        answerTwo: 'Липса на надежда',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/43.jpg',
        answerOne: 'Надежда',
        answerTwo: 'Липса на надежда',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/44.jpg',
        answerOne: 'Надежда',
        answerTwo: 'Липса на надежда',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/45.jpg',
        answerOne: 'Надежда',
        answerTwo: 'Липса на надежда',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/10.jpg',
        title: 'Смирение',
        text: 'Да оставим постиженията ни да говорят сами за себе си; да не се смятаме за по-специални, отколкото сме в действителност. Да осъзнаваме своите силни и слаби страни.',
        examples: [
            'Да обръщаме внимание на другите',
            'Да не се хвалим с постиженията си прекалено много',
            'Да отдаваме заслуги на другите, когато работим заедно',
            'Да бъдем скромни'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/46.jpg',
        answerOne: 'Смирение',
        answerTwo: 'Липса на смирение',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/47.jpg',
        answerOne: 'Смирение',
        answerTwo: 'Липса на смирение',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/48.jpg',
        answerOne: 'Смирение',
        answerTwo: 'Липса на смирение',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/49.jpg',
        answerOne: 'Смирение',
        answerTwo: 'Липса на смирение',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/50.jpg',
        answerOne: 'Смирение',
        answerTwo: 'Липса на смирение',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/11.jpg',
        title: 'Смирение',
        text: 'Да обичаме да се смеем и да се закачаме; да носим усмивки на другите хора; да виждаме светлата страна на нещата; да караме другите да се смеят и усмихват.',
        examples: [
            'Да виждаме смешната страна на нещата',
            'Да обичаме да правим шеги',
            'Да обичаме да се смеем'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/51.jpg',
        answerOne: 'Хумор',
        answerTwo: 'Липса на хумор',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/52.jpg',
        answerOne: 'Хумор',
        answerTwo: 'Липса на хумор',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/53.jpg',
        answerOne: 'Хумор',
        answerTwo: 'Липса на хумор',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/54.jpg',
        answerOne: 'Хумор',
        answerTwo: 'Липса на хумор',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/55.jpg',
        answerOne: 'Хумор',
        answerTwo: 'Липса на хумор',
        correctAnswer: 'one'
    },
];

export default data;