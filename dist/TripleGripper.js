
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"7","width":"10"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M9.49 6H.51a.5.5 0 100 1h8.98a.5.5 0 000-1zM9.49 3H.51a.5.5 0 100 1h8.98a.5.5 0 000-1zM.51 1h8.98a.5.5 0 000-1H.51a.5.5 0 000 1z"}})])
          )
        }
      }
    