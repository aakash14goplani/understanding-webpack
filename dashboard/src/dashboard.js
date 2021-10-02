import Navigation from './components/navigation-bar/navigation-bar.js';

const url = window.location.pathname;

const navigationItems = [{
  url: '/index',
  title: 'Index Page'
}, {
  url: '/kiwi',
  title: 'Kiwi Page'
}];

const navigation = new Navigation();
navigation.render(navigationItems);

if (url === '/index') {
  import('IndexApp/IndexPage').then(module => {
    const IndexApp = module.default;
    const indexPage = new IndexApp();
    indexPage.render();
  });
} else if (url === '/kiwi') {
  import('KiwiApp/KiwiPage').then(module => {
    const KiwiApp = module.default;
    const kiwiPage = new KiwiApp();
    kiwiPage.render();
  });
}
