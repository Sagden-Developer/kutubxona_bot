const TelegrmaAPI = require("node-telegram-bot-api");

const api = "5983377042:AAGjUwDDzsFGMLJ-hANIv8-pEAoKJR13fko";

const bot = new TelegrmaAPI(api, {polling: true});

bot.on("message", msg => {
    if(msg.text==="/start"){
        bot.sendMessage(msg.chat.id, `  
        Assalomu alaykum ${msg.chat.first_name}.
Xalq Kutubxonamiz botiga bog'langaningiz uchun rahmat.
Kutubxonaga a'zo bo'lish bepul.
1000 + dan oshiq kitoblardan foydalaning!
Kitoblar uyingizga tekinga yetkazib beriladi.

Iltimos quyidagi ma'lumotni yuborishingizni so'raymiz:
Ismingiz
Familyangiz
Manzilingiz
Telefon raqamingiz
Kerakli kitob nomi

Tez orada sizga bog'lanamiz!`);
    }else{
        let chatId = 1406564230;
        bot.sendMessage(chatId, msg.text)
    }

})