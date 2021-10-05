const hotel = require("../model/hotel");

exports.index = async (req ,res) => {
        // hotel.create({
        //     name:"هتل اسپیناس پالاس",
        //     slug:"espinas_palace",
        //     city:"تهران",
        //     address:"سعادت آباد-انتهای بزرگراه یادگار امام ، میدان بهرود",
        //     rate:"٥.٠",
        //     images_url:{
        //         main_image: "/static/media/hotel1.d86ca7b5.png",
        //         second_image: "/static/media/hotel2.f363b9c5.png",
        //         third_image: "/static/media/hotel3.d693e040.png",
        //         room_image: "/static/media/hotel.c5547b13.png",
        //         search_image: "/static/media/hotel.f76f73e1.png",
        //         slider_image: "/static/media/hotel.a79fb6a7.png",
        //     },
        //     price: "١,٢٧٥,٠٠٠",
        //     about: "هتل 4 ستاره آتانا یکی از هتل‌های نوساز و تازه تأسیس تهران است که با زیربنای ۱۰۲۰۰ مترمربعی خود آماده میزبانی از مسافرانی است که راهی شهر تهران می‌شوند. این هتل مجلل و لوکس تهران با استفاده از به‌روزترین متد و مدرن‌ترین تجهیزات ساخته شده که در حوالی خیابان ولیعصر و میدان فلسطین خودنمایی می‌کند. اتاق‌های هتل آتانا تهران در قالب اتاق‌هایی توئین، دبل، دو تخته کینگ و سوئیت دو تخته به میهمانان عرضه می‌شود. اتاق‌ها تماماً به سیستم‌های لمسی مجهز شده‌اند و تخت‌های استاندارد و مبلمان شیک و مدرن نوید اقامتی پر از آسایش را به میهمانان می‌دهد. با رزرو هتل آتانا تهران می‌توانید به مرکز شهر و بسیاری از جاهای دیدنی تهران دسترسی راحتی داشته باشید. این خیابان تنها 3 دقیقه تا خیابان ولیعصر فاصله دارد و کمتر از 5 دقیقه به خیابان انقلاب خواهید رسید. از نزدیک‌ترین جاذبه های تهران به این هتل می‌توان به پارک لاله، موزه هنرهای معاصر تهران، خیابان سی تیر، کاخ گلستان و سایر دیدنی‌ها اشاره کرد. نزدیکی به مراکز اداری مرکز شهر و بیمارستان‌های امام خمینی، بیمارستان ساسان، بیمارستان پارس و غیره نیز باعث می‌شود تا بسیاری از افراد در سفر به تهران این هتل را برای اقامت انتخاب کنند.",
        //     facilities: ["تلویزیون","سیستم تهویه هوا","حمام","یخچال","چای ساز","تلفن",
        //     "صندوق امانات","سرویس بهداشتی فرنگی"],
        //     near_places:["پارک ژوراسیک"]
        // })
    const hotels = await hotel.find({},{name:1,slug:1,city:1,address:1,rate:1,price:1,about:1,facilities:1,near_places:1,images_url:1});
    res.status(200).send({
        hotels
    })
}