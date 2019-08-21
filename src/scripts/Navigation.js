class Navigation {
  constructor () {
    this.nav = document.querySelector('#mainNavigation');
    this.openTrigger = document.querySelector('#openMainNavigation');
    this.closeTrigger = document.querySelector('#closeMainNavigation');
    this.body = document.querySelector('body');
    this.desktopBreakpoint = 992;
    this.win = window;
    this.backdrop = this.createElem('div', {
      className: 'backdrop'
    });
  }

  createElem (tag, options = {}) {
    const elem = document.createElement(tag);
    const { className } = options;

    if (className) {
      elem.className = className;
    }

    return elem;
  }

  open (e) {
    e.preventDefault();

    // avoiding possible issues by making sure the navigation reacts to the click event only on mobile
    if (this.win.innerWidth <= this.desktopBreakpoint) {
      // add the backdrop
      this.body.appendChild(this.backdrop);

      // once the backdrop got added to the DOM, attach a click event to it to close the navigation
      this.backdrop.addEventListener('click', this.close.bind(this));

      // open the navigation
      this.nav.classList.add('show');

      // disable body scroll
      this.body.classList.add('scroll-disabled');
    }
  }

  close () {
    // enable the scroll back
    this.body.classList.remove('scroll-disabled');

    // close the navigation
    this.nav.classList.remove('show');

    // remove the backdrop
    this.backdrop.remove();
  }

  init () {
    if (!this.nav) {
      return;
    }

    this.openTrigger.addEventListener('click', e => this.open(e));
    this.closeTrigger.addEventListener('click', this.close.bind(this));

    // close the nav (if open) when window gets resized over the desktopBreakpoint
    this.win.addEventListener('resize', () => {
      if (this.win.innerWidth > this.desktopBreakpoint && this.nav.classList.contains('show')) {
        this.close();
      }
    });
  }
}

export default Navigation;
