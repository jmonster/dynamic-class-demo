import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['someClass'],

  // the name of this property matches the value above
  someClass: computed(function() {

    /*
    ember doesn't watch for localstorage changes
    so localstorage.setItem("thing", "false")
    won't have any effect until you refresh the page
    (or somehow trigger this property to recompute)
    */
    const shouldShowThisClassName = localStorage.getItem("thing");

    // string comparison because localstorage is nothin' strings
    // when "false" is stored in localStorage the class "some-class"
    // will NOT be applied
    return (shouldShowThisClassName !== "false")
  })
});
