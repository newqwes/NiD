import profilePageReducer from "./profile-reducer";
import dialogPageReducer from "./dialog-reducer";
import sidebarPageReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        {
          id: 0,
          avatar:
            "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png",
          name: "Аня",
          postText: "Привет",
        },
        {
          id: 1,
          avatar:
            "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png",
          name: "Майя",
          postText: "Привет это Майя",
        },
        {
          id: 2,
          avatar:
            "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
          name: "Азим",
          postText: "Привет братиш!",
        },
      ],
      galaryPhotosData: [
        {
          id: 0,
          urlGalaryPhoto:
            "https://cdn.pixabay.com/photo/2020/03/18/19/08/landscape-4945254_960_720.jpg",
        },
        {
          id: 1,
          urlGalaryPhoto:
            "https://storge.pic2.me/c/1360x800/506/56274286d6905.jpg",
        },
        {
          id: 2,
          urlGalaryPhoto:
            "https://poster.nicefon.ru/2016_09/26/1080x610/1582397179b17071f8f9f0.jpg",
        },
        {
          id: 3,
          urlGalaryPhoto:
            "https://storge.pic2.me/c/1360x800/782/588ef87f91541.jpg",
        },
      ],
      ownInformation: {
        name: "Назар",
        avatar:
          "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
      },
      postTextarea: "",
    },
    dialogPage: {
      dialogData: [
        {
          id: 0,
          name: "Аня",
          dialogTextarea: "",
          nameOwn: "Назар",
          avatarOwn:
            "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          avatar:
            "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png",
          url: "/Dialogs/Anna",
          message: {
            textEnemy: "Привет, я Аня как дела?",
            textOwn: ["Нормально, твои как?"],
          },
        },
        {
          id: 1,
          name: "Майя",
          dialogTextarea: "",
          nameOwn: "Назар",
          avatarOwn:
            "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          avatar:
            "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png",
          url: "/Dialogs/Maya",
          message: {
            textEnemy: "Привет, я Майя как дела?",
            textOwn: ["Привет тетя, нормально, твои как?"],
          },
        },
        {
          id: 2,
          name: "Азим",
          dialogTextarea: "",
          nameOwn: "Назар",
          avatarOwn:
            "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          avatar:
            "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
          url: "/Dialogs/Azim",
          message: {
            textEnemy: "Привет, я Азимыч как дела?",
            textOwn: ["Привет бро, нормально, твои как?"],
          },
        },
        {
          id: 3,
          name: "Бабуля",
          dialogTextarea: "",
          nameOwn: "Назар",
          avatarOwn:
            "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          avatar:
            "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg",
          url: "/Dialogs/Grandmather",
          message: {
            textEnemy: "Привет, я Катя как дела?",
            textOwn: ["Привет бабуль, нормально, твои как?"],
          },
        },
        {
          id: 4,
          name: "Назар",
          dialogTextarea: "",
          nameOwn: "Назар",
          avatarOwn:
            "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          avatar:
            "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
          url: "/Dialogs/Nazar",
          message: {
            textEnemy: "Привет, я",
            textOwn: ["Привет!"],
          },
        },
      ],
    },
    menuSideBar: {
      menuItemData: [
        { value: "Новости", linkUrl: "/News" },
        { value: "Сообщения", linkUrl: "/Dialogs" },
        { value: "Чат", linkUrl: "/Chat" },
      ],
    },
  },
  _callSubscriber() {},
  subscribe(observer) {
    // обсерв пришел из индекса это вся страница целиком присваиваем ее коллсубскрайбу
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    /*
        редьюсер вернет стейт измененный для конкретной страницы при помощи актион и 
        мы присвоим в настоящий стейт его, передадим его субскрайбу тот в свою 
        очередь перерисует индекс.хтмл
        */
    store._state.profilePage = profilePageReducer(
      store._state.profilePage,
      action
    );
    store._state.dialogPage = dialogPageReducer(
      store._state.dialogPage,
      action
    );
    store._state.menuSideBar = sidebarPageReducer(
      store._state.menuSideBar,
      action
    );
    this._callSubscriber(this._state); // здесь в коллсубскрайб лежит наша индекс и передаю ему новый стейт который уже изменился но не отобразился
  },
};
export default store;
