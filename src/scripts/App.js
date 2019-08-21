import ScrollableComponents from './ScrollableComponents';
import Navigation from './Navigation';

class App {
  static init() {
    const nav = new Navigation();
    const scrollableComponents = new ScrollableComponents();

    nav.init();
    scrollableComponents.init();
  }
}

export default App;
