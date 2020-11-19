import { TitleBlock, TextBlock } from './blocks';
import { Form } from './form';

export class Sidebar {
  constructor(selector, observer) {
    this.$el = document.querySelector(selector);
    this.observer = observer;

    this._init();
  }

  _init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template() {
    return [
      new Form('title', ['value', 'styles', 'tag']).render(),
      new Form('text', ['value', 'styles']).render(),
    ].join('');
  }

  addBlock(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    let newBlock = null;

    if (type === 'title') {
      const tag = event.target.tag.value;
      newBlock = new TitleBlock(value, { styles, tag });
      event.target.tag.value = '';
    } else if (type === 'text') {
      newBlock = new TextBlock(value, { styles });
    }

    this.observer.notify(newBlock);
    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
