
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"4","width":"16"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15.49 3H.51a.5.5 0 100 1h14.98a.5.5 0 100-1zM.51 1h14.98a.5.5 0 000-1H.51a.5.5 0 000 1z"}})])
          )
        }
      }
    