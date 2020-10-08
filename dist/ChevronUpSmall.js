
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"6","width":"8"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4 .5a.747.747 0 00-.53.22C2.862 1.297 1.5 2.758.23 3.96a.75.75 0 101.06 1.06L4 2.31l2.71 2.71a.75.75 0 101.06-1.06L4.53.72A.747.747 0 004 .5z"}})])
          )
        }
      }
    