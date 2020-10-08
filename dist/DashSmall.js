
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"10","width":"10"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M8 4H2a1 1 0 000 2h6a1 1 0 000-2z"}})])
          )
        }
      }
    