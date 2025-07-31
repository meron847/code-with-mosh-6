//we have different object with the same parente all are a render methode(meta) and a render meta behaves differently we have d/f forms for multiple forms of the render meta that what we call polymorphosm.

//solution
function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem= function(item){
        this.items.push(item);
    }

    this.removeItem=function(item){
        this.items.splice(this.items. indexOf(item),1)
    }

    this.render=function(){
        return `
        <select>${this.items.map(item =>`<option>${item}</option>`).join('')}
        <select>`;
    }

}
HtmlSelectElement.prototype=new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src){
    this.src=src;
}