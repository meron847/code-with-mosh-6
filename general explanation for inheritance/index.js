function HtmlElement(){
    this.click= function(){
        console.log('clicked');
    }
}

HtmlElement.prototype.focus= function(){
    console.log('focused');
}

function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem =function(item){
        this.items.push(item);
    }

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1);//This line is used to delet item at the given position
    }
}

HtmlElement.prototype=new HtmlElement();