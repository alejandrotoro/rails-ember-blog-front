import DS from 'ember-data';
export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  isbn: DS.attr(),
  price: DS.attr()
});