
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"10","width":"9"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8.697 8.283L5.414 5l3.283-3.283A1 1 0 107.283.303l-3.99 3.99a1 1 0 000 1.414l3.99 3.99a1 1 0 101.414-1.414zM1 .01a1 1 0 00-1 1v7.98a1 1 0 002 0V1.01a1 1 0 00-1-1z"}})])
          )
        }
      }
    