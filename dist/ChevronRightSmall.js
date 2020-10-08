
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"8","width":"6"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5.5 4a.747.747 0 00-.22-.53C4.703 2.862 3.242 1.5 2.04.23A.75.75 0 10.98 1.29L3.69 4 .98 6.71a.75.75 0 101.06 1.06l3.24-3.24A.747.747 0 005.5 4z"}})])
          )
        }
      }
    