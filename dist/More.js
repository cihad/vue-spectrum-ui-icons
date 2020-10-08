
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"18","width":"18"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9 7.1A1.9 1.9 0 117.1 9 1.9 1.9 0 019 7.1zm6 0A1.9 1.9 0 1113.1 9 1.9 1.9 0 0115 7.1zm-12 0A1.9 1.9 0 111.1 9 1.9 1.9 0 013 7.1z"}})])
          )
        }
      }
    