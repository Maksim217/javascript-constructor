import { capitalLetter } from '../utils';

export class Form {
  constructor(type = 'text', options = []) {
    this.type = type;
    this.options = options;
  }

  getFormTemplate() {
    const inputList = this.getInput().join('');
    return `
            <form name="${this.type}">
                <h5>${capitalLetter(this.type)}</h5>
                ${inputList}
                <button type="submit" class="btn btn-primary">Добавить</button>
            </form>
            <hr />
        `;
  }

  getInput() {
    return this.options.map((option) => {
      return `<div class="form-group">
                        <input class="form control form-control-sm" name="${option}" placeholder="${option}">
                    </div>`;
    });
  }

  render() {
    return this.getFormTemplate();
  }
}
