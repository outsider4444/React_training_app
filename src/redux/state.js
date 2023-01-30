let store ={
    _state: {
        profilePage: {
            postData : [
                { id: "1", text: "Привет", name: "Dima", likesCount: 12 },
                { id: "2", text: "Букет", name: "Danya", likesCount: 0 },
                { id: "3", text: "Омлет", name: "Lesha", likesCount: 1 },
            ],
            friendsData: [
                {id: "1", name: "Андрей", avatar: "https://vraki.net/sites/default/files/inline/images/1_6.png"} ,
                {id: "2", name: "Денис", avatar: "https://vraki.net/sites/default/files/inline/images/1_6.png"} ,
                {id: "3", name: "Света", avatar: "https://vraki.net/sites/default/files/inline/images/1_6.png"} ,
            ],
            // newPostText: 'samurai',
            newPostText: '',
        },
        messagesPage : {
            dialogsData : [
                { id: "1", name: "Хрюшка",  }, { id: "2", name: "Говрюша", }, { id: "3", name: "Павлуша", },{ id: "4", name: "Груша", },
            ],
            messagesData : [{ id: "1", message: "Привет", }, { id: "2", message: "Букет", }, { id: "3", message: "Омлет", },],
        },
        sidebar : {
        }
    },
    getState(){
      return this._state;
    },

    _callSubscriber(){
        console.log('State изменен')
    },

    addPost(){
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
            name: "Я"
        };
        // Отправка значений и обнуление текущего текста
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;