import ScrollableComponents from './ScrollableComponents';
import Navigation from './Navigation';
import Charts from './Charts';

class App {
  static init() {
    const nav = new Navigation();
    const scrollableComponents = new ScrollableComponents();
    const charts = new Charts();

    nav.init();
    scrollableComponents.init();
    charts.init();
  }
}

export default App;
