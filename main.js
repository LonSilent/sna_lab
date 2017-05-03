const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes: routes
})

var app = new Vue({
    router,
    el: '#sna_app',
    data: {
        foodCards: [{
            fid: 1,
            title: 'Card Title 1',
            // img: 'http://lorempixel.com/800/400/food/1', 
            img: 'images/food/f1.jpeg',
            content: 'I am a very simple card 1. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            unliked: true
        }, {
            fid: 2,
            title: 'Card Title 2',
            // img: 'http://lorempixel.com/800/400/food/2', 
            img: 'images/food/f2.jpeg',
            content: 'I am a very simple card 2. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            unliked: true
        }, {
            fid: 3,
            title: 'Card Title 3',
            // img: 'http://lorempixel.com/800/400/food/3', 
            img: 'images/food/f3.jpeg',
            content: 'I am a very simple card 3. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            unliked: true
        }],
        people: [{
            uid: 1,
            name: 'Anna',
            // img: 'http://lorempixel.com/50/50/people/1'
            img: 'images/people/p1.jpeg'
        }, {
            uid: 2,
            name: 'Leo',
            // img: 'http://lorempixel.com/50/50/people/2'
            img: 'images/people/p2.jpeg'
        }, {
            uid: 3,
            name: 'Tom',
            // img: 'http://lorempixel.com/50/50/people/3'
            img: 'images/people/p3.jpeg'
        }, {
            uid: 4,
            name: 'Mary',
            // img: 'http://lorempixel.com/50/50/people/4'
            img: 'images/people/p4.jpeg'
        }, {
            uid: 5,
            name: 'Sam',
            // img: 'http://lorempixel.com/50/50/people/5'
            img: 'images/people/p5.jpeg'
        }, {
            uid: 6,
            name: 'Angel',
            // img: 'http://lorempixel.com/50/50/people/6'
            img: 'images/people/p6.jpeg'
        }]
    },
    methods: {
        like: function(index) {
            console.log(index);
            this.foodCards[index].unliked = !this.foodCards[index].unliked;
        }
    }
}).$mount('#sna_app')
