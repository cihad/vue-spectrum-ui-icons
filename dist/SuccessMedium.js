
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"18","width":"18"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9 1a8 8 0 108 8 8 8 0 00-8-8zm5.333 4.54l-6.324 8.13a.6.6 0 01-.437.23h-.037a.6.6 0 01-.425-.176l-3.893-3.9a.6.6 0 010-.849l.663-.663a.6.6 0 01.848 0L7.4 10.991l5.256-6.754a.6.6 0 01.843-.1l.728.566a.6.6 0 01.106.837z"}})])
          )
        }
      }
    