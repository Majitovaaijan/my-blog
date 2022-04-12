export const BASE_URL = 'http://localhost:3000'

export const posts = [
    {
        id:1,
        user:{
            userImg:"https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
            name:"Kim",
            data:new Date().toTimeString()
        },
        tag:["Научно популярное,", "Астрономия",],
        title:"Китайские исследователи плотно изучают образцы лунного грунта, привезённые «Чанъэ-5»",
        titleDesc:"Научно-популярное,Астрономия",
        date:"15.03.2022",
        desc:"В конце 2020 года автоматическая межпланетная станция «Чанъэ-5» доставила на Землю 1,7 кг лунного базальта. Вскоре 1,75 гр были распределены между 31 отобранными научными проектами в Китае. За последние полгода опубликовано 6 научных работ по изучению образцов, ещё шесть были представлены на Lunar And Planetary Science Conference в Хьюстоне в США.",
        imageUrl:"https://habrastorage.org/getpro/habr/upload_files/949/99a/516/94999a5162fff54ed40f4660af66f23e.png",
        countComments:"0",

    },
    {
        id:2,
        user:{
            userImg:"https://habrastorage.org/r/w32/getpro/habr/avatars/bcd/9c7/270/bcd9c7270c0727e164ac404a7f929971.jpg",
            name:'Dan Seo',
            data:new Date().toTimeString()
        },

        tag: ["Компьютерное железо,", "Процессоры"],
        title:"AMD подтвердила, что Ryzen 7 5800X3D не поддерживает разгон",
        titleDesc:"Компьютерное железо, Процессоры",
        date:"17.03.2022",
        desc:"Ограничения, как объясняет Халлок, были необходимы. Напряжение Ryzen 7 5800X3D не превышает 1,35 В, и на данный момент этот показатель рискованно обходить из-за новизны технологии 3D V-Cache. Поскольку архитектура все еще находится в стадии разработки, разгон может быть опасен. ",
        imageUrl:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/a7e/ec9/a6f/a7eec9a6f7dd49e0b853c3332f364ae2.jpg",
        countComments:"14",

    }
]

export const popularPosts = [
    {
        imageUrl:"https://www.w3schools.com/w3images/workshop.jpg",
        title:"Lorem",
        subTitle:"Sed mattis nunc"
    },
    {
        imageUrl:"https://www.w3schools.com/w3images/gondol.jpg",
        title:"Ipsum",
        subTitle:"Praes tinci sed"
    },
    {
        imageUrl:"https://www.w3schools.com/w3images/skies.jpg",
        title:"Lorem",
        subTitle:"Sed mattis nunc"
    },
    {
        imageUrl:"https://www.w3schools.com/w3images/rock.jpg",
        title:"Mingsum",
        subTitle:"Lorem ipsum dipsum"
    },
]

export const tags = [
    {
        tag:"New York"
    },
    {
        tag:"London"
    },
    {
        tag:"IKEA"
    },
    {
        tag:"NORWAY"
    },
    {
        tag:"DIY"
    },
    {
        tag:"Ideas"
    },
    {
        tag:"Baby"
    },
    {
        tag:"Family"
    },
    {
        tag:"News"
    },
    {
        tag:"Clothing"
    },
    {
        tag:"Shopping"
    },
    {
        tag:"Sports"
    },
    {
        tag:"Games"
    }
]

export const comments = [
    {
        id: 0,
        img: "https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%82%D0%B0-%D0%B2-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%BE%D0%B9-%D1%80%D0%B0%D0%BC%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-141764869.jpg",
        name: 'Aijan Aidarova,  3 месяца назад',
        comment: 'Разве Браге работал с оптическими инструментами? Вроде бы у него были только угломерные приборы, а первый телескоп создал Галилей, уже после смерти Браге. Или я не прав?А за статью спасибо, было интересно почитать. А таблица Менделеева с источниками происхождения элементов - вообще бомба.'
    },
    {
        id: 1,
        img: "https://i.pinimg.com/originals/f0/c7/29/f0c729013ede15a59a7dd9d1f1ce2ceb.jpg",
        name: 'Aigerim Bekbolotova,  4 месяца назад',
        comment: 'Мне кажется, упущена одна важная вещь, которая объясняет, почему сверхновые настолько значимы. Если грубо, есть сверхновые типа Ia и все остальные, не-Ia. Последние -- это так называемые core-collapse supernovae, т.е. результат коллапса массивных звезд на последнем этапе жизни. Типов этих core-collapse - великое множетсво, их спектры и кривые блеска (изменение яркости со временем) зависят от кучи факторов, включая химический состав. '
    },
    {
        id: 2,
        img: "https://p.favim.com/orig/2018/08/09/creativity-animals-naomi-lord-Favim.com-6137536.jpg",
        name: 'Meerim Egemberdieva,  6 месяца назад',
        comment: 'Ну и интересное замечание -- thermal runaway и core-collapse это процессы, отличающиеся друг от друга, а главное происходящие с совершенно разными объектами (крохотный БК массой 1.44Msun vs ядро в несколько масс (иногда десятков масс) Солнца в сверхмассивной звезде), но их наблюдаемые характеристики достаточно схожи, чтобы изначально поместить их в одну категорию "сверхновые" и только спустя некоторое время понять, что Ia (и подтипы) отличаются от всех остальных сверхновых.'
    }
]

export const cards = [
    {
        id:1,
        name: "Beksultan",
        email:"beks@gmail.com",
        phone: +996550145145,
        website:"www.mail.ru",
        companyName: "Megacom"
    },
    {
        id:2,
        name: "Askar",
        email:"asko@gmail.com",
        phone: +996550123123,
        website:"www.askar.ru",
        companyName: "Beeline"
    },
    {
        id:3,
        name: "Aizhan",
        email:"aizhan@gmail.com",
        phone: +996550159159,
        website:"www.aizhan.com",
        companyName: "Nur Telecom"
    },
    {
        id:4,
        name: "Aigerim",
        email:"aigerim@gmail.com",
        phone: +996555147147,
        website:"www.aigerim.com",
        companyName: "Google"
    },
    {
        id:5,
        name: "Meerim",
        email:"meerim@gmail.com",
        phone: +996555111111,
        website:"www.meerim.com",
        companyName: "Google"
    },
    {
        id:6,
        name:"Aidana",
        email: "aidana@gmail.com",
        phone: +996550148148,
        website: "www.aidana.com",
        companyName: "Facebook"
    },
    {
        id:7,
        name: "Aliya",
        email: "aliya@gmail.com",
        phone: +996555454545,
        website: "www.aliya.com",
        companyName: "Yandex"
    },
    {
        id:8,
        name: "Damir",
        email: "damir@gmail.com",
        phone: +996700700700,
        website: "www.damir.com",
        companyName: "Tesla"
    },
    {
        id:9,
        name:"Melis",
        email: "melis@gmail.com",
        phone: +996555400400,
        website: "www.melis.com",
        companyName: "Turing"
    },
    {
        id:10,
        name:"Atahan",
        email: 'atahan@gmail.com',
        phone: +996555100100,
        website: 'www.atahan.com',
        companyName: 'Amazon'
    }
]

export const basket = [
    {
        id:1,
        number:1,
        name:"Чили",
        count:5,
        total:3000
    },
    {
        id:1,
        number:2,
        name:"Детская",
        count:1,
        total:458
    },
]