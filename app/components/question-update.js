import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    showUpdateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    cancelUpdate() {
      this.set('updateQuestionForm', false);
    },
    updateQuestion(question) {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        note: this.get('note') ? this.get('note') : "",
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});