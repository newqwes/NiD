
let state = {
    profilePage: {
        postData: [
            { id: 0, avatar: "https://qwes.pw/profile/AnnaNails/img/photo.jpg", name: "Аня", postText: "Привет" },
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
            { name: "Аня", avatar: "https://qwes.pw/profile/AnnaNails/img/photo.jpg", url: "/Dialogs/Anna" },
            { name: "Майя", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", url: "/Dialogs/Maya" },
            { name: "Азим", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", url: "/Dialogs/Azim" },
            { name: "Бабуля", avatar: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg", url: "/Dialogs/Grandmather" },
            { name: "Назар", avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png", url: "/Dialogs/Nazar" }
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