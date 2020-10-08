
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
            children.concat([_c('path',{attrs:{"d":"M9.605 13.843L3.55 8l6.056-5.84A1.248 1.248 0 107.876.363L.882 7.1a1.243 1.243 0 00.003 1.797l6.988 6.742a1.248 1.248 0 101.732-1.796z"}})])
          )
        }
      }
    