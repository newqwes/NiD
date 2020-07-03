
let state = {
    profilePage: {
        postData: [
            { id: 0, avatar: "https://images.clipartlogo.com/files/istock/previews/9730/97305655-avatar-icon-of-girl-in-a-wide-brim-felt-hat.jpg", name: "Аня", postText: "Привет" },
            { id: 1, avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", name: "Майя", postText: "Привет это Майя" },
            { id: 2, avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", name: "Азим", postText: "Привет братиш!" }
        ],
        galaryPhotosData: [
            { id: 0, urlGalaryPhoto: "https://cdn.pixabay.com/photo/2020/03/18/19/08/landscape-4945254_960_720.jpg" },
            { id: 1, urlGalaryPhoto: "https://storge.pic2.me/c/1360x800/506/56274286d6905.jpg" },
            { id: 2, urlGalaryPhoto: "https://poster.nicefon.ru/2016_09/26/1080x610/1582397179b17071f8f9f0.jpg" },
            { id: 3, urlGalaryPhoto: "https://storge.pic2.me/c/1360x800/782/588ef87f91541.jpg" }
        ]
    },
    dialogPage: {
        dialogData: [
            { id: 0, name: "Аня", avatar: "https://images.clipartlogo.com/files/istock/previews/9730/97305655-avatar-icon-of-girl-in-a-wide-brim-felt-hat.jpg", url: "/Dialogs/Anna", 
            message: {
                textEnemy: "Привет, я Аня как дела?", textOwn: "Нормально, твои как?"
            } },
            { id: 1, name: "Майя", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", url: "/Dialogs/Maya", 
            message: {
                textEnemy: "Привет, я Майя как дела?", textOwn: "Привет тетя, нормально, твои как?"
            } },
            { id: 2, name: "Азим", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", url: "/Dialogs/Azim", 
            message: {
                textEnemy: "Привет, я Азимыч как дела?", textOwn: "Привет бро, нормально, твои как?"
            } },
            { id: 3, name: "Бабуля", avatar: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg", url: "/Dialogs/Grandmather", 
            message: {
                textEnemy: "Привет, я Катя как дела?", textOwn: "Привет бабуль, нормально, твои как?"
            } },
            { id: 4, name: "Назар", avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png", url: "/Dialogs/Nazar", 
            message: {
                textEnemy: "Привет, я", textOwn: "Привет!"
            } }
        ]
    },
    menuSideBar: {
        menuItemData: [
            { value: "Новости", linkUrl: "/News" },
            { value: "Сообщения", linkUrl: "/Dialogs" },
            { value: "Чат", linkUrl: "/Chat" }
        ]
    }
};
export default state;