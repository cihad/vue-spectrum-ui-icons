
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"10","width":"6"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5.99 5a.997.997 0 00-.293-.707L1.717.303A1 1 0 10.303 1.717L3.586 5 .303 8.283a1 1 0 101.414 1.414l3.98-3.99A.997.997 0 005.99 5z"}})])
          )
        }
      }
    