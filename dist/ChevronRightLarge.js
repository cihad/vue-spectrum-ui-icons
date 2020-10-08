
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"16","width":"12"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11.5 8a1.241 1.241 0 00-.386-.897L4.128.36a1.248 1.248 0 10-1.733 1.797L8.45 8l-6.058 5.84a1.248 1.248 0 101.733 1.797L11.117 8.9A1.245 1.245 0 0011.5 8z"}})])
          )
        }
      }
    