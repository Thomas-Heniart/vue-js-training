const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'first item'
      },
      {
        text: 'second item'
      }
    ]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Test input model'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [{
        id: 0,
        text: 'Vegetables'
      },
      {
        id: 1,
        text: 'Meat'
      },
      {
        id: 2,
        text: 'Cheese'
      }
    ],
    rawHtml: 'This should be red'
  }
});

const app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Hello world'
  },
  computed: {
    revertedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
});

const app9 = new Vue({
  el: '#app-9',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName
      },
      set: function (fullName) {
        var names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1]
      }
    }
  }
});

const mustAskQuestion = 'I cannot give you an answer until you ask a question';

const app10 = new Vue({
  el: '#app-10',
  data: {
    question: '',
    answer: mustAskQuestion
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop tiping...';
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)';
        return
      }

      if (this.question.length === 0) {
        this.answer = mustAskQuestion;
        return
      }

      this.answer = 'Thinking...';

      const self = this;
      axios
        .get('https://yesno.wtf/api')
        .then(function (response) {
          self.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          self.answer = 'Error, Could not reach the API. ' + error
        })
    }
  }
});

const app11 = new Vue({
  el: '#app-11',
  data: {
    isActive: true,
    hasError: false
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.hasError && !this.isActive
      }
    }
  },
  methods: {
    switchClasses: function () {
      this.isActive = !this.isActive;
      this.hasError = !this.hasError
    }
  }
});

const app12 = new Vue({
  el: '#app-12',
  data: {
    login: '',
    email: '',
    username: '',
    loginType: 'username'
  },
  computed: {
    nextLoginType: function () {
      return (this.loginType === 'username') ? 'email' : 'username'
    }
  },
  methods: {
    switchLoginType: function () {
      this.loginType = (this.loginType === 'username') ? 'email' : 'username'
    }
  }
})