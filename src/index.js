import { model } from './model';
import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
import { Observable } from './classes/observable';
import './styles/main.css';

export const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

const site = new Site('#site');
const observer = new Observable();
observer.subscribe(updateCallback);
new Sidebar('#panel', observer);
site.render(model);
