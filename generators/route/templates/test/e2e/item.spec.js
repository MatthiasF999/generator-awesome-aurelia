import {PageObject<%= className %>} from './index.po.js';
import {PageObjectSkeleton} from '../../skeleton.po.js';

describe('<%= props.title %> module', function() {
  let po<%= className %>;
  let poSkeleton;

  beforeEach(() => {
    po<%= className %> = new PageObject<%= className %>();
    poWelcome = new PageObjectWelcome();

    browser.loadAndWaitForAureliaPage('http://localhost:9000/<%= folder %>');
  });

  it('should load the page and display the page title', () => {
    expect(poSkeleton.getCurrentPageTitle()).toBe('<%= props.title %>');
  });
});
