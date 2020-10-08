
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
            children.concat([_c('path',{attrs:{"d":"M5.697 8.283L2.414 5l3.283-3.283A1 1 0 104.283.303l-3.98 3.99a1 1 0 000 1.414l3.98 3.99a1 1 0 101.414-1.414z"}})])
          )
        }
      }
    