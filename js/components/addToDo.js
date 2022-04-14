import Alert from "./alert.js";

export default class AddToDo {
    constructor(){
        this.addBtn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.alert = new Alert('alert');
    }

    onClick(callback){
        this.addBtn.onclick = () => {
            if(title.value==='' || description.value===''){
                this.alert.show('Title and Description are required');
            } else {
                this.alert.hide();
                callback(title.value,description.value)
            }
        }
    }
}