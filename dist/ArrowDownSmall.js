
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
            children.concat([_c('path',{attrs:{"d":"M7.99 6.01a1 1 0 00-1.707-.707L5 6.586V1a1 1 0 00-2 0v5.586L1.717 5.303A1 1 0 10.303 6.717l2.99 2.98a1 1 0 001.414 0l2.99-2.98a.997.997 0 00.293-.707z"}})])
          )
        }
      }
    