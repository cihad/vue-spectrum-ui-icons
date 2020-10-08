
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"10","width":"8"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7.99 3.99a1 1 0 01-1.707.707L5 3.414V9a1 1 0 01-2 0V3.414L1.717 4.697A1 1 0 11.303 3.283l2.99-2.98a1 1 0 011.414 0l2.99 2.98a.997.997 0 01.293.707z"}})])
          )
        }
      }
    