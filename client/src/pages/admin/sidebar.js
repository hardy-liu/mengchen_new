new Vue({
  el: '#sidebar',
  data: {
    uri: {
      home: {
        isActive: false,
      },
      statement: {
        isActive: false,
        summary: {
          isActive: false,
        },
        hourly: {
          isActive: false,
        },
        daily: {
          isActive: false,
        },
        monthly: {
          isActive: false,
        },
      },
      player: {
        isActive: false,
        list: {
          isActive: false,
        },
        'top-up': {
          isActive: false,
        },
      },
      gm: {
        isActive: false,
        notification: {
          isActive: false,
          marquee: {
            isActive: false,
          },
          login: {
            isActive: false,
          },
        },
        room: {
          isActive: false,
          friend: {
            isActive: false,
          },
          coin: {
            isActive: false,
          },
        },
        ai: {
          isActive: false,
          list: {
            isActive: false,
          },
        },
        whitelist: {
          isActive: false,
          list: {
            isActive: false,
          },
        },
        server: {
          isActive: false,
          list: {
            isActive: false,
          },
          'func-switch': {
            isActive: false,
          },
        },
      },
      stock: {
        isActive: false,
        'apply-request': {
          isActive: false,
        },
        'apply-list': {
          isActive: false,
        },
        'apply-history': {
          isActive: false,
        },
      },
      agent: {
        isActive: false,
        create: {
          isActive: false,
        },
        list: {
          isActive: false,
        },
      },
      'top-up': {
        isActive: false,
        admin: {
          isActive: false,
        },
        agent: {
          isActive: false,
        },
        player: {
          isActive: false,
        },
      },
      order: {
        isActive: false,
        wechat: {
          isActive: false,
        },
        item: {
          isActive: false,
        },
      },
      system: {
        isActive: false,
        log: {
          isActive: false,
        },
      },
    },
  },

  methods: {
    activateMenu () {   //active 当前访问的uri在sidebar中的菜单项
      let _self = this
      let currentUrl = _.trim(location.href, '/')   //去掉尾部的'/'
      let currentUri = currentUrl.match(/http:\/\/[\w.-]+\/admin\/([\w/-]+)/)[1]
        .split('/')

      //被访问的页面的菜单项会被设置为active
      currentUri.reduce(function (lastValue, currentValue) {
        lastValue[currentValue].isActive = true
        return lastValue[currentValue]
      }, _self.uri)
    },
  },

  created: function () {
    this.activateMenu()
  },
})