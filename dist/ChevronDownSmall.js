
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
            children.concat([_c('path',{attrs:{"d":"M4 5.5a.747.747 0 00.53-.22c.607-.577 1.97-2.038 3.24-3.24A.75.75 0 106.71.98L4 3.69 1.29.98A.75.75 0 10.23 2.04l3.24 3.24A.747.747 0 004 5.5z"}})])
          )
        }
      }
    