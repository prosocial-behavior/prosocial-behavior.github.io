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
    {
        type: 'info',
        image: 'images/cards/12.jpg',
        title: 'Критично мислене',
        text: 'Да премисляме нещата и да ги разглеждаме от всички страни; да не правим прибързани заключения; да можем да променим мнението си в светлината на доказателства; да претегляме всички доказателства справедливо.',
        examples: [
            'Да изслушваме какво мислят другите хора',
            'Да мислим критично',
            'Да разглеждаме нещата от всички страни, а не само от нашата',
            'Да не правим прибързани заключения'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/56.jpg',
        answerOne: 'Критично мислене',
        answerTwo: 'Липса на критично мислене',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/57.jpg',
        answerOne: 'Критично мислене',
        answerTwo: 'Липса на критично мислене',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/58.jpg',
        answerOne: 'Критично мислене',
        answerTwo: 'Липса на критично мислене',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/59.jpg',
        answerOne: 'Критично мислене',
        answerTwo: 'Липса на критично мислене',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/60.jpg',
        answerOne: 'Критично мислене',
        answerTwo: 'Липса на критично мислене',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/13.jpg',
        title: 'Доброта',
        text: 'Да правим услуги и добри дела за другите; да им помагаме; да се грижим за тях; да бъдем щедри и грижовни към себе си, към другите и към света.',
        examples: [
            'Да направим нещо хубаво за някого другиго',
            'Да бъдем щедри и безкористни',
            'Да помогнем на някого, когато е болен',
            'Да направим комплимент на някого'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/61.jpg',
        answerOne: 'Доброта',
        answerTwo: 'Липса на доброта',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/62.jpg',
        answerOne: 'Доброта',
        answerTwo: 'Липса на доброта',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/63.jpg',
        answerOne: 'Доброта',
        answerTwo: 'Липса на доброта',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/64.jpg',
        answerOne: 'Доброта',
        answerTwo: 'Липса на доброта',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/65.jpg',
        answerOne: 'Доброта',
        answerTwo: 'Липса на доброта',
        correctAnswer: 'one'
    },
    {
        type: 'info',
        image: 'images/cards/14.jpg',
        title: 'Лидерство',
        text: 'Да насърчаваме групата, на която сме член, да върши нещата; да поддържаме добри взаимоотношения в групата; да организираме групови дейности и да се грижим те да се случват.',
        examples: [
            'Да насърчаваме и мотивираме другите',
            'Да даваме добър пример',
            'Да запалваме ентусиазъм у другите за дадена дейност',
            'Да изслушваме мненията и чувствата на членовете на групата',
            'Да бъдем добри организатори'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/66.jpg',
        answerOne: 'Лидерство',
        answerTwo: 'Липса на лидерство',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/67.jpg',
        answerOne: 'Лидерство',
        answerTwo: 'Липса на лидерство',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/68.jpg',
        answerOne: 'Лидерство',
        answerTwo: 'Липса на лидерство',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/69.jpg',
        answerOne: 'Лидерство',
        answerTwo: 'Липса на лидерство',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/70.jpg',
        answerOne: 'Лидерство',
        answerTwo: 'Липса на лидерство',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/15.jpg',
        title: 'Любов',
        text: 'Да ценим близките взаимоотношения с другите, особено тези, в които има взаимност в споделянето и грижата; да бъдем близо до хората; да ценим приятелите и семейството.',
        examples: [
            'Да бъдем добри слушатели',
            'Да бъдем добри приятели',
            'Да бъдем надеждни и да се доверяваме на другите',
            'Да прегръщаме хората, които обичаме',
            'Да обичаме да сме близо до хората'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/71.jpg',
        answerOne: 'Любов',
        answerTwo: 'Липса на любов',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/72.jpg',
        answerOne: 'Любов',
        answerTwo: 'Липса на любов',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/73.jpg',
        answerOne: 'Любов',
        answerTwo: 'Липса на любов',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/74.jpg',
        answerOne: 'Любов',
        answerTwo: 'Липса на любов',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/75.jpg',
        answerOne: 'Любов',
        answerTwo: 'Липса на любов',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/16.jpg',
        title: 'Любов към ученето',
        text: 'Да усвояваме нови умения, теми и области на знание, сами или формално; свързано с любопитството, но отиващо по-далеч, като описва склонността да добавяме систематично към това, което знаем; да се интересуваме как работят нещата и да искаме да научим повече.',
        examples: [
            'Да задаваме много въпроси',
            'Да обичаме да решаваме проблеми',
            'Да четем много книги',
            'Да казваме "кажи ми повече за това, моля"',
            'Да бъдем любопитни и заинтересовани от света'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/76.jpg',
        answerOne: 'Любов към ученето',
        answerTwo: 'Липса на любов към ученето',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/77.jpg',
        answerOne: 'Любов към ученето',
        answerTwo: 'Липса на любов към ученето',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/78.jpg',
        answerOne: 'Любов към ученето',
        answerTwo: 'Липса на любов към ученето',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/79.jpg',
        answerOne: 'Любов към ученето',
        answerTwo: 'Липса на любов към ученето',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/80.jpg',
        answerOne: 'Любов към ученето',
        answerTwo: 'Липса на любов към ученето',
        correctAnswer: 'two'
    },
    {
        type: 'info',
        image: 'images/cards/17.jpg',
        title: 'Постоянство',
        text: 'Да завършваме започнатото; да се упорстваме в дадено действие въпреки препятствията; да "довеждаме нещата докрай"; да изпитваме удоволствие от завършването на задачи; да се справяме с нещата дори когато са трудни.',
        examples: [
            'Да си казваме "Мога да го направя!", когато нещо е трудно',
            'Да завършваме това, което сме започнали',
            'Да обичаме да довеждаме нещата до край'
        ]
    },
    {
        type: 'question',
        image: 'images/questions/81.jpg',
        answerOne: 'Постоянство',
        answerTwo: 'Липса на постоянство',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/82.jpg',
        answerOne: 'Постоянство',
        answerTwo: 'Липса на постоянство',
        correctAnswer: 'two'
    },
    {
        type: 'question',
        image: 'images/questions/83.jpg',
        answerOne: 'Постоянство',
        answerTwo: 'Липса на постоянство',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/84.jpg',
        answerOne: 'Постоянство',
        answerTwo: 'Липса на постоянство',
        correctAnswer: 'one'
    },
    {
        type: 'question',
        image: 'images/questions/85.jpg',
        answerOne: 'Постоянство',
        answerTwo: 'Липса на постоянство',
        correctAnswer: 'one'
    },
];

export default data;